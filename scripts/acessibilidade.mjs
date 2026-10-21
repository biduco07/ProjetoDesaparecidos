// Confere a acessibilidade das telas com o axe, no tema escuro e no claro,
// no desktop e no celular, com a API Abitus simulada (scripts/api-simulada.mjs).
// Também mede o contraste do texto do botão principal com o mouse em cima,
// lendo as cores calculadas pelo navegador.
//
// Uso, com o app rodando (npm start ou o servidor SSR do build):
//   npm i --no-save playwright @axe-core/playwright && npx playwright install chromium
//   node scripts/acessibilidade.mjs [baseUrl] [relatorio.json]
//
// PW_CHANNEL=msedge (ou chrome) usa um navegador já instalado.
// Sai com código 1 se houver violação do axe ou contraste abaixo de 4,5:1.
import { writeFileSync } from 'node:fs';
import { chromium } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';
import {
  abrirDetalhe,
  abrirDialogo,
  aplicarFiltros,
  escolherTema,
  esperarErro,
  esperarLista,
  simularApi,
} from './api-simulada.mjs';

const [baseUrl = 'http://localhost:4200/', relatorio] = process.argv.slice(2);
const REGRAS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'];
const CONTRASTE_MINIMO = 4.5;

const browser = await chromium.launch({ channel: process.env.PW_CHANNEL || undefined });
const resultados = [];
const contrastes = [];

async function analisar(page, rotulo) {
  const { violations } = await new AxeBuilder({ page }).withTags(REGRAS).analyze();
  resultados.push({
    tela: rotulo,
    violacoes: violations.map((v) => ({
      regra: v.id,
      impacto: v.impact,
      elementos: v.nodes.map((n) => n.target.join(' ')),
    })),
  });
}

/**
 * Cor de texto e de fundo calculadas de um elemento, em sRGB de 0 a 255.
 * O navegador devolve oklch/oklab/color-mix; um canvas de 1 px converte.
 */
function coresDoBotao(texto) {
  const el = Array.from(document.querySelectorAll('main button')).find((b) =>
    b.textContent.includes(texto)
  );
  const estilo = getComputedStyle(el);
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  const rgb = (cor) => {
    ctx.clearRect(0, 0, 1, 1);
    ctx.fillStyle = cor;
    ctx.fillRect(0, 0, 1, 1);
    return Array.from(ctx.getImageData(0, 0, 1, 1).data.slice(0, 3));
  };
  return { texto: rgb(estilo.color), fundo: rgb(estilo.backgroundColor) };
}

function luminancia([r, g, b]) {
  const canal = (c) => {
    const v = c / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * canal(r) + 0.7152 * canal(g) + 0.0722 * canal(b);
}

function contraste(a, b) {
  const [l1, l2] = [luminancia(a), luminancia(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

async function medirBotao(page, texto, rotulo) {
  const repouso = await page.evaluate(coresDoBotao, texto);
  await page.locator('main button', { hasText: texto }).first().hover();
  await page.waitForTimeout(400); // transition-all de 150 ms
  const hover = await page.evaluate(coresDoBotao, texto);
  await page.mouse.move(0, 0);
  contrastes.push({
    botao: rotulo,
    repouso: { ...repouso, razao: contraste(repouso.texto, repouso.fundo) },
    hover: { ...hover, razao: contraste(hover.texto, hover.fundo) },
  });
}

async function novaPagina(tema, viewport, opts) {
  const ctx = await browser.newContext({ viewport, locale: 'pt-BR' });
  await escolherTema(ctx, tema);
  const page = await ctx.newPage();
  await simularApi(page, opts);
  return page;
}

const telas = [
  ['desktop', { width: 1366, height: 900 }],
  ['celular', { width: 390, height: 844 }],
];

for (const tema of ['escuro', 'claro']) {
  for (const [aparelho, viewport] of telas) {
    const r = (tela) => `${tela} (${tema}, ${aparelho})`;
    {
      const page = await novaPagina(tema, viewport);
      await page.goto(baseUrl);
      await esperarLista(page);
      await analisar(page, r('listagem'));
      if (aparelho === 'desktop') {
        await medirBotao(page, 'Consultar', `Consultar (${tema})`);
      }

      await aplicarFiltros(page);
      await analisar(page, r('filtros'));

      await abrirDetalhe(page);
      await analisar(page, r('detalhe'));
      if (aparelho === 'desktop') {
        await medirBotao(page, 'Encontrou Essa Pessoa?', `Encontrou Essa Pessoa? (${tema})`);
      }

      await abrirDialogo(page, 'src/assets/semfoto.jpg');
      await analisar(page, r('diálogo'));

      // Arquivo recusado: aparece o aviso (toast) de erro.
      await page.setInputFiles('[role="dialog"] input[type="file"]', {
        name: 'documento.pdf',
        mimeType: 'application/pdf',
        buffer: Buffer.from('%PDF-1.4'),
      });
      await page.waitForSelector('[data-sonner-toast]');
      await page.waitForTimeout(500);
      await analisar(page, r('aviso de erro'));
      await page.context().close();
    }
    {
      const page = await novaPagina(tema, viewport, { falhar: true });
      await page.goto(baseUrl);
      await esperarErro(page);
      await analisar(page, r('erro'));
      await page.context().close();
    }
  }
}

await browser.close();

let falhou = false;
console.log('\naxe (wcag2a, wcag2aa, wcag21a, wcag21aa):');
for (const { tela, violacoes } of resultados) {
  console.log(`  ${violacoes.length ? '✗' : '✓'} ${tela}: ${violacoes.length} violação(ões)`);
  for (const v of violacoes) {
    falhou = true;
    console.log(`      ${v.regra} (${v.impacto}): ${v.elementos.join(' | ')}`);
  }
}
console.log('\nContraste do texto do botão principal (mínimo 4,5:1):');
for (const c of contrastes) {
  const ok = c.repouso.razao >= CONTRASTE_MINIMO && c.hover.razao >= CONTRASTE_MINIMO;
  if (!ok) falhou = true;
  const mudou = c.repouso.fundo.join() !== c.hover.fundo.join();
  console.log(
    `  ${ok ? '✓' : '✗'} ${c.botao}: repouso ${c.repouso.razao.toFixed(2)}:1 (fundo rgb(${c.repouso.fundo})), ` +
      `mouse em cima ${c.hover.razao.toFixed(2)}:1 (fundo rgb(${c.hover.fundo})${mudou ? '' : ', sem mudança'})`
  );
}
if (relatorio) {
  writeFileSync(relatorio, JSON.stringify({ resultados, contrastes }, null, 2));
}
process.exit(falhou ? 1 : 0);

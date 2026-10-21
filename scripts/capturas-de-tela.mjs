// Gera as capturas de tela do README (pasta screenshots/) com o Playwright.
//
// A API Abitus é simulada (scripts/api-simulada.mjs): os dados são fictícios
// e nenhuma requisição chega à API real (o POST do formulário nem é disparado).
//
// Uso, com o app rodando (npm start ou o servidor SSR do build):
//   npm i --no-save playwright && npx playwright install chromium
//   node scripts/capturas-de-tela.mjs [baseUrl] [pastaSaida] [imagemParaUpload]
//
// Variáveis opcionais:
//   PW_CHANNEL=msedge (ou chrome)  usa um navegador já instalado em vez do Chromium do Playwright
//   CAPTURA_TEMA=escuro|claro       escolhe o tema antes de abrir o app (sem ela, fica o padrão)
//   CAPTURA_PREFIXO=depois-escuro-  prefixo dos arquivos gerados
import { chromium } from 'playwright';
import {
  abrirDetalhe,
  abrirDialogo,
  aplicarFiltros,
  escolherTema,
  esperarErro,
  esperarLista,
  simularApi,
} from './api-simulada.mjs';

const [
  baseUrl = 'http://localhost:4200/',
  outDir = 'screenshots',
  uploadImg = 'src/assets/semfoto.jpg',
] = process.argv.slice(2);
const prefixo = process.env.CAPTURA_PREFIXO ?? '';
const tema = process.env.CAPTURA_TEMA;

const browser = await chromium.launch({ channel: process.env.PW_CHANNEL || undefined });

async function novaPagina(viewport, opts) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 1, locale: 'pt-BR' });
  await escolherTema(ctx, tema);
  const page = await ctx.newPage();
  await simularApi(page, opts);
  return page;
}

const arquivo = (nome) => `${outDir}/${prefixo}${nome}.png`;

const telas = [
  { sufixo: '', viewport: { width: 1366, height: 900 } },
  { sufixo: 'mobile-', viewport: { width: 390, height: 844 } },
];

for (const { sufixo, viewport } of telas) {
  const celular = viewport.width < 768;
  // No celular a página é longa: corta a captura inteira numa altura legível.
  const paginaInteira = celular
    ? { fullPage: true, clip: { x: 0, y: 0, width: viewport.width, height: 1700 } }
    : { fullPage: true };
  const topo = (altura) =>
    celular ? {} : { clip: { x: 0, y: 0, width: viewport.width, height: altura } };

  // 1. Listagem com totalizadores, 2. filtros aplicados, 3. detalhe e
  // 4. diálogo de envio de informações (preenchido, mas não enviado)
  {
    const page = await novaPagina(viewport);
    await page.goto(baseUrl);
    await esperarLista(page);
    await page.screenshot({ path: arquivo(`${sufixo}listagem`), ...paginaInteira });

    await aplicarFiltros(page);
    await page.screenshot({ path: arquivo(`${sufixo}filtros`), ...paginaInteira });

    await abrirDetalhe(page);
    await page.screenshot({ path: arquivo(`${sufixo}detalhe`), ...topo(700) });

    await abrirDialogo(page, uploadImg);
    await page.screenshot({ path: arquivo(`${sufixo}dialogo-informacoes`) });
    await page.context().close();
  }

  // 5. Estado de erro com "Tentar de novo"
  {
    const page = await novaPagina(viewport, { falhar: true });
    await page.goto(baseUrl);
    await esperarErro(page);
    // No celular a mensagem fica abaixo dos filtros: captura a página inteira.
    await page.screenshot({ path: arquivo(`${sufixo}erro`), ...(celular ? paginaInteira : topo(520)) });
    await page.context().close();
  }
}

await browser.close();
console.log('ok');

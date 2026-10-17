// Gera as capturas de tela do README (pasta screenshots/) com o Playwright.
//
// A API Abitus é simulada com page.route: os dados são fictícios e nenhuma
// requisição chega à API real (o POST do formulário nem é disparado).
//
// Uso, com o app rodando (npm start ou o servidor SSR do build):
//   npm i --no-save playwright && npx playwright install chromium
//   node scripts/capturas-de-tela.mjs [baseUrl] [pastaSaida] [imagemParaUpload]
import { chromium } from 'playwright';

const [
  baseUrl = 'http://localhost:4200/',
  outDir = 'screenshots',
  uploadImg = 'src/assets/semfoto.jpg',
] = process.argv.slice(2);
const API = 'https://abitus-api.geia.vip';

const nomes = [
  ['ANA CLARA DE SOUZA EXEMPLO', 'FEMININO', 17],
  ['JOÃO PEDRO FICTÍCIO DA SILVA', 'MASCULINO', 34],
  ['MARIA EDUARDA MODELO', 'FEMININO', 22],
  ['CARLOS HENRIQUE TESTE', 'MASCULINO', 45],
  ['BEATRIZ SANTOS DEMONSTRAÇÃO', 'FEMININO', 15],
  ['LUCAS GABRIEL EXEMPLAR', 'MASCULINO', 28],
  ['FERNANDA LIMA FICTÍCIA', 'FEMININO', 39],
  ['RAFAEL OLIVEIRA AMOSTRA', 'MASCULINO', 19],
  ['JULIANA COSTA PROTÓTIPO', 'FEMININO', 52],
  ['MATEUS ALMEIDA ENSAIO', 'MASCULINO', 61],
  ['LARISSA PEREIRA SIMULADA', 'FEMININO', 26],
  ['GUSTAVO RIBEIRO HIPOTÉTICO', 'MASCULINO', 31],
  ['CAMILA ROCHA ILUSTRATIVA', 'FEMININO', 44],
  ['DIEGO MARTINS EXEMPLO', 'MASCULINO', 23],
];
const locais = [
  'Cuiabá/MT', 'Várzea Grande/MT', 'Rondonópolis/MT', 'Sinop/MT',
  'Tangará da Serra/MT', 'Cáceres/MT', 'Barra do Garças/MT',
];

const pessoas = nomes.map(([nome, sexo, idade], i) => {
  const localizado = i % 4 === 3;
  const dia = String((i * 3) % 27 + 1).padStart(2, '0');
  return {
    id: 1000 + i,
    nome,
    sexo,
    idade,
    urlFoto: null,
    vivo: true,
    ultimaOcorrencia: {
      ocoId: 5000 + i,
      dtDesaparecimento: `2026-0${(i % 8) + 1}-${dia}T14:30:00`,
      dataLocalizacao: localizado ? '2026-09-20' : null,
      encontradoVivo: localizado,
      localDesaparecimentoConcat: `Centro - ${locais[i % locais.length]}`,
      listaCartaz: [],
      ocorrenciaEntrevDesapDTO: {
        informacao: 'Vista pela última vez saindo do trabalho, perto do terminal de ônibus.',
        vestimentasDesaparecido: 'Camiseta azul, calça jeans e tênis branco',
      },
    },
  };
});

function filtrar(url) {
  const p = url.searchParams;
  const nome = (p.get('nome') || '').toUpperCase();
  const min = Number(p.get('faixaIdadeInicial') || 0);
  const max = Number(p.get('faixaIdadeFinal') || 0);
  const sexo = p.get('sexo');
  const status = p.get('status');
  const pagina = Number(p.get('pagina') || 0);
  const porPagina = Number(p.get('porPagina') || 12);
  const lista = pessoas.filter(
    (x) =>
      (!nome || x.nome.includes(nome)) &&
      (!min || x.idade >= min) &&
      (!max || x.idade <= max) &&
      (!sexo || x.sexo === sexo) &&
      (!status ||
        (status === 'LOCALIZADO') === Boolean(x.ultimaOcorrencia.dataLocalizacao))
  );
  // A API real tem milhares de registros; o total simulado deixa o paginador realista.
  const totalElements = nome || min || max || sexo || status ? lista.length : 1248;
  return {
    content: lista.slice(pagina * porPagina, (pagina + 1) * porPagina),
    totalElements,
    totalPages: Math.ceil(totalElements / porPagina),
    page: pagina,
    size: porPagina,
  };
}

async function mockApi(page, { falhar = false } = {}) {
  await page.route(`${API}/**`, (route) => {
    const req = route.request();
    const url = new URL(req.url());
    if (req.method() !== 'GET') {
      // Nada é enviado para a API real.
      return route.fulfill({ status: 200, json: {} });
    }
    if (url.pathname.endsWith('/aberto/estatistico')) {
      return route.fulfill({
        json: { quantPessoasDesaparecidas: 1037, quantPessoasEncontradas: 211 },
      });
    }
    if (url.pathname.endsWith('/aberto/filtro')) {
      if (falhar) return route.fulfill({ status: 503, body: 'Service Unavailable' });
      return route.fulfill({ json: filtrar(url) });
    }
    const m = url.pathname.match(/\/v1\/pessoas\/(\d+)$/);
    if (m) {
      const p = pessoas.find((x) => x.id === Number(m[1]));
      return route.fulfill(p ? { json: p } : { status: 404, body: '' });
    }
    return route.fulfill({ status: 404, body: '' });
  });
}

const browser = await chromium.launch();

async function novaPagina(viewport, opts) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 1, locale: 'pt-BR' });
  const page = await ctx.newPage();
  await mockApi(page, opts);
  return page;
}

async function esperarCards(page) {
  await page.waitForSelector('mat-card');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);
}

const desktop = { width: 1366, height: 900 };

// 1. Listagem com totalizadores
{
  const page = await novaPagina(desktop);
  await page.goto(baseUrl);
  await esperarCards(page);
  await page.screenshot({ path: `${outDir}/listagem.png`, fullPage: true });

  // 2. Filtros aplicados
  await page.fill('input[formcontrolname="nome"]', 'a');
  await page.fill('input[formcontrolname="faixaIdadeInicial"]', '15');
  await page.fill('input[formcontrolname="faixaIdadeFinal"]', '40');
  await page.getByText('Feminino', { exact: true }).click();
  await page.getByText('Desaparecido', { exact: true }).click();
  await page.getByRole('button', { name: /Consultar/ }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${outDir}/filtros.png`, fullPage: true });

  // 3. Detalhe
  await page.locator('mat-card').first().click();
  await page.waitForSelector('text=Dados sobre o Desaparecimento');
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${outDir}/detalhe.png`, clip: { x: 0, y: 0, width: 1366, height: 700 } });

  // 4. Diálogo de envio de informações (preenchido, mas não enviado)
  await page.getByRole('button', { name: /Encontrou Essa Pessoa/ }).click();
  await page.waitForSelector('mat-dialog-container');
  await page.fill('mat-dialog-container input[formcontrolname="informacao"]', 'Vi uma pessoa parecida perto da rodoviária.');
  await page.locator('mat-dialog-container input[formcontrolname="data"]').pressSequentially('15102026');
  await page.setInputFiles('mat-dialog-container input[type="file"]', uploadImg);
  await page.waitForSelector('mat-dialog-container img');
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${outDir}/dialogo-informacoes.png` });
  await page.context().close();
}

// 5. Estado de erro com "Tentar de novo"
{
  const page = await novaPagina(desktop, { falhar: true });
  await page.goto(baseUrl);
  await page.waitForSelector('text=Tentar de novo');
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${outDir}/erro.png`, clip: { x: 0, y: 0, width: 1366, height: 520 } });
  await page.context().close();
}

// 6. Mobile
{
  const page = await novaPagina({ width: 390, height: 844 });
  await page.goto(baseUrl);
  await esperarCards(page);
  await page.screenshot({ path: `${outDir}/mobile-listagem.png`, fullPage: true, clip: { x: 0, y: 0, width: 390, height: 1700 } });
  await page.locator('mat-card').first().click();
  await page.waitForSelector('text=Dados sobre o Desaparecimento');
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${outDir}/mobile-detalhe.png` });
  await page.context().close();
}

await browser.close();
console.log('ok');

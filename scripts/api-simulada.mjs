// API Abitus simulada com page.route do Playwright, usada pelos scripts de
// capturas de tela e de acessibilidade. Os dados são fictícios e nenhuma
// requisição chega à API real (o POST do formulário nem é disparado).
export const API = 'https://abitus-api.geia.vip';

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

export const pessoas = nomes.map(([nome, sexo, idade], i) => {
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

/** Responde às chamadas da API Abitus na página. `falhar` simula a lista fora do ar. */
export async function simularApi(page, { falhar = false } = {}) {
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

/** Grava a escolha de tema antes de qualquer script da página (chave do nuvy-tema.js). */
export async function escolherTema(contexto, tema) {
  if (!tema) return;
  await contexto.addInitScript((valor) => {
    try {
      localStorage.setItem('nuvy-tema', valor);
    } catch {
      // sem localStorage: fica no padrão do app
    }
  }, tema);
}

// Passos que levam o app a cada tela, iguais para as capturas e para o axe.
// Os seletores servem tanto para a interface antiga (Material) quanto para a
// nova (spartan): cartões são os <li> da lista e o diálogo é o [role=dialog].

export async function esperarLista(page) {
  await page.waitForSelector('main li');
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);
}

export async function aplicarFiltros(page) {
  await page.fill('input[formcontrolname="nome"]', 'a');
  await page.fill('input[formcontrolname="faixaIdadeInicial"]', '15');
  await page.fill('input[formcontrolname="faixaIdadeFinal"]', '40');
  await page.getByText('Feminino', { exact: true }).click();
  await page.getByText('Desaparecido', { exact: true }).click();
  await page.getByRole('button', { name: /Consultar/ }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);
}

export async function abrirDetalhe(page) {
  await page.locator('main li').first().click();
  await page.waitForSelector('text=Dados sobre o Desaparecimento');
  await page.waitForTimeout(500);
}

export async function abrirDialogo(page, imagem) {
  await page.getByRole('button', { name: /Encontrou Essa Pessoa/ }).click();
  await page.waitForSelector('[role="dialog"]');
  await page.fill('[role="dialog"] [formcontrolname="informacao"]', 'Vi uma pessoa parecida perto da rodoviária.');
  await page.locator('[role="dialog"] input[formcontrolname="data"]').pressSequentially('15102026');
  if (imagem) {
    await page.setInputFiles('[role="dialog"] input[type="file"]', imagem);
    await page.waitForSelector('[role="dialog"] img');
  }
  await page.waitForTimeout(600);
}

export async function esperarErro(page) {
  await page.waitForSelector('text=Tentar de novo');
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);
}

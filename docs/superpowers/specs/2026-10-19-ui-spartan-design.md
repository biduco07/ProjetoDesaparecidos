# Interface com spartan/ui e tema NuvyTech — desenho

19/10/2026. Piloto da migração de interface dos projetos da NuvyTech.

- Tema: nuvy-ui 1.0.0 (biduco07/nuvy-ui#1), aprovado pelo Pedro em 18/10/2026. Prévia: https://claude.ai/artifact/6jYR1vCfYwXxnxwYw4L8t8
- Base: ponta do PR #12 (`perf/bundle-inicial`), que já tem os PRs #10 e #11. Branch: `feat/ui-spartan`.

## Objetivo

Trocar o Angular Material pela spartan/ui 1.8 (estilo `vega`) com o tema NuvyTech, sem mudar o que o app faz:

- escuro por padrão, com botão sol/lua no cabeçalho para o claro;
- fonte Inter servida pelo próprio site (nada do Google Fonts);
- contraste WCAG AA nas duas versões (axe sem `color-contrast`);
- SSR e pré-renderização continuam funcionando;
- lint, testes e build de produção verdes.

## O que fica igual

- Facade + State, serviço da API, rotas, SSR, ngx-mask, regras de validação, textos das mensagens.
- Os comportamentos que os testes já cobrem (foco no `<main>` ao trocar de rota, "Pular para o conteúdo", aria-live do resultado, "Tentar de novo", foco no primeiro campo inválido do diálogo).

## O que muda, por tela

### Casca (app.component)

- Cabeçalho com tokens (`bg-card`, `border-b`, `text-foreground`) no lugar do cinza fixo. Brasão e nome do órgão à esquerda; título "Desaparecidos" (h1) e botão de tema à direita.
- Botão de tema: `hlmBtn` ghost, ícone (sol no escuro, lua no claro), `aria-label` "Usar tema claro" / "Usar tema escuro".
- `<hlm-toaster>` no componente raiz, com o tema acompanhando o `TemaService`.
- Sai o hack `text-align: -webkit-center` e a classe Poppins; o corpo usa `font-sans` (Inter) do tema.

### Listagem e filtros (containers/desaparecidos)

- Totalizadores: mesmo texto ("Desaparecidos: N", "Localizados: N"), rótulo em `text-muted-foreground` e número em destaque.
- Painel "Consulta" vira um cartão (`hlmCard`) com título h2.
- Campos com `hlm-field` + `hlmFieldLabel` + `hlmInput`. "Faixa etária" vira `fieldset`/`legend` com "Idade mínima" e "Idade máxima" lado a lado.
- Sexo e Status: `hlm-radio-group` com `hlm-radio` e rótulos clicáveis; o grupo continua com `aria-labelledby` apontando para o título.
- Botões: "Consultar" principal (ícone lupa) e "Limpar" contorno (ícone X).
- Cartões das pessoas: `hlmCard` com a foto no topo, o nome como botão (o `::after` cobre o cartão, como hoje) e contorno de foco `ring` no cartão.
- Erro: `hlmAlert` destrutivo com ícone e botão "Tentar de novo".
- Carregando: `hlm-spinner` centralizado na área de resultados (sai o spinner fixo no meio da tela).
- Paginador próprio (abaixo).

### Paginador próprio (shared/paginacao)

A paginação da spartan é só visual e usa `routerLink`; a deste app é por estado. Então:

- Função pura `janelaDePaginas(atual, totalDePaginas)`: primeira e última página sempre, a atual com uma vizinha de cada lado e reticências onde houver salto. No máximo 7 posições.
- Função pura `rotuloDoIntervalo(pagina, tamanho, total)`: "1 – 12 de 25" e "0 de 0" (os mesmos textos do `PaginadorIntl` de hoje).
- Componente `app-paginador`: `<nav aria-label="Paginação">`, botões "Página anterior" / "Próxima página" (ícone e texto), número de cada página com `aria-label="Página N"` e `aria-current="page"` na atual, reticências com texto para leitor de tela ("Mais páginas"). Anuncia "Página N de M" numa região `aria-live="polite"`. Emite `MudancaDePagina { pagina, tamanho }`.
- A facade passa a receber `MudancaDePagina` no lugar do `PageEvent` do Material.

### Detalhe (components/desaparecidos-detalhe)

- "Voltar para a lista": `hlmBtn` ghost com seta.
- Situação: aba "Desaparecido" (`bg-destructive text-destructive-foreground`) ou "Localizado" (`bg-success text-success-foreground`) e borda da mesma cor no cartão, como hoje, só que por token.
- "Desaparecido Há N Dias." em `text-destructive`.
- "Encontrou Essa Pessoa?" vira botão principal (`hlmBtn` padrão).
- Erro e carregando iguais aos da listagem.
- O diálogo abre pelo `HlmDialogService` com `context: { id, descricao }`.

### Diálogo "Enviar informações" (dialog)

- `hlmDialogTitle` no h2 (a spartan liga o `aria-labelledby` do diálogo a ele).
- "Informação": `hlm-field` + `hlmTextarea` + `hlm-field-error`.
- "Data em que a pessoa foi vista": `hlmInput` com a máscara, `hlm-field-description` "Formato dd/mm/aaaa" e uma mensagem de erro por vez (obrigatória, futura, inválida). A spartan liga `aria-invalid` e `aria-describedby` (descrição + erro) ao campo.
- "Enviar Imagem": botão contorno com ícone; dica "PNG ou JPG, até 3 MB cada." ligada por `aria-describedby`.
- Miniaturas com botão de remover (`hlmBtn` destrutivo, ícone X, mesmo `aria-label` de hoje).
- Rodapé: "Fechar" (contorno) e "Enviar" (principal). O X do canto fica, com o rótulo "Fechar".
- Os dados chegam por `injectBrnDialogContext`; fechar usa `BrnDialogRef.close()`.

### Avisos (core/alert.service)

- `AlertService` continua com `showSuccess` e `showError`, agora chamando `toast.success` / `toast.error` do sonner da spartan, com o botão "Fechar". A função `toast` entra por um token de injeção para os testes trocarem por um dublê.

## Fundação

- Dependências: `@spartan-ng/brain` 1.8.0, `@ng-icons/core` e `@ng-icons/lucide` ^33.4.0, `@fontsource-variable/inter`, `class-variance-authority`, `clsx`, `tailwind-merge`, `tw-animate-css` (o `@angular/cdk` já existe).
- `components.json` escrito à mão: `{ "style": "vega", "componentsPath": "libs/ui", "importAlias": "@spartan-ng/helm" }`. Componentes gerados com `ng g @spartan-ng/cli:ui <nome>`.
- `src/styles.css` na ordem do `como-usar.md` do nuvy-ui, com `source(none)` + `@source` para `src/` e `libs/ui/`.
- `src/styles/nuvy-tema.css` copiado pelo `npm run copiar` do nuvy-ui (não editar).
- `public/nuvy-tema.js` no `<head>`, sem `defer`; `TemaService` em `src/app/core/tema.service.ts`.
- Material sai de vez: pacote, `material-theme.scss`, temas no `angular.json` (inclusive o `azure-blue` da configuração de testes), `mat-typography`, ajustes `--mat-*` do `styles.css`, Material Icons, Roboto e Poppins.
- CSP do nginx: `font-src 'self'` e `style-src` sem o Google Fonts. O script do tema é do próprio site (`script-src 'self'` já cobre).
- Cores fixas (`bg-green-700`, `text-red-600`, `text-gray-700`, `#b91c1c`...) trocadas por tokens.

## Verificação

- `npm run lint`, `npm run test:ci`, `npm run build`.
- `scripts/acessibilidade.mjs` (novo): axe (`@axe-core/playwright`, instalado com `--no-save`) nas telas listagem, filtros, detalhe, diálogo e erro, no escuro e no claro, com a API simulada como nas capturas. Também lê a cor calculada do botão principal com o mouse em cima e confere contraste do texto ≥ 4,5:1.
- `scripts/capturas-de-tela.mjs` ganha seletores que servem antes e depois (`main li`, `[role=dialog]`), escolha do tema e prefixo dos arquivos. Capturas em `screenshots/migracao-spartan/antes-*.png` (build da base) e `depois-*.png` (escuro e claro; desktop 1366×900 e celular 390×844). As capturas do README passam a ser as novas.
- `npm run build:pages` só no último commit.

## Decisões

- decisão: componentes helm em `libs/ui` (padrão da spartan), fora de `src/` — por quê: separa código copiado do código do app, o lint de prefixo `app-` só olha `src/**`, e o CLI já ajusta `tsconfig.json` (paths) e `tsconfig.app.json` (include). Custo: precisa de `@source '../libs/ui'` no CSS.
- decisão: `@spartan-ng/cli` usado com `npm i --no-save` só para gerar, sem ficar no `package.json` — por quê: ele traz o Nx inteiro (`nx`, `@nx/angular`, `@nx/js`) para o `npm ci` do CI e do Docker e aumenta a superfície do `npm audit`, que hoje está zerado. O README diz como gerar mais componentes.
- decisão: `@ng-icons/*` na 33.4 e não na 36 (a mais nova) — por quê: a spartan 1.8 declara `>=32 <34` para os componentes que usam ícones; a 33 aceita Angular 21+.
- decisão: paginador próprio em vez do `hlm-pagination` — por quê: o da spartan usa `routerLink` e não calcula a janela; a paginação aqui é por estado (facade), e o leitor de tela precisa do anúncio da página.
- decisão: "Limpar" com variante contorno, e não vermelha — por quê: limpar filtros não é ação destrutiva; vermelho fica para erro e "Desaparecido".
- decisão: "Encontrou Essa Pessoa?" com o botão principal — por quê: é a ação principal da tela; a variante destrutiva do vega é um fundo vermelho translúcido, que lê como "excluir".
- decisão: spinner na área de resultados, não fixo no meio da tela — por quê: a lista antiga continua visível durante a troca de página, e o spinner fixo cobria o conteúdo.
- decisão: largura do conteúdo igual à de hoje (`md:max-w-7/10`) — por quê: é migração de componentes, não redesenho de layout.
- decisão: Tailwind com `source(none)` e `@source` explícitos — por quê: a pasta `docs/` (build do GitHub Pages, versionada) tem classes do build antigo e não pode entrar na varredura.
- decisão: `theme-color` do `index.html` = fundo do escuro (#020618) — por quê: escuro é o padrão; o claro é escolha da pessoa.

## Fora do escopo

- Redesenho de layout, textos novos ou novas funcionalidades.
- Lighthouse (o axe cobre a parte de acessibilidade pedida; o Lighthouse fica para a revisão).
- Os textos fixos em inglês dentro do sonner da spartan ("Notifications", "Close toast"), que não são configuráveis na 1.8.

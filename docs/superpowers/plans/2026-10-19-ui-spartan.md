# Interface spartan/ui + tema NuvyTech — plano de implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** trocar o Angular Material pela spartan/ui 1.8 (estilo vega) com o tema NuvyTech (escuro por padrão), mantendo o comportamento, o SSR e a acessibilidade AA.

**Architecture:** componentes helm gerados em `libs/ui` (alias `@spartan-ng/helm/<nome>`), tema copiado do nuvy-ui para `src/styles/nuvy-tema.css`, modo escuro por `public/nuvy-tema.js` + `TemaService`. Cada tela troca os componentes Material pelos da spartan, com os testes atualizados antes. O Material sai por último.

**Tech Stack:** Angular 22 (SSR + pré-render), spartan/ui 1.8 (`@spartan-ng/brain`), Tailwind 4, `@ng-icons/lucide` 33, Vitest + jsdom, Playwright + axe só para verificação (`--no-save`).

**Spec:** `docs/superpowers/specs/2026-10-19-ui-spartan-design.md`

## Global Constraints

- Textos, commits e documentação em português do Brasil, linguagem simples. Commits terminam com `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
- UM comando pesado por vez (npm install/ci, ng build, ng test, ng serve, Playwright). Parar servidor e navegador ao fim de cada uso.
- Não editar o nuvy-ui; o tema entra só pelo `npm run copiar -- <worktree>` rodado dentro de `C:\Users\boduc\Desktop\projetos\claude\nuvy-ui`.
- Nenhum bloco `:root { --background… }` / `:root.dark` / `@layer base` da spartan no `styles.css`.
- Sem cores fixas do Tailwind (`*-gray-*`, `*-green-*`, `*-red-*`, `*-blue-*`, `text-white`, hex) nos templates do app: só tokens.
- `TemaService` só mexe no DOM e no `localStorage` no navegador (`isPlatformBrowser`).
- `npm run build:pages` só no último commit; depois dele, restaurar `docs/superpowers/` (o build apaga a pasta `docs/`).
- Comando de testes de um arquivo: `npx ng test --watch=false --include <caminho>`. Suíte toda: `npm run test:ci`.

## Review Focus

- Tema claro escolhido + página pré-renderizada: o ícone do botão e o `<html>` não podem piscar nem dar erro de hidratação (NG0500) no console.
- Paginador com 0 resultados, 1 página e muitas páginas (1.248 itens): sem botões quebrados, "Página anterior/Próxima" desabilitados nas pontas.
- Diálogo aberto pelo teclado: foco vai para o primeiro campo, Esc fecha, o foco volta ao botão "Encontrou Essa Pessoa?".
- Erros do formulário do diálogo: só aparecem depois de tocar no campo ou tentar enviar; `aria-invalid` e `aria-describedby` acompanham.
- Toast de erro de arquivo recusado aparece também no tema claro, com contraste.

---

### Task 1: Script de capturas neutro e capturas "antes"

**Files:**
- Modify: `scripts/capturas-de-tela.mjs`
- Create: `screenshots/migracao-spartan/antes-*.png`

**Interfaces:**
- Produces: `node scripts/capturas-de-tela.mjs <baseUrl> <pasta> [imagem]` com as variáveis `CAPTURA_PREFIXO` (padrão vazio), `CAPTURA_TEMA` (`escuro` | `claro` | vazio = não mexe) e `PW_CHANNEL`. Grava `<prefixo>listagem.png`, `filtros`, `detalhe`, `dialogo-informacoes`, `erro`, `mobile-listagem`, `mobile-filtros`, `mobile-detalhe`, `mobile-dialogo-informacoes`, `mobile-erro`.

- [ ] **Step 1: Trocar os seletores do Material por seletores neutros**: cartões `main li` (clique em `main li button` do primeiro), diálogo `[role="dialog"]`; tema por `context.addInitScript` gravando `localStorage['nuvy-tema']`; as 5 telas em desktop (1366×900) e celular (390×844).
- [ ] **Step 2: Build da base**: `npm run build` (o app ainda é o da base). Expected: build sem erro.
- [ ] **Step 3: Servir o SSR e capturar**: `PORT=4300 node dist/projeto-desaparecidos/server/server.mjs` em segundo plano; `CAPTURA_PREFIXO=antes- PW_CHANNEL=msedge node scripts/capturas-de-tela.mjs http://localhost:4300/ screenshots/migracao-spartan`. Expected: `ok` e 10 PNGs `antes-*`. Parar o servidor.
- [ ] **Step 4: Commit** `docs(capturas): script de capturas com seletores neutros e capturas de antes da spartan`.

### Task 2: Fundação spartan + tema NuvyTech

**Files:**
- Modify: `package.json`, `package-lock.json`, `tsconfig.json` (paths), `tsconfig.app.json` (include), `src/styles.css`, `src/index.html`
- Create: `components.json`, `libs/ui/**` (gerado), `src/styles/nuvy-tema.css` (copiado), `public/nuvy-tema.js` (cópia de `modelos/nuvy-tema.js`), `src/app/core/tema.service.ts` (cópia de `modelos/tema.service.ts`), `src/app/core/tema.service.spec.ts`

**Interfaces:**
- Produces: `TemaService { modo: WritableSignal<ModoTema>; alternar(): void; definir(modo: ModoTema): void }`, `type ModoTema = 'escuro' | 'claro'` em `src/app/core/tema.service.ts`. Imports helm: `@spartan-ng/helm/{button,card,input,label,field,radio-group,textarea,dialog,sonner,spinner,alert,utils}` (cada um exporta `Hlm<Nome>Imports`). Ícones: `NgIcon` + `provideIcons` de `@ng-icons/core` com ícones de `@ng-icons/lucide` (a spartan 1.8 não tem mais o helm `icon`).

- [ ] **Step 1: Teste do TemaService (falha: arquivo não existe)** em `tema.service.spec.ts`:
  - `começa no escuro quando não há escolha salva` → `modo()` = `'escuro'`.
  - `respeita a escolha "claro" salva` → com `localStorage['nuvy-tema']='claro'`, `modo()` = `'claro'`.
  - `alternar() vai para o claro, tira .dark do <html> e grava a escolha` → `documentElement.classList.contains('dark')` false, `style.colorScheme` `'light'`, `localStorage` `'claro'`.
  - `definir("escuro") põe .dark e grava` .
  - `no servidor não mexe no DOM nem no localStorage` → `PLATFORM_ID: 'server'`: `modo()` `'escuro'`; depois de `definir('claro')`, `modo()` `'claro'`, sem `.dark` alterado e `localStorage` vazio.
- [ ] **Step 2: Rodar** `npx ng test --watch=false --include src/app/core/tema.service.spec.ts`. Expected: FAIL (não acha `./tema.service`).
- [ ] **Step 3: Copiar `modelos/tema.service.ts`** para `src/app/core/tema.service.ts` sem mudar a lógica.
- [ ] **Step 4: Rodar de novo.** Expected: 5 passed.
- [ ] **Step 5: Dependências**: `npm i @spartan-ng/brain@1.8.0 @fontsource-variable/inter @ng-icons/core@^33.4.0 @ng-icons/lucide@^33.4.0 class-variance-authority clsx tailwind-merge tw-animate-css`. Expected: sem erro de peer.
- [ ] **Step 6: `components.json`** = `{ "style": "vega", "componentsPath": "libs/ui", "importAlias": "@spartan-ng/helm" }`; `npm i --no-save @spartan-ng/cli@1.8.0`; gerar um por vez `npx ng g @spartan-ng/cli:ui <nome>` para button, card, input, label, field, radio-group, textarea, dialog, sonner, spinner, alert. Expected: `libs/ui/<nome>/src/index.ts`, paths no `tsconfig.json`, nenhum bloco de cores no `styles.css`, `package.json` sem `@spartan-ng/cli`.
- [ ] **Step 7: Tema**: `npm run copiar -- <worktree>` dentro do nuvy-ui (Expected: "Tema 1.0.0 copiado", sem "Atenção"); `public/nuvy-tema.js`; `<script src="nuvy-tema.js"></script>` no `<head>` antes do CSS; `theme-color` `#020618`.
- [ ] **Step 8: `src/styles.css`** na ordem do como-usar (layer + theme + preflight + utilities `source(none)` + preset + Inter + tema), mais `@source "./"` e `@source "../libs/ui"`; manter por enquanto os ajustes `--mat-*` e o `revert-layer` (saem na Task 9).
- [ ] **Step 9: Verificar**: `npm run build`. Expected: build verde; `dist/.../browser/media/` com `inter-*.woff2`; CSS com `--primary` do tema e com `.dark`.
- [ ] **Step 10: Commit** `feat(ui): fundação da spartan/ui 1.8 com o tema NuvyTech e o TemaService`.

### Task 3: Casca do app — cabeçalho com tokens, botão de tema e toaster

**Files:**
- Modify: `src/app/app.component.{html,ts,spec.ts}`; Delete: `src/app/app.component.scss`

**Interfaces:**
- Consumes: `TemaService` (Task 2), `HlmButtonImports`, `NgIcon`, `HlmToasterImports`.

- [ ] **Step 1: Testes novos (falham)** em `app.component.spec.ts`:
  - `o botão de tema começa oferecendo o claro` → botão `aria-label="Usar tema claro"`.
  - `clicar no botão troca o tema` → `TemaService.modo()` `'claro'` e `aria-label` `"Usar tema escuro"`.
  - `tem o toaster dos avisos` → `hlm-toaster` existe.
  - `não usa cores fixas do Tailwind` → `classesDeCorFixa(el)` = `[]` (helper em `src/testing/cores-fixas.ts`, `classesDeCorFixa(el: HTMLElement): string[]`, que procura `/\b(?:bg|text|border|ring|outline|from|to)-(?:white|black|(?:gray|slate|zinc|green|red|blue|indigo|pink)-\d{2,3})\b/` em todos os `class`).
- [ ] **Step 2: Rodar** `--include src/app/app.component.spec.ts`. Expected: 4 falhas novas, os testes antigos passam.
- [ ] **Step 3: Implementar** cabeçalho `bg-card border-b`, brasão (botão "Ir para a página inicial"), órgão, h1, botão `hlmBtn variant="ghost" size="icon"` com `ng-icon` `lucideSun` (escuro) / `lucideMoon` (claro) no mesmo elemento (sem `@if`, para não divergir na hidratação); "Pular para o conteúdo" com `focus:bg-background focus:text-foreground focus:ring-2 focus:ring-ring`; `<hlm-toaster [theme]>` ligado ao modo; sem `-webkit-center` e sem Poppins.
- [ ] **Step 4: Rodar.** Expected: todos passam.
- [ ] **Step 5: Commit** `feat(ui): cabeçalho com tokens, botão de tema e toaster da spartan`.

### Task 4: AlertService vira fachada do sonner

**Files:** Modify: `src/app/core/alert.service.ts`, `src/app/core/alert.service.spec.ts`

**Interfaces:**
- Produces: `NOTIFICADOR = new InjectionToken<Notificador>('NOTIFICADOR', { providedIn: 'root', factory: () => toast })`, `type Notificador = Pick<typeof toast, 'success' | 'error'>`. `showSuccess(msg)` / `showError(msg)` sem mudar a assinatura.

- [ ] **Step 1: Testes (falham)**: com `{ provide: NOTIFICADOR, useValue: { success: vi.fn(), error: vi.fn() } }`:
  - `mostra o sucesso pelo toast.success com o botão "Fechar"` → `success('Enviado', objectContaining({ action: objectContaining({ label: 'Fechar' }) }))`.
  - `mostra o erro pelo toast.error com o botão "Fechar"` → idem com `error('Falhou', …)`.
- [ ] **Step 2: Rodar** `--include src/app/core/alert.service.spec.ts`. Expected: FAIL (`NOTIFICADOR` não existe).
- [ ] **Step 3: Implementar** com `inject(NOTIFICADOR)`; ação "Fechar" com `onClick` vazio (o sonner fecha ao clicar).
- [ ] **Step 4: Rodar.** Expected: 2 passed.
- [ ] **Step 5: Commit** `feat(ui): avisos pelo sonner da spartan no lugar do MatSnackBar`.

### Task 5: Paginador próprio

**Files:**
- Modify: `src/app/shared/paginacao/paginacao.ts`, `src/app/pages/desaparecidos/desaparecidos.facade.ts`, `desaparecidos.facade.spec.ts`
- Create: `src/app/shared/paginacao/janela-de-paginas.ts` (+ `.spec.ts`), `src/app/shared/paginacao/paginador/paginador.component.ts` (+ `.html`, `.spec.ts`)
- Delete: `src/app/shared/paginacao/paginador-intl.ts` e `.spec.ts` (os casos de `getRangeLabel` passam para `rotuloDoIntervalo`)

**Interfaces:**
- Produces: `interface MudancaDePagina { pagina: number; tamanho: number }` (paginacao.ts); `type ItemDaJanela = number | 'reticencias'`; `janelaDePaginas(atual: number, totalDePaginas: number): ItemDaJanela[]` (índices a partir de 0); `rotuloDoIntervalo(pagina: number, tamanho: number, total: number): string`; `PaginadorComponent` `app-paginador` com `pagina`, `tamanho`, `total` (`input.required<number>()`) e `mudouPagina = output<MudancaDePagina>()`; `DesaparecidosFacade.handlePagination(evento: MudancaDePagina)`.

- [ ] **Step 1: Testes da janela e do rótulo (falham)**:
  - `janelaDePaginas(0, 0)` → `[]`; `(0, 1)` → `[0]`; `(0, 7)` → `[0,1,2,3,4,5,6]`.
  - `(0, 104)` e `(3, 104)` → `[0,1,2,3,4,'reticencias',103]`.
  - `(4, 104)` → `[0,'reticencias',3,4,5,'reticencias',103]`; `(50, 104)` → `[0,'reticencias',49,50,51,'reticencias',103]`.
  - `(99, 104)` → `[0,'reticencias',98,99,100,'reticencias',103]`; `(100, 104)` e `(103, 104)` → `[0,'reticencias',99,100,101,102,103]`.
  - `rotuloDoIntervalo(0, 12, 30)` → `'1 – 12 de 30'`; `(2, 12, 30)` → `'25 – 30 de 30'`; `(0, 12, 0)` → `'0 de 0'`.
- [ ] **Step 2: Rodar** `--include src/app/shared/paginacao/janela-de-paginas.spec.ts`. Expected: FAIL (módulo não existe).
- [ ] **Step 3: Implementar** (1 vizinha de cada lado, 1 página em cada ponta, sempre 7 posições quando há mais de 7 páginas; `rotuloDoIntervalo` com a mesma conta do `PaginadorIntl`).
- [ ] **Step 4: Rodar.** Expected: passam.
- [ ] **Step 5: Testes do componente (falham)** com `pagina=0, tamanho=12, total=25` (3 páginas):
  - mostra `1 – 12 de 25`; região `aria-live="polite"` com `Página 1 de 3`; `nav[aria-label="Paginação"]`.
  - botão `Página 1` com `aria-current="page"`; os outros sem.
  - `Página anterior` desabilitado na primeira; `Próxima página` desabilitado na última (`pagina=2`).
  - clicar em `Próxima página` emite `{ pagina: 1, tamanho: 12 }`; clicar em `Página 3` emite `{ pagina: 2, tamanho: 12 }`; clicar na página atual não emite.
  - com `total=1248`, `pagina=0`: há reticências com o texto `Mais páginas` e o botão `Página 104`.
  - com `total=0`: mostra `0 de 0`, sem botões de número, e os dois botões de navegação desabilitados.
- [ ] **Step 6: Rodar** `--include src/app/shared/paginacao/paginador/paginador.component.spec.ts`. Expected: FAIL.
- [ ] **Step 7: Implementar** com `hlmBtn` (`outline` na atual, `ghost` nas outras, `size="icon"`; anterior/próxima `ghost` com `lucideChevronLeft/Right` e texto `sm:inline`), `<ul>` em linha, `ng-icon lucideEllipsis` + `<span class="sr-only">Mais páginas</span>`.
- [ ] **Step 8: Facade**: trocar `PageEvent` por `MudancaDePagina` (usa `evento.pagina`); atualizar os dois testes da facade para `{ pagina: 2, tamanho: 12 }` / `{ pagina: 1, tamanho: 12 }`. Rodar `--include src/app/pages/desaparecidos/desaparecidos.facade.spec.ts`. Expected: passam.
- [ ] **Step 9: Commit** `feat(paginacao): paginador próprio com janela, reticências e anúncio da página`.

### Task 6: Listagem e filtros

**Files:** Modify: `src/app/pages/desaparecidos/containers/desaparecidos.component.{html,ts,spec.ts}`; Delete: `desaparecidos.component.scss`

**Interfaces:**
- Consumes: `PaginadorComponent`, `MudancaDePagina` (Task 5); helm button, card, input, label, field, radio-group, alert, spinner; `NgIcon`.
- Produces: `DesaparecidosComponent.handlePagination(evento: MudancaDePagina)`.

- [ ] **Step 1: Atualizar o spec (falha)**:
  - seletores: `li [data-slot="card"] h3 button` no lugar de `li mat-card h3 button`; `hlm-spinner` no lugar de `mat-spinner`.
  - `usa o paginador próprio` → `app-paginador` contém `1 – 12 de 25` e um botão `aria-label="Próxima página"`.
  - `repassa a troca de página para a facade` → `handlePagination({ pagina: 1, tamanho: 12 })` chama a facade com `objectContaining({ pagina: 1 })`.
  - `associa cada campo a um rótulo` → `label[for]` para `filtro-nome`, `filtro-idade-minima`, `filtro-idade-maxima`; os dois `hlm-radio-group` com `aria-labelledby` `^filtro-`; a faixa etária num `fieldset` com `legend` "Faixa etária".
  - `o rádio altera o formulário` → clicar no rádio "Feminino" deixa `form.value.sexo` = `'FEMININO'`.
  - `não usa cores fixas do Tailwind` (com lista e com erro).
- [ ] **Step 2: Rodar** `--include src/app/pages/desaparecidos/containers/desaparecidos.component.spec.ts`. Expected: falham os testes acima.
- [ ] **Step 3: Implementar** conforme a seção "Listagem e filtros" do spec (cartão de consulta, `hlm-field` + `hlmFieldLabel` + `hlmInput`, rádios, botões com ícones, cartões `hlmCard`, `hlmAlert` destrutivo com "Tentar de novo", `hlm-spinner` com `aria-label` "Carregando a lista de pessoas", `app-paginador`).
- [ ] **Step 4: Rodar.** Expected: todos passam.
- [ ] **Step 5: Commit** `feat(ui): listagem e filtros com a spartan/ui`.

### Task 7: Detalhe

**Files:** Modify: `src/app/pages/desaparecidos/components/desaparecidos-detalhe/desaparecidos-detalhe.component.{html,ts,spec.ts}`; Delete: `desaparecidos-detalhe.component.scss`

**Interfaces:**
- Consumes: `HlmDialogService.open(component, { context, contentClass, closeLabel })`.
- Produces: `openDialog()` abre `DesaparecidosDetalheDialogComponent` com `context: { id: ocoId, descricao: nome }`.

- [ ] **Step 1: Atualizar o spec (falha)**: `hlm-spinner` no lugar de `mat-spinner`; `abre o formulário…` espiona `HlmDialogService.open` e espera `objectContaining({ context: { id: 99, descricao: 'MARIA DA SILVA' } })`; `não usa cores fixas do Tailwind` (desaparecido, localizado e erro).
- [ ] **Step 2: Rodar** `--include …/desaparecidos-detalhe.component.spec.ts`. Expected: falham.
- [ ] **Step 3: Implementar** conforme a seção "Detalhe" do spec (aba de situação e borda por token, botão principal, `contentClass: 'sm:max-w-xl'`, `closeLabel: 'Fechar'`).
- [ ] **Step 4: Rodar.** Expected: passam.
- [ ] **Step 5: Commit** `feat(ui): tela de detalhe com a spartan/ui e o diálogo da spartan`.

### Task 8: Diálogo "Enviar informações"

**Files:** Modify: `src/app/pages/desaparecidos/components/desaparecidos-detalhe/dialog/desaparecidos-detalhe-dialog.component.{html,ts,spec.ts}`; Delete: `desaparecidos-detalhe-dialog.component.scss`

**Interfaces:**
- Consumes: `BrnDialogRef` (`close()`), `injectBrnDialogContext<{ id: number; descricao: string }>()`.

- [ ] **Step 1: Atualizar o spec (falha)**: prover `BrnDialogRef` e o contexto da spartan no lugar de `MatDialogRef`/`MAT_DIALOG_DATA`; erros lidos de `[data-slot="field-error"]`; rótulos de `label`; novos:
  - `liga o erro ao campo` → depois de `onSend()` vazio, `textarea` com `aria-invalid="true"` e `aria-describedby` contendo o `id` do erro "Descreva o que você sabe sobre a pessoa.".
  - `a data é descrita pelo formato` → `aria-describedby` do campo de data contém o `id` do texto "Formato dd/mm/aaaa".
  - `não mostra erro antes de tocar no campo` → nenhum `[data-slot="field-error"]` visível ao abrir.
  - `não usa cores fixas do Tailwind` (com uma imagem escolhida).
- [ ] **Step 2: Rodar** `--include …/dialog/desaparecidos-detalhe-dialog.component.spec.ts`. Expected: falham.
- [ ] **Step 3: Implementar** conforme a seção "Diálogo" do spec.
- [ ] **Step 4: Rodar.** Expected: passam (inclusive os de validação de data e de arquivos, sem mudança).
- [ ] **Step 5: Commit** `feat(ui): diálogo de envio de informações com field, textarea e erros acessíveis`.

### Task 9: Material removido de vez

**Files:** Modify: `package.json`, `package-lock.json`, `angular.json`, `src/styles.css`, `src/index.html`, `nginx/security-headers.conf`, `README.md`; Delete: `src/material-theme.scss`

- [ ] **Step 1: Remover** `npm uninstall @angular/material`; tirar `material-theme.scss` e o `azure-blue.css` do `angular.json`; tirar `--mat-*`, `.mat-typography` e o `revert-layer` do `styles.css`; tirar Roboto, Material Icons, Poppins e `mat-typography` do `index.html`.
- [ ] **Step 2: CSP**: `style-src 'self' 'unsafe-inline'` e `font-src 'self'`; comentário diz que fontes e o script do tema são do próprio site.
- [ ] **Step 3: Verificar**: `grep -rn "material\|mat-\|Poppins\|Roboto\|googleapis" src angular.json nginx package.json` → nada; `npm run lint` → sem erros; `npm run test:ci` → todos passam; `npm run build` → verde, sem aviso de budget.
- [ ] **Step 4: README**: stack (spartan/ui + tema NuvyTech, Inter, Lucide), tabela de requisitos (cartões e paginador), decisão do bundle, tema/modo escuro, como gerar componentes da spartan, número de testes.
- [ ] **Step 5: Commit** `chore(ui): remove o Angular Material, as fontes do Google e ajusta a CSP`.

### Task 10: Acessibilidade (axe) e capturas "depois"

**Files:** Create: `scripts/acessibilidade.mjs`, `screenshots/migracao-spartan/depois-*.png`; Modify: `screenshots/*.png`, `README.md`

**Interfaces:**
- Produces: `node scripts/acessibilidade.mjs <baseUrl>` — mesma API simulada das capturas; roda o axe (tags wcag2a, wcag2aa, wcag21a, wcag21aa) em listagem, filtros, detalhe, diálogo e erro, no escuro e no claro; mede o botão "Consultar" com o mouse em cima (`getComputedStyle` → contraste do texto sobre o fundo). Sai com código 1 se houver violação ou contraste < 4,5.

- [ ] **Step 1: Escrever o script** (a simulação da API vai para `scripts/api-simulada.mjs`, usada pelos dois scripts).
- [ ] **Step 2: Rodar** com o SSR do build (`npm i --no-save playwright @axe-core/playwright`, `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1`, `PW_CHANNEL=msedge`). Expected: 0 violações de `color-contrast` nos dois temas; outras listadas (meta: 0); contraste do hover ≥ 4,5.
- [ ] **Step 3: Capturas**: `CAPTURA_TEMA=escuro CAPTURA_PREFIXO=depois-escuro-` e `CAPTURA_TEMA=claro CAPTURA_PREFIXO=depois-claro-`; copiar as do escuro para `screenshots/<nome>.png` (README); reduzir os PNGs a 256 cores como o README ensina.
- [ ] **Step 4: README**: capturas, comando do axe.
- [ ] **Step 5: Commit** `docs(capturas): capturas da spartan no escuro e no claro e conferência com o axe`.

### Task 11: GitHub Pages e PR

- [ ] **Step 1:** `npm run build:pages`; restaurar `docs/superpowers` (`git checkout HEAD -- docs/superpowers`); conferir que `docs/index.html` tem `nuvy-tema.js`.
- [ ] **Step 2: Commit** `build(pages): regenera docs/ com npm run build:pages`.
- [ ] **Step 3:** `git push -u origin feat/ui-spartan`; `gh pr create --draft --base perf/bundle-inicial` com resumo, links do tema, mudanças por tela, resultados, tabela antes/depois e o que ficou de fora.

# Projeto Desaparecidos

Aplicação web para consulta de pessoas desaparecidas e localizadas no estado de Mato Grosso, consumindo a API pública **Abitus** da Polícia Judiciária Civil de MT. Permite buscar registros com filtros, ver os detalhes de cada caso e enviar informações sobre uma pessoa (texto, data e fotos).

Projeto desenvolvido como teste prático do **Processo Seletivo SEPLAG/MT** — vaga **Front-End Sênior**, por Pedro Henrique Veloso Silva de Melo.

**Demo:** https://biduco07.github.io/ProjetoDesaparecidos/

## Capturas de tela

<!--
  Espaço reservado para prints/GIF da aplicação. Exemplo:
  ![Listagem com filtros](screenshots/listagem.png)
  ![Detalhe de uma pessoa](screenshots/detalhe.png)
-->

_Prints da listagem, dos filtros e da tela de detalhe serão adicionados aqui._

## Funcionalidades

- Totalizadores de pessoas desaparecidas e localizadas.
- Listagem em cards com paginação (12 registros por página).
- Filtros por nome, faixa etária, sexo e status (desaparecido/localizado).
- Tela de detalhe com situação do caso, local e data do desaparecimento e há quantos dias a pessoa está desaparecida.
- Formulário em diálogo para enviar informações sobre a pessoa, com máscara de data e upload de imagens.
- Renderização no servidor (Angular SSR) com pré-renderização das rotas.

## Stack

- [Angular 19](https://angular.dev/) (standalone components, novo control flow `@if`/`@for`, SSR)
- [Angular Material](https://material.angular.io/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [RxJS](https://rxjs.dev/)
- [NgxMask](https://github.com/JsDaddy/ngx-mask)
- Testes com Karma + Jasmine
- [Docker](https://www.docker.com/) + nginx para servir o build

## Arquitetura: Facade + State

O fluxo de dados da feature `desaparecidos` segue o padrão **Facade com State**, sem biblioteca externa de gerenciamento de estado:

```
Componente  ──comandos──▶  Facade  ──HTTP──▶  DesaparecidosService  ──▶  API Abitus
    ▲                        │
    └──── observables ◀── State (BehaviorSubjects)
```

- **Service** (`core/desaparecidos.service.ts`): única camada que conhece a API HTTP.
- **State** (`pages/desaparecidos/state/desaparecidos.state.ts`): fonte única da verdade da feature (lista paginada, estatísticas, paginação, filtros e pessoa selecionada), exposta como `Observable` somente leitura.
- **Facade** (`pages/desaparecidos/desaparecidos.facade.ts`): API pública da feature para os componentes. Orquestra chamadas ao serviço, atualiza o state e trata erros/navegação.
- **Componentes** apenas disparam comandos na facade e se inscrevem nos observables; não acessam o serviço nem o state diretamente.

Isso mantém os componentes simples, concentra regras de negócio em um único ponto e facilita testar cada camada isoladamente.

## Estrutura de pastas

```
src/
  app/
    core/                       # serviços globais (API Abitus, alertas)
    pages/
      desaparecidos/
        components/             # tela de detalhe e diálogo de envio de informações
        containers/             # página de listagem e filtros
        models/                 # interfaces de domínio
        state/                  # DesaparecidosState (BehaviorSubjects)
        desaparecidos.facade.ts # Facade da feature
    shared/
      paginacao/                # modelos de paginação
  assets/
```

## Como rodar

Pré-requisitos: Node.js 22 (LTS) e npm.

```sh
git clone https://github.com/biduco07/ProjetoDesaparecidos.git
cd ProjetoDesaparecidos
npm ci
npm start
```

A aplicação fica disponível em `http://localhost:4200/`.

### Scripts

| Comando         | Descrição                                   |
| --------------- | ------------------------------------------- |
| `npm start`     | Servidor de desenvolvimento                 |
| `npm test`      | Testes unitários (Karma + Jasmine)          |
| `npm run build` | Build de produção em `dist/projeto-desaparecidos` |

### Docker

O `Dockerfile` é multi-stage: a primeira etapa (Node) instala as dependências com `npm ci` e gera o build; a segunda (`nginx:alpine`) serve apenas os arquivos estáticos com o `nginx.conf` do projeto. Não é preciso ter Node instalado na máquina.

```sh
docker build -t projeto-desaparecidos .
docker run -d -p 8080:80 --name projeto-desaparecidos projeto-desaparecidos
```

A aplicação fica disponível em `http://localhost:8080/`.

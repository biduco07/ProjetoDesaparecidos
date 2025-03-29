# 🚀 Projeto Desaparecidos

# PROCESSO SELETIVO SEPLAG.

## Dados De Inscrição

- **Nome:** Pedro Henrique Veloso Silva de Melo
- 📱 **Telefone:** (65)98111-8169
- ✉️ **Email:** pedrohenriquevelososilvademelo@gmail.com
- 💼 **Vaga:** Front-End Sênior

## 🛠 Tecnologias Utilizadas

- ⚡ [Angular 19.2.3](https://angular.io/)
- 🎨 [Angular Material](https://material.angular.io/)
- 🎭 [NgxMask](https://github.com/JsDaddy/ngx-mask)
- 🔄 [RxJS](https://rxjs.dev/)
- 🐳 [Docker](https://www.docker.com/)
- 🏗 **Gerenciador de estado:** Implementado seguindo a Arquitetura Facade com State, garantindo encapsulamento, separação de responsabilidades e melhor organização do fluxo de dados da aplicação.

## Versões Utilizadas

- Angular (versão 19.2.3)
- Node.js (versão 22.14.0)
- Angular CLI (versão 19.2.4)
- Tailwindcss (versão 4)

## 📥 Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/biduco07/ProjetoDesaparecidos.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd ProjetoDesaparecidos
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

## ▶️ Como Rodar o Projeto

Para rodar o projeto localmente, utilize:

```sh
ng serve
```

A aplicação estará disponível em `http://localhost:4200/`.

### 🐳 Rodando o Projeto Utilizando Docker

Com o docker instalado na maquina, Para subir o ambiente (caso já tenha feito a instação, pula para o passo 3):

1. Clone este repositório:

   ```sh
   git clone https://github.com/biduco07/ProjetoDesaparecidos.git
   ```

2. Acesse a pasta do projeto:

   ```sh
   cd ProjetoDesaparecidos
   ```

3. Utilize o comando para carregar a imagem do docker:

   ```sh
   docker load -i ProjetoDesaparecidos.tar
   ```

4. Para levantar o container é só utilizar o comando:
   ```sh
   docker container run -d -it -p 80:80 ProjetoDesaparecidos
   ```

A aplicação estará disponível em `http://localhost/` ou `http://127.0.0.1/`.

## 📂 Estrutura do Projeto

Breve descrição da estrutura de pastas do projeto.

```
/src
  /app
    /core (Services globais)
    /pages
      /desaparecidos
        /components
        /containers
        /models
        /services
        /shared
        /state
        /facade (Implementação da Arquitetura Facade com State)
    /shared
      /paginacao (Model de paginação)
    /assets
```

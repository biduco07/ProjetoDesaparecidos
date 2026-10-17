# Etapa 1: instala as dependências e gera o build de produção
FROM node:22-alpine AS build

ENV NG_CLI_ANALYTICS=false

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Etapa 2: serve os arquivos estáticos com nginx
FROM nginx:stable-alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/security-headers.conf /etc/nginx/snippets/security-headers.conf
COPY --from=build /app/dist/projeto-desaparecidos/browser /usr/share/nginx/html/projeto-desaparecidos

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/ || exit 1

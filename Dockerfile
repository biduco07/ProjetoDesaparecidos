# Etapa 1: instala as dependências e gera o build de produção
FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Etapa 2: serve os arquivos estáticos com nginx
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/projeto-desaparecidos/browser /usr/share/nginx/html/projeto-desaparecidos

EXPOSE 80

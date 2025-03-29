FROM nginx:alpine

RUN mkdir -p /usr/share/nginx/html/projeto-desaparecidos

COPY ./dist/projeto-desaparecidos/browser /usr/share/nginx/html/projeto-desaparecidos

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

RUN chmod -R 755 /usr/share/nginx/html/projeto-desaparecidos
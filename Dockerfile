# FROM node:16-alpine AS build
# WORKDIR /app
    
# COPY package*.json ./
# RUN npm install

# COPY ./smartcard .
# COPY ./reservation .
# RUN npm run build

FROM nginx

RUN apt-get update && \
    apt-get install -y nodejs npm

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./nginx/default.template.conf /etc/nginx/conf.d/default.template

ADD ./smartcard/* /usr/share/nginx/html/smartcard/
ADD ./reservation/* /usr/share/nginx/html/reservation/

EXPOSE 80
CMD sh -c "envsubst \"`env | awk -F = '{printf \" \\\\$%s\", $1}'`\" < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;' && npm start --prefix /usr/share/nginx/html/smartcard && npm start --prefix /usr/share/nginx/html/reservation"
# CMD sh -c "envsubst \"`env | awk -F = '{printf \" \\\\$%s\", $1}'`\" < /etc/nginx/site/default.template > /etc/nginx/site/default.conf && nginx -g 'daemon off;'"
# CMD sh -c "envsubst \"`env | awk -F = '{printf \" \\\\$%s\", $1}'`\" < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
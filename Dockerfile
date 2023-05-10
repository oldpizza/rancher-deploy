FROM node:16 AS build
WORKDIR /app

RUN apt-get update && apt-get install -y \
    nodejs \
    npm
    
COPY package*.json ./

RUN npm install

COPY ./smartcard/ /app/smartcard
COPY ./reservation/ /app/reservation

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/smartcard/build/ /usr/share/nginx/html/smartcard/
COPY --from=build /app/reservation/build/ /usr/share/nginx/html/reservation/
# ADD ./smartcard/* /usr/share/nginx/html/smartcard/
# ADD ./reservation/* /usr/share/nginx/html/reservation/

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/default.conf /etc/nginx/site/default.conf
COPY ./nginx/default.template.conf /etc/nginx/site/default.template

EXPOSE 80
# CMD sh -c "envsubst \"`env | awk -F = '{printf \" \\\\$%s\", $1}'`\" < /etc/nginx/site/default.template > /etc/nginx/site/default.conf && nginx -g 'daemon off;' & npm start --prefix smartcard & npm start --prefix reservation"
CMD sh -c "envsubst \"`env | awk -F = '{printf \" \\\\$%s\", $1}'`\" < /etc/nginx/site/default.template > /etc/nginx/site/default.conf && nginx -g 'daemon off;'"
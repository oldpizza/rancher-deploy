FROM node:16
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./smartcard/ ./smartcard
COPY ./reservation/ ./reservation

FROM nginx:alpine

# ADD ./smartcard/* /usr/share/nginx/html/smartcard/
# ADD ./reservation/* /usr/share/nginx/html/reservation/

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/default.conf /etc/nginx/site/default.conf
COPY ./nginx/default.template.conf /etc/nginx/site/default.template

EXPOSE 80

CMD sh -c "envsubst \"`env | awk -F = '{printf \" \\\\$%s\", $1}'`\" < /etc/nginx/site/default.template > /etc/nginx/site/default.conf && nginx -g 'daemon off;' && npm run start ./smartcard && npm run npm run start ./reservation "

FROM node:16
WORKDIR /app

WORKDIR /smartcard
COPY ./smartcard .

WORKDIR /reservation
COPY ./reservation .

RUN cd /smartcard && npm install
RUN cd /reservation && npm install

FROM nginx:alpine

# ADD ./smartcard/* /usr/share/nginx/html/smartcard/
# ADD ./reservation/* /usr/share/nginx/html/reservation/

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/default.conf /etc/nginx/site/default.conf
COPY ./nginx/default.template.conf /etc/nginx/site/default.template

EXPOSE 80

CMD sh -c "envsubst \"`env | awk -F = '{printf \" \\\\$%s\", $1}'`\" < /etc/nginx/site/default.template > /etc/nginx/site/default.conf && nginx -g 'daemon off;' && node /smartcard/index.js && node /reservation/index.js "

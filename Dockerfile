FROM nginx:alpine

ADD ./smartcard/* /usr/share/nginx/html/smartcard/
ADD ./reservation/* /usr/share/nginx/html/reservation/

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/default.conf /etc/nginx/site/default.conf
COPY ./nginx/default.template.conf /etc/nginx/site/default.template

CMD sh -c "envsubst \"`env | awk -F = '{printf \" \\\\$%s\", $1}'`\" < /etc/nginx/site/default.template > /etc/nginx/site/default.conf && nginx -g 'daemon off;'"

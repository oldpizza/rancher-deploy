FROM node AS builder
WORKDIR /app
    
COPY package*.json ./
RUN npm install

COPY ./smartcard/ /app/smartcard
COPY ./reservation/ /app/reservation

RUN npm run build --prefix smartcard
RUN npm run build --prefix reservation

FROM nginx:alpine

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/default.conf /etc/nginx/site/default.conf
COPY ./nginx/default.template.conf /etc/nginx/site/default.template

COPY --from=builder /app/smartcard/build /usr/share/nginx/html/smartcard
COPY --from=builder /app/reservation/build /usr/share/nginx/html/reservation

EXPOSE 80
# CMD sh -c "envsubst \"`env | awk -F = '{printf \" \\\\$%s\", $1}'`\" < /etc/nginx/site/default.template > /etc/nginx/site/default.conf && nginx -g 'daemon off;' & npm start --prefix smartcard & npm start --prefix reservation"
CMD sh -c "envsubst \"`env | awk -F = '{printf \" \\\\$%s\", $1}'`\" < /etc/nginx/site/default.template > /etc/nginx/site/default.conf && nginx -g 'daemon off;'"
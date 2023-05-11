# FROM node AS builder
# WORKDIR /app
    
# COPY package*.json ./
# RUN npm install

# COPY ./smartcard/ /app/smartcard
# COPY ./reservation/ /app/reservation

# RUN npm run build ./smartcard
# RUN npm run build ./reservation

FROM nginx:alpine

# RUN rm /etc/nginx/conf.d/default.conf
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY ./nginx/default.template.conf /etc/nginx/conf.d/default.template

ADD ./smartcard/* /usr/share/nginx/html/smartcard/
ADD ./reservation/* /usr/share/nginx/html/reservation/

# COPY --from=builder /app/smartcard/build /usr/share/nginx/html/smartcard
# COPY --from=builder /app/reservation/build /usr/share/nginx/html/reservation

# EXPOSE 80
# CMD sh -c "envsubst \"`env | awk -F = '{printf \" \\\\$%s\", $1}'`\" < /etc/nginx/site/default.template > /etc/nginx/site/default.conf && nginx -g 'daemon off;' & npm start --prefix smartcard & npm start --prefix reservation"
# CMD sh -c "envsubst \"`env | awk -F = '{printf \" \\\\$%s\", $1}'`\" < /etc/nginx/site/default.template > /etc/nginx/site/default.conf && nginx -g 'daemon off;'"
# CMD sh -c "envsubst \"`env | awk -F = '{printf \" \\\\$%s\", $1}'`\" < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
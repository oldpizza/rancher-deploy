FROM nginx:alpine
ADD ./data/* /usr/share/nginx/html/

# COPY nginx.conf /etc/nginx/nginx.conf
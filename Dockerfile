FROM nginx:alpine
ADD ./script.js /usr/share/nginx/html/
ADD ./install.bat /usr/share/nginx/html/

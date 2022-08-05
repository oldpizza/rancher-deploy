FROM nginx:alpine
ADD ./script.js /usr/share/nginx/html/
ADD ./install.bat /usr/share/nginx/html/
ADD ./Program.zip /usr/share/nginx/html/
ADD ./smartcard.zip /usr/share/nginx/html/
ADD ./index.html /usr/share/nginx/html/

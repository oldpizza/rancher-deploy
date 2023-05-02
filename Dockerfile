FROM nginx:alpine
# USER nginx
# WORKDIR /app

ADD ./smartcard/* /usr/share/nginx/html/smartcard/
ADD ./reservation/* /usr/share/nginx/html/reservation/

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/default.conf /etc/nginx/site/default.conf

# COPY nginx.conf /etc/nginx/nginx.conf
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY ./nginx/default.template.conf /etc/nginx/conf.d/default.template
# RUN "/bin/sh -c envsubst < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf"
# EXPOSE 80
# CMD [ "/bin/sh -c "envsubst '$$NGINX_HOST' < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"" ]
# CMD sh -c "envsubst \"`env | awk -F = '{printf \" \\\\$%s\", $1}'`\" < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
# CMD ["nginx", "-g", "daemon off;"]
# Use an official Node.js runtime as a parent image
# FROM node:14

# # Set the working directory to /app
# WORKDIR /app

# # Copy the package.json and package-lock.json files to the container
# COPY package*.json ./

# # Install app dependencies
# RUN npm install

# # Copy the rest of the application files to the container
# COPY . .

# # Build the React app
# RUN npm run build

# # Use an official Nginx image as a parent image
# FROM nginx:1.21.3

# # Copy the default Nginx configuration file to the container
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Copy the built app from the previous stage to the Nginx document root
# COPY --from=0 /app/build /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]

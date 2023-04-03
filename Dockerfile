# FROM nginx:alpine
# ADD ./data/* /usr/share/nginx/html/

# # COPY nginx.conf /etc/nginx/nginx.conf
# Base image
FROM node:14-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app files
COPY . .

# Build the app
RUN npm run build

# Stage 2: Nginx image
FROM nginx:alpine

# Copy the build files to Nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy Nginx config file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

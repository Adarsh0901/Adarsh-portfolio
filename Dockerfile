# Stage 1: Build the Angular application
FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npx ng build --configuration=production

# Stage 2: Serve with Nginx + SSL
FROM nginx:alpine

RUN apk add --no-cache openssl

RUN rm /etc/nginx/conf.d/default.conf

# Create directories for SSL and Certbot
RUN mkdir -p /etc/nginx/ssl /var/www/certbot

# Generate self-signed certificate (used until Let's Encrypt is configured)
RUN openssl req -x509 -nodes -days 365 \
    -newkey rsa:2048 \
    -keyout /etc/nginx/ssl/privkey.pem \
    -out /etc/nginx/ssl/fullchain.pem \
    -subj "/C=US/ST=State/L=City/O=Dev/CN=localhost"

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/portfolio/browser /usr/share/nginx/html

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]

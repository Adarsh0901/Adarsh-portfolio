# Stage 1: Build the Angular application
FROM node:22-bullseye-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npx ng build --configuration=production

# Stage 2: Serve with Nginx + SSL
FROM debian:bullseye-slim AS runtime

# Use Debian Bullseye runtime and install nginx + OpenSSL (Bullseye packages
# ship OpenSSL 1.1.1 which is not affected by CVE-2025-15467).
RUN apt-get update \
 && apt-get dist-upgrade -y \
 && apt-get install -y --no-install-recommends nginx openssl ca-certificates \
 && rm -rf /var/lib/apt/lists/*

RUN rm -f /etc/nginx/conf.d/default.conf || true

# Create directories for SSL and Certbot
RUN mkdir -p /etc/nginx/ssl /var/www/certbot

# NOTE: Avoid generating long-lived private keys at build time in production.
# Prefer obtaining certificates at runtime via Certbot/ACME or in your CI pipeline.
# A small self-signed cert is still generated here for local/dev convenience only.
RUN openssl req -x509 -nodes -days 365 \
    -newkey rsa:2048 \
    -keyout /etc/nginx/ssl/privkey.pem \
    -out /etc/nginx/ssl/fullchain.pem \
    -subj "/C=US/ST=State/L=City/O=Dev/CN=localhost"

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/portfolio/browser /usr/share/nginx/html

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]

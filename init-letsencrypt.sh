#!/bin/bash

# =============================================================================
# Let's Encrypt SSL Certificate Setup
# =============================================================================
# Run this script ONCE after pointing your domain to this VPS.
#
# Usage:
#   chmod +x init-letsencrypt.sh
#   ./init-letsencrypt.sh yourdomain.com your@email.com
# =============================================================================

set -e

DOMAIN=$1
EMAIL=$2

if [ -z "$DOMAIN" ] || [ -z "$EMAIL" ]; then
  echo "Usage: ./init-letsencrypt.sh <domain> <email>"
  echo "Example: ./init-letsencrypt.sh portfolio.example.com admin@example.com"
  exit 1
fi

echo ""
echo "=== Let's Encrypt SSL Setup ==="
echo "Domain: $DOMAIN"
echo "Email:  $EMAIL"
echo ""

# Step 1: Update nginx.conf with the actual domain
echo "[1/5] Updating nginx.conf with domain: $DOMAIN"
sed -i "s/server_name localhost;/server_name $DOMAIN;/g" nginx.conf

# Step 2: Rebuild and start containers (with self-signed cert first)
echo "[2/5] Rebuilding Docker image..."
docker compose down 2>/dev/null || true
docker compose build

# Step 3: Start only the portfolio container so Certbot can verify
echo "[3/5] Starting Nginx container..."
docker compose up -d portfolio
sleep 5

# Step 4: Request Let's Encrypt certificate
echo "[4/5] Requesting Let's Encrypt certificate..."
docker compose run --rm certbot certonly \
  --webroot \
  --webroot-path=/var/www/certbot \
  --email "$EMAIL" \
  --agree-tos \
  --no-eff-email \
  -d "$DOMAIN"

# Step 5: Copy certs to the nginx ssl path and restart
echo "[5/5] Restarting containers with new certificate..."
docker compose down

# Update docker-compose to mount Let's Encrypt certs directly
cat > docker-compose.override.yml << EOF
services:
  portfolio:
    volumes:
      - certbot-webroot:/var/www/certbot:ro
      - certbot-certs:/etc/letsencrypt:ro
  certbot:
    volumes:
      - certbot-webroot:/var/www/certbot
      - certbot-certs:/etc/letsencrypt
EOF

# Update nginx.conf to point to Let's Encrypt cert paths
sed -i "s|/etc/nginx/ssl/fullchain.pem|/etc/letsencrypt/live/$DOMAIN/fullchain.pem|g" nginx.conf
sed -i "s|/etc/nginx/ssl/privkey.pem|/etc/letsencrypt/live/$DOMAIN/privkey.pem|g" nginx.conf

# Rebuild with updated nginx.conf and start
docker compose build
docker compose up -d

echo ""
echo "=== Done! ==="
echo "Your site is now live at: https://$DOMAIN"
echo ""
echo "Certificates will auto-renew via the certbot container."
echo ""

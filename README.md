# Adarsh — Portfolio Website

A modern, dark-themed personal portfolio website built with **Angular 19**. Features a sleek cyan/purple gradient design with fully responsive layout and placeholder content ready to customize.

![Angular](https://img.shields.io/badge/Angular-19-red?logo=angular)
![Node](https://img.shields.io/badge/Node-22+-green?logo=node.js)
![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)
![Nginx](https://img.shields.io/badge/Nginx-Alpine-green?logo=nginx)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Development Server](#development-server)
- [Production Build](#production-build)
- [Docker Deployment](#docker-deployment)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [HTTPS / SSL Setup](#https--ssl-setup)

---

## Features

- **Hero Section** — Animated gradient orbs, stats counter, and CTA buttons
- **About Section** — Bio, personal info grid, and highlight cards
- **Skills Section** — 4 skill categories with animated progress bars
- **Projects Section** — 6 project cards with hover overlays for live demo / code links
- **Experience Section** — Timeline layout with role details and achievements
- **Contact Section** — Contact info cards, social links, and a message form
- **Footer** — Brand, quick links, and copyright
- **Responsive Design** — Fully responsive across mobile, tablet, and desktop
- **Dark Theme** — Modern dark UI with cyan/purple gradient accents

---

## Tech Stack

| Layer     | Technology            |
| --------- | --------------------- |
| Framework | Angular 19            |
| Language  | TypeScript 5.7        |
| Styling   | CSS (custom, no libs) |
| Fonts     | Google Fonts (Inter, JetBrains Mono) |
| Server    | Nginx (Docker)        |
| Container | Docker (multi-stage)  |

---

## Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** >= 22.x — [Download](https://nodejs.org/)
- **npm** >= 10.x (comes with Node.js)
- **Angular CLI** >= 19.x
- **Docker** >= 24.x (for containerized deployment) — [Install](https://docs.docker.com/get-docker/)

### Install Angular CLI

```bash
npm install -g @angular/cli@19
```

Verify the installation:

```bash
ng version
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd cursorTry
```

### 2. Install Dependencies

```bash
npm install
```

This will install all the required packages defined in `package.json`.

---

## Development Server

Start the Angular development server:

```bash
npm start
```

Or, to make it accessible from outside your machine (e.g., on a VPS):

```bash
ng serve --host 0.0.0.0 --port 4200 --disable-host-check
```

The app will be available at:

| Access   | URL                              |
| -------- | -------------------------------- |
| Local    | http://localhost:4200            |
| Network  | http://\<your-server-ip\>:4200  |

> The `angular.json` is already configured with `host: 0.0.0.0` and `disableHostCheck: true`, so `npm start` will also listen on all interfaces.

---

## Production Build

Build the app for production:

```bash
ng build --configuration=production
```

The production-ready files will be output to:

```
dist/portfolio/browser/
```

You can serve these static files with any web server (Nginx, Apache, etc.).

---

## Docker Deployment

Deploy the portfolio on Docker using Nginx — serves the app on **port 8090**.

### Files Overview

| File             | Purpose                                              |
| ---------------- | ---------------------------------------------------- |
| `Dockerfile`     | Multi-stage build (Node 22 → Nginx Alpine)           |
| `nginx.conf`     | Nginx config — serves SPA on port 8090 with gzip     |
| `.dockerignore`  | Excludes `node_modules`, `dist`, `.git`, etc.        |

### Step 1: Build the Docker Image

```bash
docker build -t portfolio-app .
```

This performs a two-stage build:
1. **Stage 1 (Build):** Uses `node:22-alpine` to install dependencies and compile the Angular app with production optimizations.
2. **Stage 2 (Serve):** Uses `nginx:alpine` to serve the compiled static files.

### Step 2: Run the Docker Container

```bash
docker run -d --name portfolio-app -p 8090:8090 portfolio-app
```

| Flag                    | Description                                       |
| ----------------------- | ------------------------------------------------- |
| `-d`                    | Run in detached (background) mode                 |
| `--name portfolio-app`  | Name the container `portfolio-app`                |
| `-p 8090:8090`          | Map host port 8090 → container port 8090          |

### Step 3: Access the Application

The app will be available at:

| Access   | URL                               |
| -------- | --------------------------------- |
| Local    | http://localhost:8090             |
| Network  | http://\<your-server-ip\>:8090   |

### Useful Docker Commands

```bash
# Check running containers
docker ps

# View container logs
docker logs portfolio-app

# Stop the container
docker stop portfolio-app

# Start a stopped container
docker start portfolio-app

# Remove the container
docker rm -f portfolio-app

# Rebuild and redeploy (after code changes)
docker rm -f portfolio-app
docker build -t portfolio-app .
docker run -d --name portfolio-app -p 8090:8090 portfolio-app
```

---

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/          # Fixed navigation bar with mobile menu
│   │   │   ├── hero/            # Hero section with animated background
│   │   │   ├── about/           # About me with highlights
│   │   │   ├── skills/          # Skills grid with progress bars
│   │   │   ├── projects/        # Project cards with overlays
│   │   │   ├── experience/      # Timeline of work experience
│   │   │   ├── contact/         # Contact form and info cards
│   │   │   └── footer/          # Footer with quick links
│   │   ├── app.component.ts     # Root component (imports all sections)
│   │   ├── app.component.html   # Main layout template
│   │   └── app.config.ts        # App configuration
│   ├── styles.css               # Global styles (dark theme, variables)
│   └── index.html               # HTML entry point with Google Fonts
├── Dockerfile                   # Multi-stage Docker build
├── nginx.conf                   # Nginx server configuration
├── .dockerignore                # Docker build exclusions
├── angular.json                 # Angular CLI configuration
├── package.json                 # Dependencies and scripts
└── tsconfig.json                # TypeScript configuration
```

---

## Customization

All sections have **placeholder content** marked with `<!-- TODO -->` comments. Here's where to update:

| What to Change       | File                                              |
| -------------------- | ------------------------------------------------- |
| Name & title         | `src/app/components/hero/hero.component.html`     |
| Bio & stats          | `src/app/components/hero/hero.component.html`     |
| About text & info    | `src/app/components/about/about.component.html`   |
| Skills & levels      | `src/app/components/skills/skills.component.ts`   |
| Projects             | `src/app/components/projects/projects.component.ts` |
| Work experience      | `src/app/components/experience/experience.component.ts` |
| Contact info & links | `src/app/components/contact/contact.component.html` |
| Social media URLs    | `src/app/components/contact/contact.component.ts` |
| Page title           | `src/index.html`                                  |
| Navbar logo name     | `src/app/components/navbar/navbar.component.html` |
| Footer name          | `src/app/components/footer/footer.component.html` |

---

## HTTPS / SSL Setup

The project includes full HTTPS support with two options:

### Option A: Self-Signed Certificate (Default — No Domain Needed)

The Dockerfile generates a self-signed SSL certificate automatically. This works out of the box but browsers will show a security warning.

```bash
# Build the HTTPS-enabled image
docker build -t portfolio-app .

# Run with both HTTP (80) and HTTPS (443) exposed
docker run -d --name portfolio-app -p 80:80 -p 443:443 portfolio-app
```

| Access   | URL                                |
| -------- | ---------------------------------- |
| HTTP     | http://\<your-server-ip\> (redirects to HTTPS) |
| HTTPS    | https://\<your-server-ip\>         |

> Browsers will show a "Not Secure" warning for self-signed certs. Click **Advanced → Proceed** to continue.

### Option B: Let's Encrypt (Free Trusted SSL — Requires Domain)

Once you have a domain name pointing to your VPS, run the included setup script to get a free, trusted SSL certificate from Let's Encrypt.

**Prerequisites:**
- A domain name (e.g., `portfolio.example.com`) with DNS pointing to your VPS IP
- Docker and Docker Compose installed

**Step 1: Start with Docker Compose (self-signed initially)**

```bash
docker compose up -d --build
```

**Step 2: Run the Let's Encrypt setup script**

```bash
chmod +x init-letsencrypt.sh
./init-letsencrypt.sh yourdomain.com your@email.com
```

The script will:
1. Update `nginx.conf` with your domain name
2. Rebuild the Docker image
3. Request a trusted SSL certificate from Let's Encrypt
4. Configure auto-renewal via the Certbot container
5. Restart everything with the new certificate

**Step 3: Access your site**

```
https://yourdomain.com
```

### HTTPS Files Overview

| File                        | Purpose                                              |
| --------------------------- | ---------------------------------------------------- |
| `nginx.conf`                | HTTP→HTTPS redirect + SSL config with security headers |
| `Dockerfile`                | Generates self-signed cert, exposes ports 80 & 443   |
| `docker-compose.yml`        | Orchestrates Nginx + Certbot containers              |
| `init-letsencrypt.sh`       | One-command Let's Encrypt setup when domain is ready  |

### Certificate Renewal

The Certbot container in `docker-compose.yml` automatically checks for renewal every 12 hours. Let's Encrypt certificates are valid for 90 days and are renewed automatically.

To manually force renewal:

```bash
docker compose run --rm certbot renew
docker compose restart portfolio
```

---

## License

This project is private. Feel free to use it as a template for your own portfolio.

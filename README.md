# <p align="center"><img src="/stealthview_icon_128x128.png" width="120" height="120" alt="StealthView Icon" /> <br> StealthView</p>

**StealthView** is a professional-grade web browsing emulator built for developers, security researchers, and privacy enthusiasts. By simulating diverse device environments and network conditions within secure, isolated sessions, it provides a seamless platform for testing responsive designs and verifying geo-restricted content. StealthView prioritizes user anonymity by masking digital fingerprints and ensuring every session remains completely private.

![Stealth View](https://img.shields.io/badge/Stealth-View-blue?style=for-the-badge) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![NGINX](https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=FFFFFF) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)  ![CSS](https://img.shields.io/badge/CSS-663399?style=for-the-badge&logo=CSS&logoColor=FFFFFF) ![Lucide](https://img.shields.io/badge/Lucide-F56565?style=for-the-badge&logo=Lucide&logoColor=FFFFFF) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=FFFFFF) ![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=Node.js&logoColor=FFFFFF)

## 🌐 Live Demo
[https://stealth-view-dusky.vercel.app/](https://stealth-view-dusky.vercel.app/)

## 📸 Screenshots
![Screenshort01](/stealthview_full_image_01.jpg)
![Screenshort02](/stealthview_full_image_02.jpg)

---

## 🚀 Key Features
- **Device Spoofing**: Emulate various models (iPhone, Galaxy, MacBook, etc.) with accurate User Agents and resolutions.
- **Stealth Proxy Engine**: Bypass `X-Frame-Options` and CORS restrictions to browse almost any website.
- **VPN & Geo-Location Simulation**: Mock your IP address and GPS coordinates (Latitude/Longitude) to test location-based content.
- **Isolated Sandbox**: Browsing happens within a secure iframe sandbox with no persistent cookies.
- **Real-time Metrics**: Monitor simulated connection speeds and session security status.

## 🛠️ Tech Stack
- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (`motion/react`)
- **Icons**: Lucide React
- **Backend**: Node.js, Express (Proxy Engine)
- **Networking**: Axios (Server-side fetching)

## 📂 File Structure
```text
| (StealthView)
├── src/                   # Application source (frontend)
│   ├── App.tsx            # Main Application Logic
│   ├── main.tsx           # React entry point
│   ├── types.ts           # Shared TypeScript interfaces
│   ├── constants.ts       # Device & location definitions
│   ├── components/        # UI components
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Browser.tsx
│   │   ├── AboutPopup.tsx
│   │   └── StealthLogo.tsx
│   └── index.css          # Global styles & Tailwind imports
├── Dockerfile             # Multi-stage Dockerfile (build + runtime)
├── .dockerignore          # Files excluded from Docker build context
├── docker-compose.yml     # Compose file for local container orchestration
├── server.ts              # Express server & Stealth Proxy Engine (serves /dist in prod)
├── package.json           # NPM scripts & dependency manifest
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build & dev server config
└── README.md              # Project documentation
```

## ⚙️ Installation & Usage

### Local (development & production)

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd StealthView
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server (hot-reload):
   ```bash
   npm run dev
   ```

### Docker (build & run)

1. Build an image and run the container:
   ```bash
   docker build -t stealthview:latest .
   docker run --rm -p 3000:3000 stealthview:latest
   ```
   - App will be available at: http://localhost:3000

2. Or use `docker-compose` (recommended):
   ```bash
   docker-compose up --build
   ```

3. Notes & troubleshooting:
   - The container runs the Express server on port `3000`.
   - To change the exposed port, update the `ports` mapping in `docker-compose.yml` or the `docker run` command.
   - The Docker build runs `npm run build` and then starts `server.ts` via `tsx`. If you prefer compiling `server.ts` to JS and running `node`, tell me and I'll update the Dockerfile.


## 📜 License
This project is licensed under the **Apache-2.0 License**.

## 🛡️ About
**Raj Prajapati**

Developed on `07th April 2026`/`Tuesday`.

---
*Disclaimer: This tool is intended for educational and professional testing purposes only. Users are responsible for complying with the terms of service of the websites they visit.*

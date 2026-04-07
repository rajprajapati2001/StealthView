# <p align="center"><img src="./src/components/StealthLogo.tsx" width="40" height="40" alt="StealthView Icon" /> <br> StealthView</p>

**StealthView** is a professional-grade web browsing emulator designed for developers, security researchers, and privacy enthusiasts. It allows you to simulate various device environments and network conditions in a secure, isolated session.

## 🌐 Live Demo
[View StealthView Live](https://ais-dev-ts45n2xpzmrse3lkzdlttx-256006397821.asia-southeast1.run.app)

## 📸 Screenshots
*Placeholder: [Main Dashboard View]*

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
.
├── server.ts              # Express server & Stealth Proxy Engine
├── src/
│   ├── App.tsx            # Main Application Logic
│   ├── main.tsx           # Entry Point
│   ├── types.ts           # Shared TypeScript Interfaces
│   ├── constants.ts       # Device & Location Data
│   ├── components/        # Modular UI Components
│   │   ├── Navbar.tsx     # Navigation & URL Input
│   │   ├── Sidebar.tsx    # Device & VPN Configuration
│   │   ├── Browser.tsx    # Iframe Viewport & Proxy Logic
│   │   ├── AboutPopup.tsx # Information Modal
│   │   └── StealthLogo.tsx# Custom SVG Logo
│   └── index.css          # Global Styles & Tailwind Imports
├── package.json           # Dependencies & Scripts
└── tsconfig.json          # TypeScript Configuration
```

## ⚙️ Installation & Usage

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## 📜 License
This project is licensed under the **Apache-2.0 License**.

## 🛡️ About
StealthView was built to provide a seamless environment for testing responsive web designs and verifying geo-restricted content delivery. It prioritizes privacy by isolating browsing sessions and providing tools to mask digital fingerprints.

---
*Disclaimer: This tool is intended for educational and professional testing purposes only. Users are responsible for complying with the terms of service of the websites they visit.*

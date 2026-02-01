# ROBO RUMBLE: Cyberpunkscape Edition

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![Three.js](https://img.shields.io/badge/Three.js-R3F-white)

> **The apex of automated combat.** Build, battle, and become a legend in the ultimate cyber-industrial arena.

## 🌟 Overview

**Robo Rumble** is a high-fidelity, immersive web experience built with **Next.js 15** and **Three.js**. It features a procedural 3D cyberpunk cityscape, volumetric lighting, and interactive animations that bring the future of mech combat to life.

This project demonstrates the integration of advanced 3D graphics (React Three Fiber) with modern web performance standards.

## ✨ Key Features

-   **🏙️ Procedural Cityscape**: An infinite, instanced-mesh skyline generated on the fly. No heavy model assets required.
-   **🌫️ Volumetric Atmosphere**: Custom shader-based Aurora Borealis effects, volumetric fog, and dynamic neon lighting.
-   **⚡ Interactive UI**:
    -   Individual physics-based character animations for the main title.
    -   Aurora-glass navigation bar.
    -   Holographic gallery with generated cyberpunk assets.
-   **🚀 Performance First**: Optimized using `InstancedMesh` for rendering thousands of buildings with a single draw call.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **3D Engine**: [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
-   **3D Helpers**: [@react-three/drei](https://github.com/pmndrs/drei)
-   **Animations**: [GSAP](https://gsap.com/) (ScrollTrigger) & [Framer Motion](https://www.framer.com/motion/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)

## 🚀 Getting Started

### Prerequisites

-   Node.js 18+
-   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/robo-rumble.git
    cd robo-rumble
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the app:**
    Visit `http://localhost:3000` in your browser.

## 📂 Project Structure

```
src/
├── app/                  # Next.js App Router root
│   └── page.tsx          # Main entry point (Single Page Scroll)
├── components/
│   ├── hero/             # Hero section & Title logic
│   ├── layout/           # Navbar & Footer
│   ├── scene/            # Three.js Canvas & Logic
│   │   └── MainScene.tsx # The 3D World (City, Lights, Aurora)
│   ├── sections/         # Page Content Sections
│   │   ├── GallerySection.tsx
│   │   ├── StatsSection.tsx
│   │   └── ...
│   └── ui/               # Shadcn UI primitives
└── lib/                  # Utilities (Tailwind merge, etc.)
```

## 🎨 Asset Credits

-   **Visual Assets**: Generated via Google Gemini (Cyberpunk Robots in `/public/gallery`).
-   **Icons**: [Lucide React](https://lucide.dev/).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*System Online. Protocols Initialized.*

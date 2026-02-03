import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class", 
  // tailwind.config.ts
theme: {
  extend: {
    colors: {
      brand: {
        primary: '#3b82f6',   // Electric Blue
        secondary: '#8b5cf6', // Deep Purple
        accent: '#10b981',    // Emerald Green
      },
      // Premium Dark Palette
      glass: {
        dark: 'rgba(15, 23, 42, 0.7)',
        light: 'rgba(255, 255, 255, 0.8)',
      }
    },
    boxShadow: {
      'neon-blue': '0 0 20px rgba(59, 130, 246, 0.2)',
      'neon-purple': '0 0 20px rgba(139, 92, 246, 0.2)',
    }
  }
},
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        helio: {
          dark: "#08090a",
          card: "#111214",
          border: "#1c1d20",
          accent: "#8b5cf6",
        },
      },
      backgroundImage: {
        "helio-gradient":
          "radial-gradient(circle at top right, rgba(139, 92, 246, 0.05), transparent)",
      },
    },
  },
  plugins: [],
};
export default config;

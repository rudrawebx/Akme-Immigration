import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E52329",
          redDark: "#C0161C",
          redLight: "#FFF1F2",
          gold: "#FAB800",
          goldDark: "#D99E00",
          goldLight: "#FEFCE8",
          dark: "#0F172A",
          charcoal: "#1E293B",
          slate: "#334155",
          muted: "#64748B",
          border: "#E2E8F0",
          card: "#FFFFFF",
          bg: "#F8FAFC",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        heading: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

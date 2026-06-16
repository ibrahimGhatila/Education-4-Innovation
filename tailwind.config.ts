import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Flame palette — derived from the E4I "flame" brand mark
        flame: {
          50: "#FFF4ED",
          100: "#FFE5D4",
          200: "#FFC6A8",
          300: "#FF9F70",
          400: "#FF7438",
          500: "#FF5A1F",
          600: "#F03E0A",
          700: "#C72E08",
          800: "#9E2710",
          900: "#7F2410",
        },
        // Deep ink navy for contrast and footer
        ink: {
          50: "#F4F6FB",
          100: "#E6EAF3",
          200: "#C6CFE2",
          300: "#9AABCB",
          400: "#647CA8",
          500: "#3E588A",
          600: "#2A3F6B",
          700: "#1E2F52",
          800: "#142039",
          900: "#0B1524",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(11, 21, 36, 0.18)",
        glow: "0 12px 50px -10px rgba(255, 90, 31, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

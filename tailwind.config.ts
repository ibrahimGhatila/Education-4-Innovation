import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand palette (sampled from the official E4I logo) ─────
        orange: {
          50: "#FEF5EA", 100: "#FDE6CC", 200: "#FCC98F", 300: "#FBA94F",
          400: "#FB8F22", 500: "#FB7F0D", 600: "#DC6A05", 700: "#B05206",
          800: "#8A410B", 900: "#71370E",
        },
        grape: {
          50: "#F5EEFB", 100: "#E7D6F4", 200: "#CFAEE8", 300: "#B385D9",
          400: "#9355C4", 500: "#6F2AA4", 600: "#5E2390", 700: "#4C1C75",
          800: "#3C175D", 900: "#2F124A",
        },
        leaf: {
          50: "#F2FBE6", 100: "#E0F5C4", 200: "#C4ED90", 300: "#A3E25A",
          400: "#8BDA3C", 500: "#7BD32C", 600: "#63B31E", 700: "#4C8C19",
          800: "#3D6E1A", 900: "#345B1B",
        },
        // Maroon/berry — the deep red circle in the logo (missed by auto-extraction)
        berry: {
          50: "#FCEAEF", 100: "#F6CBD7", 200: "#E99BB1", 300: "#D96A8B",
          400: "#B83E63", 500: "#8A1E3C", 600: "#761833", 700: "#5E142A",
          800: "#4A1021", 900: "#3A0C19",
        },
        ink: {
          50: "#F4F6FA", 100: "#E5E9F1", 200: "#C7CFDF", 300: "#9DAAC6",
          400: "#6B7CA3", 500: "#455681", 600: "#313F63", 700: "#283450",
          800: "#212F4B", 900: "#15203A",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "system-ui", "sans-serif"],
      },
      borderRadius: { "2xl": "1rem", "3xl": "1.5rem" },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(33, 47, 75, 0.18)",
        glow: "0 14px 50px -10px rgba(251, 127, 13, 0.40)",
        "glow-grape": "0 14px 50px -10px rgba(111, 42, 164, 0.40)",
        lift: "0 26px 60px -18px rgba(33, 47, 75, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-22px) rotate(8deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 11s ease-in-out infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        gradient: "gradient 7s ease infinite",
        "spin-slow": "spin-slow 26s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

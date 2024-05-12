import { fade } from "astro/dist/transitions";

const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        Homebg:
          'linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)),url("/images/HomeBg.jpg")',
        Homebg_gradient:
          "linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0),rgba(0,0,0,0),rgba(0,0,0,0.55),rgba(0,0,0,0.95))",
      },
      boxShadow: {
        button: "0px 0px 10px 20px rgba(0, 0, 255, .2)",
      },
      keyframes: {
        pulse: {
          "0%, 50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        blinkfast: {
          "0%, 50%, 100%": { opacity: 1 },
          "25%, 75%": { opacity: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        pulseButton: {
          "0%, 100%": { boxShadow: "0px 0px 10px 7px rgba(0, 0, 255, 0.2)" },
          "50%": { boxShadow: "0px 0px 10px 9px rgba(0, 0, 255, 0.5)" },
        },
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1)",
        blinkfast: "blinkfast 0.8s linear infinite",
        fadeIn: "fadeIn 2s ease-in-out forwards ",
        pulseButton: "pulseButton 3s infinite",
      },

      fontFamily: {
        tomorrow: ["Tomorrow", "sans-serif"],
      },
      colors: {
        "base-blue": "#0070F0",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

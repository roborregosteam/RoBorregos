const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        button: "0px 0px 10px 20px rgba(0, 0, 255, .2)",
      },
      keyframes: {
        pulseButton: {
          "0%, 100%": { boxShadow: "0px 0px 10px 7px rgba(0, 0, 255, 0.2)" },
          "50%": { boxShadow: "0px 0px 10px 9px rgba(0, 0, 255, 0.5)" },
        },
      },
      animation: {
        pulseButton: "pulseButton 3s infinite",
      },
      backgroundImage: {
        "team-picture": "url('/Team.jpg')",
      },
      backgroundColor: {
        "team-bg": "linear-gradient( 90deg, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0.5) 100%), url(/Team.jpg)",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

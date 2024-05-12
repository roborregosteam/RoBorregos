import { fade } from "astro/dist/transitions";

const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				'Homebg': 'linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)),url("/images/HomeBg.jpg")',
				'Homebg_gradient': 'linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0),rgba(0,0,0,0),rgba(0,0,0,0.55),rgba(0,0,0,0.95))',
			  },
			keyframes: {
				pulse: {
					'0%, 50%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
				blinkfast: {
					'0%, 50%, 100%': { opacity: 1 },
					'25%, 75%': { opacity: 0 },
				},
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
		
				},
			},
			animation: {
				pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1)',
				blinkfast: 'blinkfast 0.8s linear infinite',
				fadeIn: 'fadeIn 2s ease-in-out forwards ',
				
			},
			transitionDelay:{
				'2000': '2000ms',
				'3000': '3000ms',
				'4000': '4000ms',
				'5000': '5000ms',
				'6000': '6000ms',
				'7000': '7000ms',
				'8000': '8000ms',
				'9000': '9000ms',
				'10000': '10000ms',
				'mas': '6000ms',
			},
			fontFamily: {
				'tomorrow': ['Tomorrow', 'sans-serif'],
			},
			colors: {
				'base-blue': '#0070F0'
			}
		},
	},
	darkMode: "class",
	plugins: [nextui()],
}

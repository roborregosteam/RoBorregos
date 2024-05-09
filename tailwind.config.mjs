const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				'Homebg': 'linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)),url("/images/HomeBg.jpg")',
				'Homebg-degradado': 'linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.0),rgba(0,0,0,0),rgba(0,0,0,0),rgba(0,0,0,0),rgba(0,0,0,0.75))',
			  },
			keyframes: {
				pulse: {
					'0%, 50%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
				blinkfast: {
					'0%, 50%, 100%': { opacity: 1 },
					'25%, 75%': { opacity: 0 },
				}
				

			},
			animation: {
				pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1)',
				blinkfast: 'blinkfast 0.8s linear infinite',
				
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

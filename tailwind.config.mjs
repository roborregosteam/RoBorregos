const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				pulse: {
					'0%, 50%': { opacity: 0 },
					'100%': { opacity: 0.9 },
				},
			},
			animation: {
				pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1)',
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

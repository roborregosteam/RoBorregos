const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				"infinite-carousel": {
					"from": { transform: "translateX(0)" },
					"to": { transform: "translateX(-100%)" },
				},
			},
			animation: {
				"infinite-carousel": "infinite-carousel 10s linear infinite",
			},
		},
	},
	variants: {
		extend: {
			animation: ["hover", "group-hover"],
		},
	},
	darkMode: "class",
	plugins: [nextui(),
		function ({addUtilities}) {
			const newUtilities = {
				".pause-animation": {
					"animation-play-state": "paused",
				},
			};
			addUtilities(newUtilities);
		}
	],
}

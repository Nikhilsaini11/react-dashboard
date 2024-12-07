/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: "#1E293B",
				darkGray: "#334155",
				lightBlue: "#3B82F6",
				cardDark: "#1E293B",
			},
			width: {
				"7/10": "70%",
				"3/10": "30%",
			},
		},
	},
	plugins: [],
};

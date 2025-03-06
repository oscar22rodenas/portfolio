/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
		  colors: {
			primary: '#3245ff',
			secondary: '#bc52ee',
		  },
		  fontFamily: {
			sans: ['Inter', 'system-ui', 'sans-serif'],
		  },
		},
	  },
	  plugins: [],
	}

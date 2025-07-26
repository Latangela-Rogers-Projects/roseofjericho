/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'tc-blue': '#350C41', // royal blue
        'tc-gold': '#FEB405', // gold
      },
    },
  },
  plugins: [],
}
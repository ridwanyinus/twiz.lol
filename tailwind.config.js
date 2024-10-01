/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./lib/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", // Add this line to include the lib folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

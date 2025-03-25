// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': {
          '100': '#f5f5f5',
          '200': '#e5e5e5',
          '800': '#2c2c2c'
        }
      }
    },
  },
  plugins: [],
}
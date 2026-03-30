/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        silk: {
          cream: '#F8F5F0',
          gold: '#C9A962',
          brown: '#5D4037',
          black: '#1A1A1A',
        }
      }
    },
  },
  plugins: [],
}

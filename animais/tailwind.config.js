/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        display: ['Playfair Display SC', 'serif'],
      },
    },
  },
  plugins: [],
};

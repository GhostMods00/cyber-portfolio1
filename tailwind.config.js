// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          primary: '#00ff41',
          secondary: '#008f11',
          dark: '#003b00',
          light: '#00ff41',
        }
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      fontFamily: {
        cyber: ['Cyber', 'monospace'],
      }
    },
  },
  plugins: [],
}
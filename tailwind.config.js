/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark100': '#1F2025',
        'blue100': '#205BF1',
        'blue200': '#0036C2'
      },
    },
  },
  plugins: [],
}


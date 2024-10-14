/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#faf4d3',
        secondary: '#e28413',
        border:'#000022',
        buttons: '#ffffff',
        paragraph: '#f6f7eb',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        }
      },
      backgroundImage: {
        'aboutBg' : "url('/src/assets/about_bg1.png')"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16A34A",
        secondary: "#FACC15",
        dark: "#1E293B",
        light: "#F8FAFC",
      },
    },
  },
  plugins: [],
}; 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1612",
        secondary: "#2a2420",
        accent: "#c9a96e",
        textMain: "#e8e0d0",
        textDim: "#8a7e6e",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Sécurité supplémentaire
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        premiumBlack: "#0A0A0A",
        accentBlue: "#2563EB",
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html',
  "./node_modules/tw-elements/dist/js/**/*.js"],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'dark': '#1e293b',
        'dark-2': '#0f172a',
        'secon': '#64748b',
        'blue-base': '#0ea5e9'
      }
    },
  },
  plugins: [],
}


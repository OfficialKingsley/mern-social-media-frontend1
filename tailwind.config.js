/** @type {import('tailwindcss').Config} */
module.exports = {
  node: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: false,
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}


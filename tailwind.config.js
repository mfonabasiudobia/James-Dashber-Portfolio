/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/***/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#010C15",
        dark: "#121212",
        accent : '#43D9AD',
        lightgrey: '#9CA3AF',
        light: "#f3f3f3",
        lightsecondary : '#FBFBFE',
        secondary: "#808183",
        danger: "#CF0202",
        success: "#43D9AD;",
        bordergray: "#C9C8D3",
        darkgrey: "#555555",
        lightblue: "#E9ECF9",
        lighterblue : '#EBEDFA',
      }
    },
  },
  plugins: [],
}
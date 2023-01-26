/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        dark: "#20232A",
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/main.png')",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};

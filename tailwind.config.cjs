/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        dark: "#20232A",
        desert: "#F1BE6C",
      },
      gradientColorStops: {
        desert: "#F1BE6C",
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/main.png')",
      },
      screens: {
        xs: "400px",
      },
      textColor: {
        desert: "#F1BE6C",
      },
    },
  },
  plugins: [],
};

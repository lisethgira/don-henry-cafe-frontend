/*eslint-env node*/
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        history: "url('../src/assets/images/cold-brew.webp')",
        main: "url('/src/assets/images/bg-main-coffee.webp')",
        profile: "url('/src/assets/images/bg-profile.webp')",
        cart: "url('/src/assets/images/bg-cart.webp')",
      },
      boxShadow: {
        primary: "0px 6px 20px 0px #000020;",
      },
      spacing: {
        22: "10rem",
      },
      colors: {
        primary: "#4F5665",
        "primary-context": "#7C828A",
        secondary: "#ffba33",
        "secondary-200": "#f4a200",
        tertiary: "#6A4029",
        quartenary: "#0b132a",
      },
      borderWidth: {
        1: "2px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        donhenry: {
          primary: "#6A4029",
          secondary: "#ffba33",
          accent: "#0b132a",
          neutral: "#9f9f9f",
          "base-100": "#fff",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
          "plain-white": "#FFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}



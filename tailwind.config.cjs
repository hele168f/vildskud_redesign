/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#291430",
        theme: "#FF31D8",
        button: "#1F51FF",
        buttonHover: "#1A3593",
        footer: "#441E51",
        theme2: "#1F51FF",
        themeHover: "#FF8DE9"
      },

      fontFamily: {
        Monoton: "'Monoton', cursive;",
      },

      boxShadow: {
        neon: '0 0 0.5em 0 #1F51FF',
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

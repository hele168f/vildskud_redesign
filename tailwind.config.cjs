/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#291430",
        theme: "#FF31D8",
        button: "#8321FF",
        buttonHover: "#4B188B",
      },

      fontFamily: {
        Monoton: "'Monoton', cursive;",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

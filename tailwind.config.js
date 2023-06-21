/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "urbanpay-primary": "#632FD9",
        "urbanpay-secondary": "#DBFE87",
      },
    },
    fontFamily: {
      Poppins: ["poppins, sans-serif"],
      SpacGrotesk: ["Space Grotesk, sans-serif"],
    },
    /*container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },*/
  },
  plugins: [
    require('flowbite/plugin')
]
};
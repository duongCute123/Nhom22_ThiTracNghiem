/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'loginImage':"url('./images/back-login.png')",
        'imageHomePage':"url('./images/back-none.png')"
      }
    },
  },
  plugins: [],
}
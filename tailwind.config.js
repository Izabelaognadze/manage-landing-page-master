/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        PrimaryBrightRed: 'hsl(12, 88%, 59%)',
        PrimaryBrightRedLight: 'rgba(249,143,117,255)',
        PrimaryDarkBlue: 'hsl(228, 39%, 23%)',
        PrimaryLightOrange: 'rgba(255,240,235,255)',
        NeutralDarkGrayishBlue: 'hsl(227, 12%, 61%)',
        NeutralVeryDarkBlue: 'hsl(233, 12%, 13%)',
        NeutralVeryPaleRed: 'hsl(13, 100%, 96%)',
        NeutralVaryLightGray: 'hsl(0, 0%, 98%)',
        AttributionColor: 'hsl(228, 45%, 44%)'
      },
      lineHeight: {
        '118': '1.18rem'
      },
    },
  },
  plugins: [],
}


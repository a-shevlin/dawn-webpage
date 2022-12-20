/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '': {

        }
      },
      backgroundImage: {
        'base-panel': "url('../assets/dawn-bg.png')",
      },
      zIndex: {
        '1': '1',
      },
      screens: {
        'xs': '540',
      }
    },
  },
  plugins: [],
}

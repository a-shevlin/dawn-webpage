/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zinc': {
          750: '#2c2c30',

        }
      },
      backgroundImage: {
        'base-panel': "url('../assets/dawn-bg.png')",
      },
      zIndex: {
        '1': '1',
      }
    },
  },
  plugins: [],
}

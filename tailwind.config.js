/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/assets/background-galaxy.png')"
      }
    },
  },
  plugins: [],
}

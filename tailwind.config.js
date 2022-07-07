/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{html,js,jsx}',
    './public/**/*.{png,jpg}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern-1': "url('../public/image.png')",
        'pattern-2': "url('../public/bg-1.png')",
        'pattern-3': "url('../public/background.svg')",
        'pattern-4': "url('../public/backgroundPol.svg')",
      }
    },
  },
  plugins: [],
}

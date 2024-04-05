/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      amina: ['amina-reska'],
      roboto: ['Roboto']
    },
    extend: {
      screens: {
        'tall': { 'raw': '(min-height: 768px)' }
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'grayish-blue': 'hsl(220, 15%, 55%)',
        'light-gray': 'hsl(212, 45%, 89%)',
        
      },
      fontFamily: {
        outfit: ['Outfit']
      }
    },
  },
  plugins: [],
}

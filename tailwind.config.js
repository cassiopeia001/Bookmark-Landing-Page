/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'SoftBlue': 'hsl(231, 69%, 60%)',
        'SoftRed': 'hsl(0, 94%, 66%)',
        'GrayishBlue': 'hsl(229, 8%, 60%)', 
        'VeryDarkBlue': 'hsl(229, 31%, 21%)',
      },
      fontFamily: {
        "rubik": ["Rubik", "sans-serif"],
      },
    },
    screens: {
      'md': { 'max': '768px' },
      'sm': { 'max': '640px' },
    },
  },
  plugins: [],
}


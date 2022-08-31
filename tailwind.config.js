/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': ['Abril Fatface', 'cursive'],
      'sans': [ 'Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'computer': "url('./assets/images/bg.jpg')",
      }
    },
  },
  plugins: [],
}


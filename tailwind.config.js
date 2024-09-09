/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'footer': "url('./assets/bg.jpg')",
        }
      },
    },
    
    plugins: [],
  }
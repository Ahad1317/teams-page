/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      gradientColorStops: theme => ({
        'light-purple': '#A74CF2',
        'dark-purple': '#7328BC',
      }),
    },
    plugins: [],
  }
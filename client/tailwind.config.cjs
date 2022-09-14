/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      container: {
        center: true,
      },
      extend: {
        screens:{
          'xs': {'max': '350px'},
        },
      },
  },
  plugins: [],
};

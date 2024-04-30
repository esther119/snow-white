/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "poor-story": ['"Poor Story"', "sans-serif"],
    },
    extend: {
      colors: {
        "custom-bg": "#F4F4F0",
      },
    },
  },
  plugins: [],
};

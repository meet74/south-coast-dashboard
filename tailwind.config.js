/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    
    fontFamily: {
      display: ['Noto Sans', 'sans-serif'],
    },
    extend: {
      maxHeight: {
        '1/2': '50%',
        '1/4': '25%',
      },
      minHeight: {
        '1/2': '50%',
        '1/4': '25%',
      },
    },
  },
  plugins: [],
};

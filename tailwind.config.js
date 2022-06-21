/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['DIN', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        'red-550': 'rgba(233, 27, 61, 1)',
      },
    },
  },
  plugins: [],
};

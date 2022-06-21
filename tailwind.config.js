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
      keyframes: {
        expand: {
          '0%, 80%, 100%': {
            transform: 'scale(0)',
          },
          '40%': {
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        expand: 'expand 1.4s infinite ease-in-out both',
      },
    },
  },
  plugins: [],
};

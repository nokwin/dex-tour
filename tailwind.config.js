/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          bg: '#050509',
          border: '#1A1A21',
          blockBg: '#1A1A1F',
          text: '#878792',
        },
      },
      spacing: {
        52: '13rem',
        57: '14.25rem',
        100: '25rem',
      },
    },
  },
  plugins: [],
};

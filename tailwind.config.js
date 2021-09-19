module.exports = {
  purge: [
    './src/content/**/*.{css,html,ts,tsx}',
    './src/popup/**/*.{css,html,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      default: '#fff',
      black: '#000',
      primary: '#8ac3e2',
      secondary: '#b22fff',
      danger: '#e3342f',
    },
    ringColor: {
      primary: '#7f18bb',
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      default: '#fff',
      primary: '#1a1b42',
      secondary: '#ffed4a',
      danger: '#e3342f',
      line: '#324492',
      phase: '#24294a',
    }),
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    }),
  },
  variants: {
    extend: {
      ringColor: ['hover', 'active'],
      ringWidth: ['hover', 'active'],
    },
  },
  plugins: [],
};

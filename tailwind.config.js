const { fontFamily, spacing } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: process.env.NODE_ENV ? 'jit' : undefined, // This "hack" ensures your IDE detects all normal.
  purge: ['./index.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          50: '#f2f5f8',
          100: '#e6ecf1',
          200: '#bfcfdb',
          300: '#99b2c6',
          400: '#4d799b',
          500: '#003f70',
          600: '#003965',
          700: '#002f54',
          800: '#002643',
          900: '#001f37',
        },
        secondary: {
          50: '#f3faf2',
          100: '#e7f5e6',
          200: '#c3e7bf',
          300: '#9fd899',
          400: '#56bb4d',
          500: '#0e9e00',
          600: '#0d8e00',
          700: '#0b7700',
          800: '#085f00',
          900: '#074d00',
        },
      },
      container: {
        center: true,
        padding: spacing[6],
        screens: {
          sm: '100%',
          md: '640px',
          lg: '960px',
          xl: '1220px',
        },
      },
      screens: {
        dlg: { max: '1023px' },
        dmd: { max: '767px' },
      },
      flex: {
        2: '2 1 0%',
        3: '3 1 0%',
      },
      maxWidth: {
        'min-content': 'min-content',
        'max-content': 'max-content',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
      maxHeight: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
      minWidth: {
        'min-content': 'min-content',
        'max-content': 'max-content',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
      },
      minHeight: {
        'min-content': 'min-content',
        'max-content': 'max-content',
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
        '4/5': '80vh',
      },
      inset: {
        '1/2': '50%',
        '-1/2': '-50%',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['before', 'after'],
      borderRadius: ['before', 'after'],
      inset: ['before', 'after'],
      position: ['before', 'after'],
      zIndex: ['before', 'after'],
      backgroundOpacity: ['before', 'after'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-pseudo-selectors'),
  ],
};

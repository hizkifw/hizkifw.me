const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

let containerScreens = Object.assign({}, defaultTheme.screens);
delete containerScreens['2xl'];

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      screens: containerScreens,
    },
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Symbol"',
        ],
      },
      colors: {
        theme: {
          primary: colors.red[600],
          secondary: colors.red[400],
        },
        accent: {
          primary: colors.sky[600],
          secondary: colors.sky[400],
          stain: colors.sky[200],
        },
        ink: {
          primary: colors.black,
          secondary: '#111',
          stain: '#333',
          paper: colors.gray[900],
        },
        canvas: {
          primary: colors.gray[50],
          secondary: colors.gray[300],
          stain: colors.gray[500],
          paper: colors.gray[50],
        },

        primary: {
          primary: colors.sky[600],
          secondary: colors.sky[400],
        },
        success: {
          primary: colors.green[600],
          secondary: colors.green[400],
        },
        warning: {
          primary: colors.orange[600],
          secondary: colors.orange[400],
        },
        danger: {
          primary: colors.red[600],
          secondary: colors.red[400],
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

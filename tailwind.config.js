/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      sd: {'min': '768px', 'max': '1040px'},
      xm: {'max': '765px'}
    },

  },
  plugins: [],
}

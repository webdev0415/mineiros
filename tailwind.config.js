// const defaultTheme = require('tailwindcss/defaultTheme')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        red: '#f22751',
        darkred: '#e51942',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            a: {
              color: '#374151',
              textDecoration: 'underline',
              '&:hover': {
                color: '#161e2e',
              },
            },
            'code::before': null,
            'code::after': null,
            'pre code::before': null,
            'pre code::after': null,
            code: {
              backgroundColor: '#e2e8f0',
              'padding-left': '0.3rem',
              'padding-right': '0.3rem',
              'padding-top': '0.1rem',
              'padding-bottom': '0.1rem',
              'border-radius': '0.3rem',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}

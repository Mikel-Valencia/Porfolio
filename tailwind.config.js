/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  prefix: 'tw-',
  theme: {
    screens: {
      xs: '370px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1440px'
    },
    container: {
      maxwidth: {
        DEFAULT: '100%',
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        xxl: '1320px'
      }
    },
    extend: {
      screens: {
        'md-maxw': {'max': '768px'}
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3'
      },
      boxShadow: {
        'nav': '-3.5px 0 8px 0 rgba(0,0,0,0.3)'
      }
    },
  },
  plugins: [],
}


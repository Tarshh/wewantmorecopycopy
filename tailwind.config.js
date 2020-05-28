module.exports = {
  purge: [],
  theme: {
    inset: {
      '0': '0',
      '1/2': '50%',
      '1': '0.5rem',
      '2': '2rem',
      '4': '4rem',
      auto: 'auto',
    },
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1600px',
    },
    fontFamily: {
      'rakkas': [ 'Rakkas' ],
      'dmSans': [ 'DM Sans' ],
    },
    fontSize: {
      '5xl': [ '3rem' ],
      '5.5xl': [ '3.3rem' ],
      '6xl': [ '4rem' ],
      '6.6xl': [ '4.3rem' ],
      '7xl': [ '5rem' ],
      '7.5xl': [ '5.3rem' ],
    },
    extend: {
      colors: {
        lightGrey: '#DBDBDB',
        darkGrey: '#1C1B1A',
        darkGreyRgba: 'rgba(28, 27, 26, 0.7)',
        white: 'white',
        currentColor: 'currentColor',
      },
      height: theme => ({
        screen: "105vh"
      })
    },
    width: theme => ({
      auto: 'auto',
      '40p': '40%',
      '50p': '50%',
      '60p': '60%',
      '100p': '100%',
      full: '100%',
      ...theme('spacing'),
    }),
    maxHeight: (theme) => ({
      none: 'none',
      textMax: '5.6rem',
      full: '100%',
      ...theme('screens'),
    }),
    maxWidth: (theme) => ({
      none: 'none',
      '40p': '40%',
      '60p': '60%',
      '100p': '100%',
      full: '100%',
      ...theme('screens'),
    }),
    padding: (theme, { negative }) => ({
      auto: 'auto',
      '40p': '40%',
      '50p': '50%',
      '60p': '60%',
      ...theme('spacing'),
    }),
    flex: {
      '0': '0 0 auto',
      '1': '1 1 0%',
      '2': '1 0 auto',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
      '50p': '0 0 50%',
      '100p': '0 0 100%',
    },
  },
  variants: {},
  plugins: [],
}

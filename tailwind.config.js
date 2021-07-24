module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
    safelist: [
      'text-graphite-gray',
      'text-deep-sea',
      'text-lemon-sun',
      'text-toxic-green',
      'text-graphite',
      'text-dark-gray',
      'border-graphite-gray',
      'border-deep-sea',
      'border-lemon-sun',
      'border-toxic-green',
      'border-graphite',
      'border-dark-gray',
      'bg-graphite-gray',
      'bg-deep-sea',
      'bg-lemon-sun',
      'bg-toxic-green',
      'bg-graphite',
      'bg-dark-gray',
    ],
  },
  theme: {
    typography: {
      default: {
        css: {
          'code::before': {
            content: '""',
          },
          'code::after': {
            content: '""',
          },
        },
      },
    },
    extend: {
      colors: {
        'graphite-gray': '#333333',
        'deep-sea': '#0687FF',
        'hot-red': '#FF3F06',
        'lemon-sun': '#FFE400',
        'toxic-green': '#06FFBB',
        graphite: '#1a1a1a',
        'dark-gray': '#1b1b1b',
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // ...
  ],
}

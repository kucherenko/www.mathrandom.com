module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
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
        "graphite-gray": "#333333",
        "deep-sea": "#0687FF",
        "hot-red": "#FF3F06",
        "lemon-sun": "#FFE400",
        "toxic-green": "#06FFBB",
        graphite: "#1a1a1a",
        "dark-gray": "#1b1b1b"
      },
      backgroundImage: () => ({
        "hero-1": "url('/bg/bg-1.png')",
        "hero-2": "url('/bg/bg-2.png')",
        "hero-3": "url('/bg/bg-3.png')",
        "hero-4": "url('/bg/bg-4.png')",
        "hero-5": "url('/bg/bg-5.png')",
        "hero-6": "url('/bg/bg-6.png')"
      })
    }
  },
  variants: {},
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography")
    // ...
  ]
};

import contentFileBeforeInsertHook from './hooks/before-insert-content'

export default {
  // static rendering for fast SSR
  // NOTE: this might break recaptcha
  // https://nuxtjs.org/docs/2.x/features/deployment-targets
  target: 'server',

  // enforcing trailing slash for static builds
  router: {
    trailingSlash: true,
  },
  sitemap: {
    hostname: process.env.BASE_URL,
    trailingSlash: true,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Math.random() Community of engineers',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'A community of IT professionals: Free webinars, Open public technical interviews, Popular frontend, backend, and mobile projects',
      },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      // dns-prefetch {{{
      { rel: 'dns-prefetch', href: 'https://www.recaptcha.net/' }, // recaptcha
      { rel: 'dns-prefetch', href: 'https://www.gstatic.com/' }, // also recaptcha
      { rel: 'dns-prefetch', href: 'https://www.youtube.com' }, // youtube iframe
      // }}}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/base.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/add-to-calendar.ts', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-analytics',

    // https://github.com/Developmint/nuxt-purgecss
    // whitelisting some font-awesome classes, because we set the class dynamically
    // NOTE: we might need to whitelist particular icon classes as well, e.g. fa-github
    ['nuxt-purgecss', { whitelist: ['svg-inline--fa', 'fa-w-16'] }],
  ],

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/recaptcha',
    '@nuxtjs/toast',
  ],
  toast: {
    position: 'top-right',
    duration: 3000,
  },
  fontawesome: {
    icons: {
      solid: ['faExternalLinkAlt'],
      brands: [
        'faTwitter',
        'faGithub',
        'faFacebook',
        'faSpeakerDeck',
        'faMedium',
        'faTelegram',
        'faYoutube',
        'faMeetup',
        'faLinkedin',
        'faProductHunt',
        'faPatreon',
        'faNpm',
        'faInstagram',
        'faTiktok',
        'faVk',
      ],
    },
  },

  recaptcha: {
    version: 3,
    hideBadge: true,
    siteKey: process.env.RECAPTCHA_SITE_KEY,
  },

  env: {
    baseURL: process.env.BASE_URL,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL || '/',
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config: any) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
    },
  },

  hooks: {
    'content:file:beforeInsert': contentFileBeforeInsertHook,
  },
}

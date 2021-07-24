import contentFileBeforeInsertHook from "./hooks/before-insert-content";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Math.random() Community of engineers",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/add-to-calendar.ts", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/recaptcha"
  ],

  fontawesome: {
    icons: {
      solid: [
        'faExternalLinkAlt'
      ],
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
      ]
    }
  },

  recaptcha: {
    version: 3,
    hideBadge: true,
    siteKey: process.env.RECAPTCHA_SITE_KEY
  },

  env: {
    baseURL: process.env.BASE_URL,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL || "/",
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config: any) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    },
  },

  hooks: {
    "content:file:beforeInsert": contentFileBeforeInsertHook
  },

  serverMiddleware: [
    "~/server-middleware/"
  ]
};

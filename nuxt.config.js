export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'title',
        name: 'title',
        content:
          'Mineiros - Procution-Grade Infrastructure on AWS with Infrastructure as Code',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Production-Grade Infrastructure on AWS with Terraform. Get up and running in days instead of weeks. Request your demo now!',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'Mineiros - Procution-Grade Infrastructure on AWS with Infrastructure as Code',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Production-Grade Infrastructure on AWS with Terraform. Get up and running in days instead of weeks. Request your demo now!',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/mineiros-logo-with-subline.png', // the size has to be more 200px at least
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: `mineiros.io`,
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: `en`,
      },
      {
        hid: 'og:image:type',
        property: 'og:image:type',
        content: 'image/jpeg',
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:site',
        property: 'twitter:site',
        content: 'mineirosio',
      },
      {
        hid: 'twitter:creator',
        property: 'twitter:creator',
        content: 'mineirosio',
      },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['static/css/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vuex-persist', mode: 'client' },
    { src: '~plugins/drift.js', mode: 'client' },
    { src: '~plugins/ga.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],

  // TODO temporary fix for composition api
  generate: {
    // choose to suit your project
    interval: 2000,
  },

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios', '@nuxt/content'],

  router: {
    middleware: 'navigation',
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    nestedProperties: ['author.name', 'author.img'],
    liveEdit: false,
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}

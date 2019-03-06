const pkg = require('./package')
const {
  VueLoaderPlugin
} = require('vue-loader')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#FFFFFF'
  },

  /*
   ** Global CSS
   */
  css: [{
    src: '~assets/theme.scss',
    lang: 'sass'
  }, ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/buefy'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Custom routing
   */
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'auth',
        path: '/auth/:provider(facebook|google)',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
    plugins: [
      // make sure to include the plugin for the magic
      new VueLoaderPlugin()
    ]
  }
}

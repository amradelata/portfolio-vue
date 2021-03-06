
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { httpEquiv: 'X-UA-Compatible', content: 'ie=edge' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.4.2/css/all.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Signika:wght@700&display=swap' }
    ]
      // script: [
      //   { src: '@/assets/js/index.js' }
      // ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/style.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
     ['@nuxtjs/pwa', { icon: false }],
    '@nuxtjs/pwa',
    '@nuxtjs/bulma',
  ],
  pwa: {
  icon: {
    // /* icon options */
  }
},
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

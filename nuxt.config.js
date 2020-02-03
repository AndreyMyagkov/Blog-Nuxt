
import axios from 'axios'
export default {

  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
     
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat'
      }
    ]
  },
  // Animation
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/scss/main.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/app-components.js',
    { src: '~/plugins/app-codemirror.js', ssr: false }
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
      // ['@nuxtjs/google-analytics', {
      //   id: 'UA-1234-1'
      // }],
      // ['@nuxtjs/yandex-metrika', {
      //   id: 'KEY',
      //   webvisor: false,
      //   clickmap: true,
      //   tracklinks: true,
      // }],
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'vue',
      'axios',
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  generate: {
    routes() {
      return axios.get('https://blog-nuxt-8e0b1.firebaseio.com/posts.json')
        .then((res) => {
           const postsArray = [];
           for (let key in res.data) {
            postsArray.push({
              ...res.data[key],
              id: key
            })
          }
          return postsArray.map((post) => {
            return '/blog/' + post.id
          })
        })
    }
  },
}

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Student Internships',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'High School Internship, High School Internships, College internship, College internships, internship, internships, Summer internship, Summer internships, paid internship, paid internships' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '../favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/_general.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/setup.ts', ssr: false },
  { src: '~/plugins/axios-accessor.ts', mode: 'client' },
  { src: '~/plugins/axios.ts', mode: 'client', ssr: false },],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/fontawesome'
  ],
  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  server: {
    port: process.env.PORT || 3000, // default: 3000
    host: '0.0.0.0',
    timing: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  firebase: {
    config: {
      apiKey: 'AIzaSyAp05Mff-n9HgQd8gpp7ndx2hEPEd_8C_4',
      authDomain: 'student-internships.firebaseapp.com',
      projectId: 'student-internships',
      storageBucket: 'student-internships.appspot.com',
      messagingSenderId: '73277938963',
      appId: '1:73277938963:web:73b13c5ca0b18bf97b4ee6',
      measurementId: 'G-J3FVKQWG8P'
    },
    services: {
      analytics: true
    }
  },
}

import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _15c003a8 = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _2fea2cb9 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _6f572653 = () => interopDefault(import('..\\pages\\internship-program.vue' /* webpackChunkName: "pages/internship-program" */))
const _690e5f18 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _15c003a8,
    name: "about-us"
  }, {
    path: "/contact-us",
    component: _2fea2cb9,
    name: "contact-us"
  }, {
    path: "/internship-program",
    component: _6f572653,
    name: "internship-program"
  }, {
    path: "/",
    component: _690e5f18,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

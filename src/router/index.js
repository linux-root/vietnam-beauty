import Vue from 'vue'
import Router from 'vue-router'
import Page from '../components/Page.vue'

Vue.use(Router)

export default new Router({
  history: true,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Page
    }]
})

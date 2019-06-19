import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import logInPage from '@/components/logInPage'
import notFoundPage from '@/common/notFoundPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/logIn',
      name: 'logIn',
      component: logInPage
    },
    {
      path: '*',
      name: 'notFound',
      component: notFoundPage
    }
  ]
})

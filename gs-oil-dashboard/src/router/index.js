import Vue from 'vue'
import Router from 'vue-router'
import Sign from 'components/Sign'
import Desktop from 'components/Desktop'
import Viewport from 'components/Viewport'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/page/:name',
      name: 'viewport',
      component: Viewport
    },
    {
      path: '/desktop',
      name: 'desktop',
      component: Desktop
    },
    {
      path: '/sign',
      name: 'sign',
      component: Sign
    },
    {
      path: '/*',
      redirect: '/page/company.index'
    }
  ]
})

export default router
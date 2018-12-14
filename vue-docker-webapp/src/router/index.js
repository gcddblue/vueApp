import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 组件懒加载
const extension = () => import('cpnts/extension/extension')
const mirroring = () => import('cpnts/mirroring-sel/mirroring-sel')
const container = () => import('cpnts/container/container')

export default new Router({
  routes: [
    {
      path: '/',
      component: extension
    },
    {
      path: '/mirror',
      component: mirroring
    },
    {
      path: '/container',
      component: container
    }
  ]
})

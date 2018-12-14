// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import element from './element/index'
import 'element-ui/lib/theme-chalk/index.css'
import animated from 'animate.css'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(element)
Vue.use(VueLazyload, {
  loading: 'common/images/default.png'
})
Vue.use(animated)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

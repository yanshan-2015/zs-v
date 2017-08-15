// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import { flexible } from './js/lib/properScreen.js'
import { flexibleCss } from './js/lib/properScreen_css.js'

Vue.config.productionTip = false
Vue.use(vueResource);
flexible();
flexibleCss();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

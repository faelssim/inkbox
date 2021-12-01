import Vue from 'vue'
import App from './App.vue'
import  ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import util from './server/utils'
Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.prototype.$util = util
new Vue({
  render: h => h(App),
}).$mount('#app')

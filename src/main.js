/*
 * @Author: wangkun
 * @Date: 2021-12-01 13:56:54
 * @LastEditTime: 2021-12-03 14:56:56
 * @LastEditors: wangkun
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import  ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import eventBus from './server/eventBus'
import util from './server/utils'
import http from './server/http'
Vue.config.productionTip = false
Vue.use(ElementUi)

Vue.prototype.$eventBus = eventBus
Vue.prototype.$util = util
Vue.prototype.$http = http

new Vue({
  render: h => h(App),
}).$mount('#app')

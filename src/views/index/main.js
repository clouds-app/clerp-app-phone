import Vue from 'vue'
import App from './index.vue'
import router from '@/router'
import store from '@/store'
import config from '@/config'
import 'lib-flexible/flexible.js'  //手機適配

import Vant from 'vant'
import 'vant/lib/index.css'
import '@/assets/style/resetUi.css' //重置樣式
Vue.use(Vant)
/**
 * @description 全局注册应用配置 add by andy 2019-07-15 
 */
Vue.prototype.$config = config

Vue.config.productionTip = false
//console.warn('process.env.NODE_ENV:'+process.env.NODE_ENV)
if(config.isRunApp){
  window.apiready = () => {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
    
  }
}
else{
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  
}

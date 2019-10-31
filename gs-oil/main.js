import Vue from 'vue'
import App from './App'
import moment from 'moment'
Vue.prototype.$moment = moment
Vue.filter('dateformat', function(dataStr, pattern) {
  return moment(parseInt(dataStr)).format(pattern)
})
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

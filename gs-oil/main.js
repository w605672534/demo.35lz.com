import Vue from 'vue'
import App from './App'
import moment from 'moment'
import store from './store'

Vue.prototype.$moment = moment
Vue.filter('dateformat', function(dataStr, pattern) {
  return moment(parseInt(dataStr)).format(pattern)
})

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babel-polyfill' IE11浏览器兼容
import Vue from 'vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/iconfont.css'
import './assets/css/bootstrap.min.css'
import './assets/css/material-icons.css'
import './assets/css/desktop.css'
import './assets/css/unattended-operation.css'
import './assets/css/style.css'
import './assets/css/login.css'
import './assets/css/phone.css'
import './assets/css/screen.css'
import './assets/css/progress.css'
import './assets/css/dark-theme.css'
import './assets/css/light-theme.css'
import './assets/css/aurora-theme.css'
import './assets/css/svg.css'
import './assets/css/picture.css'
import $ from 'jquery'
// import Popper from './assets/js/vendor/popper.min.js'
// import './assets/js/vendor/bootstrap.min.js'
import Progress from './components/webkit/Progress'
import EChart from 'components/charts/EChart'
import App from './App'
import './assets/js/vendor/login.js'
import './assets/js/vendor/progress.js'


Vue.component('x-progress', Progress)
Vue.component('x-echart', EChart)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})

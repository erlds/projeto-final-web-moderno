import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkV2YXJpc3RvIFJhbWFsaG8iLCJlbWFpbCI6ImVybGRzNTUxOEBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjQyODU2MDc3LCJleHAiOjE2NDMxMTUyNzd9.hUaV1C55bdp8yjhHDbhBKDjJl9ObDtC7qZHUUsAIPu4'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
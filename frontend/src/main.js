import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkV2YXJpc3RvIFJhbWFsaG8iLCJlbWFpbCI6ImVybGRzNTUxOEBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjQyOTQzNzIxLCJleHAiOjE2NDMyMDI5MjF9.dbt9O2owqaNLlpRBQJJiOS_zqWP66zH0rnmFNNU3w5o'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkV2YXJpc3RvIFJhbWFsaG8iLCJlbWFpbCI6ImVybGRzNTUxOEBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjQ3OTk5ODE3LCJleHAiOjE2NDgyNTkwMTd9.0OUuyP4P66U-gGyL2snh6EWBzLGXo_w8fxrYQ_9NXo4'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
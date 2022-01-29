import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkV2YXJpc3RvIFJhbWFsaG8iLCJlbWFpbCI6ImVybGRzNTUxOEBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjQzNDIyMTMwLCJleHAiOjE2NDM2ODEzMzB9.yu8zsg47GT29mwBzD52wL8a02NaJ4RmWEQZvubIKZFA'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
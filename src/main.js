import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vue-axios-2ed90.firebaseio.com'
// axios.defaults.headers.common['Authorization'] = 'use-at-your-own-risk'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  config.headers.common['Authorization'] = 'thanks-for-the-warning'
  return config
})
const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res)
  return res
  })
// To remove the above interceptor call the following.
// eject must include an argument referencing the interceptor
// we want to remove.
axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

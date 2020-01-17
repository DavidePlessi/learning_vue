import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.request.use(config => {
  console.log('Request interceptor', config);
  return config;
});
axios.interceptors.response.use(res => {
  console.log('Response interceptor', res);
  return res;
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

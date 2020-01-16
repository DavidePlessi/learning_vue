import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

export const eventBus = new Vue({
  methods: {
    colorChange(color){
      this.$emit('colorChange', color)
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

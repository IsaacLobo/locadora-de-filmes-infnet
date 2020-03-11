import Vue from 'vue'
import App from './App.vue'
import './filters';
import router from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';

export default new VueRouter({});
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
//Rotas
Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')





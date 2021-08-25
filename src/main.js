import Vue from "vue";
import App from "./App.vue";
import Axios from "axios";
import VueAxios from "vue-axios";
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from "vue-router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from './router'

Vue.use(VueAxios, Axios)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");

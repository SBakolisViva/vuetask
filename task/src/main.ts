import Vue from "vue";
import App from "./App.vue";
// @ts-ignore
import vuetify from "./plugins/vuetify.js";
import {store} from "./store"
Vue.config.productionTip = false;

const app =new Vue({
  // @ts-ignore
  vuetify,
  store: store,
  render: (h) => h(App),
}).$mount("#app");



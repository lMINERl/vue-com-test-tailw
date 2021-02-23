import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/compiled.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h: (arg0: any) => any) => h(App)
}).$mount("#app");

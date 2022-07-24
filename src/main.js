import Vue from "vue";
import App from "./App.vue";
import Vant from "vant";
import "vant/lib/index.css";
import router from "@/router";
import "@/assets/flexible.js";
import "@/assets/reset.css";
Vue.config.productionTip = false;
Vue.use(Vant);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

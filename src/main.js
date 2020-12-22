import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Data from "./assets/mockData.json";
import VueTheMask from "vue-the-mask";

Vue.config.productionTip = false;
Vue.use(VueTheMask);
new Vue({
   data() {
      return {
         Cards: Data.cards,
      };
   },
   router,
   render: (h) => h(App),
}).$mount("#app");

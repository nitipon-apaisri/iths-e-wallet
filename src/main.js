import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Data from "./assets/mockData.json";
import VueTheMask from "vue-the-mask";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;
library.add(faArrowCircleLeft);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueTheMask);
new Vue({
   data() {
      return {
         local: [],
         Cards: [],
      };
   },
   methods: {
      addCard(info) {
         this.Cards.push(info);
      },
   },
   beforeMount() {
      Data.cards.forEach((n) => this.Cards.push(n));
   },
   router,
   render: (h) => h(App),
}).$mount("#app");

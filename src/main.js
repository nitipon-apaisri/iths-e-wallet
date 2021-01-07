import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import Data from "./assets/mockData.json";
import VueTheMask from "vue-the-mask";

Vue.config.productionTip = false;
Vue.use(VueTheMask);
new Vue({
   data() {
      return {
         local: [],
         Cards: [
            {
               id: "432984728397",
               holder: "MIYAMOTO MUSASHI",
               vendor: "bitcoin",
               number: "5300 8355 9300 7870",
               validMonth: "12",
               validYear: "05",
               bgColor: "#F9B449",
               textColor: "#2c3e50",
               img: "bitcoin",
            },
            {
               id: "432984728397",
               holder: "ELON MUSK",
               vendor: "evil",
               number: "5300 8355 8500 7870",
               validMonth: "12",
               validYear: "05",
               bgColor: "#DF2E4C",
               textColor: "#ECE6DF",
               img: "evil",
            },
            {
               id: "432984728397",
               holder: "momoshu gopp",
               vendor: "blockchain",
               number: "5300 8355 9900 7870",
               validMonth: "12",
               validYear: "05",
               bgColor: "#7E4EE1",
               textColor: "#ECE6DF",
               img: "blockchain",
            },
            {
               id: "432984728397",
               holder: "Roronoa Zoro",
               vendor: "ninja",
               number: "5300 8355 6900 7870",
               validMonth: "12",
               validYear: "05",
               bgColor: "#3A3A3A",
               textColor: "#ECE6DF",
               img: "ninja",
            },
         ],
      };
   },
   methods: {
      addCard(info) {
         this.Cards.push(info);
      },
   },
   router,
   render: (h) => h(App),
}).$mount("#app");

import Vue from "vue";
import Vuex from "vuex";
import goods from "./goods"
import cart from "./cart"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    goods,
    cart
  },
});

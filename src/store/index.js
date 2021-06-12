import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cta: "",
  },

  mutations: {
    SET_CTA(state, cta) {
      state.cta = cta;
    },
  },

  actions: {
    changeCta(context, payload) {
      context.commit("SET_CTA", payload);
    },
  },

  modules: {},
});

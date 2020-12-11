import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playerName: []
  },
  mutations: {
    loadPlayer (state, value) {
      state.playerName = value
    }
  },
  actions: {
    sendName(context, payload) {
      this._vm.$socket.emit("C_sendName", payload);
      router.push("/game");
    },
    getReady(context, payload) {
      this._vm.$socket.emit("C_getReady", payload);
    },
  },
  modules: {},
});

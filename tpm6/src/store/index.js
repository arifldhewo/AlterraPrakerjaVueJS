import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newsArr: [],
  },
  getters: {},
  mutations: {
    setNews(state, response) {
      state.newsArr.push(response.articles);
    },
  },
  actions: {
    triggerNewsApiFetch({ commit }) {
      axios
        .get("/v2/everything?q=Rockstar", {
          baseURL: "https://newsapi.org",
          headers: { Authorization: "e55b64bfa0714114980a0c2c8b1968d4" },
        })
        .then((response) => {
          commit("setNews", response.data);
        });
    },
  },
  modules: {},
});

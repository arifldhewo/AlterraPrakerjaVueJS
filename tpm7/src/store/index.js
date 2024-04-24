import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newsList: [],
  },
  getters: {},
  mutations: {
    addNews(state, news) {
      state.newsList.push(news.data.articles);
    },
  },
  actions: {
    async triggerAddNews({ commit }) {
      await axios
        .get("/v2/everything?q=Rockstar&language=en", {
          baseURL: "https://newsapi.org",
          headers: { Authorization: "e55b64bfa0714114980a0c2c8b1968d4" },
        })
        .then((response) => {
          commit("addNews", response);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  modules: {},
});

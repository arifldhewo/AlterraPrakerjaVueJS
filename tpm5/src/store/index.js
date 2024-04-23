import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: {},
  },
  getters: {},
  mutations: {
    pushTodo(state, todo) {
      state.todoList.push(todo);
    },
    deleteItem(state, buttonId) {
      state.todoList.splice(buttonId, 1);
    },
    editItem(state, todoEdited) {
      state.todoList[todoEdited[1]] = todoEdited[0];
    },
  },
  actions: {
    triggerPushTodo({ commit }, todo) {
      commit("pushTodo", todo);
    },
    triggerDeleteItem({ commit }, buttonId) {
      commit("deleteItem", buttonId);
    },
    triggerEditItem({ commit }, todoEdited) {
      commit("editItem", todoEdited);
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});

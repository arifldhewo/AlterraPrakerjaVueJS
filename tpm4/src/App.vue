<template>
  <div id="app">
    <div class="container">
      <div class="box">
        <HeaderTodoList :text="HeaderText"></HeaderTodoList>
        <AddTodoList
          :textPlaceholder="inputTodoPlaceholder"
          @update-todo="pushTodo"
          :isShowingError="isShowingError"
        ></AddTodoList>
        <GreatTodo v-if="isListMoreThanFour"></GreatTodo>
        <ResultTodo
          :cancelSave="isShowingEdit"
          :resultArr="todoList"
          @trigger-delete="deleteItem"
          @trigger-edit="editItem"
        ></ResultTodo>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import HeaderTodoList from "./components/HeaderTodoList.vue";
import AddTodoList from "./components/AddTodoList.vue";
import GreatTodo from "./components/GreatTodo.vue";
import ResultTodo from "./components/ResultTodo.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    HeaderTodoList,
    AddTodoList,
    GreatTodo,
    ResultTodo,
  },
  data() {
    return {
      inputTodoPlaceholder: "Write your own todo list",
      HeaderText: "Todo List",
      todoList: [],
      isShowingError: false,
      isShowingEdit: false,
    };
  },
  methods: {
    pushTodo(todo) {
      if (!todo) {
        this.isShowingError = true;
      } else {
        const trimmed = todo.trim();

        this.todoList.push(trimmed);

        this.isShowingError = false;
      }
    },
    deleteItem(buttonId) {
      this.todoList.splice(buttonId, 1);
    },
    editItem(todoEdited) {
      this.todoList[todoEdited[1]] = todoEdited[0];
    },
  },
  computed: {
    isListMoreThanFour() {
      return this.todoList.length >= 4;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  justify-content: center;
}
</style>

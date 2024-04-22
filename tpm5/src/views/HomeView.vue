<template>
  <div id="app">
    <div class="container">
      <div class="box">
        <HeaderTodoList :text="HeaderText"></HeaderTodoList>
        <AddTodoList :textPlaceholder="inputTodoPlaceholder"></AddTodoList>
        <GreatTodo v-if="isListMoreThanFour"></GreatTodo>
        <ResultTodo></ResultTodo>
      </div>
    </div>
  </div>
</template>

<script>
import AddTodoList from "@/components/AddTodoList.vue";
import GreatTodo from "@/components/GreatTodo.vue";
import HeaderTodoList from "@/components/HeaderTodoList.vue";
import ResultTodo from "@/components/ResultTodo.vue";

export default {
  name: "App",
  components: {
    HeaderTodoList,
    AddTodoList,
    GreatTodo,
    ResultTodo,
  },
  data() {
    return {
      inputTodoPlaceholder: "Write your own todo list",
      HeaderText: "Todo List",
    };
  },
  computed: {
    isListMoreThanFour() {
      return this.$store.state.todoList.length >= 4;
    },
  },
};
</script>

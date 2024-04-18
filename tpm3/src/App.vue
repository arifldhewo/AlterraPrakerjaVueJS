<!-- Arif Laksonodhewo -->

<template>
  <div id="app">
    <h1>Todo List</h1>
    <input v-model="todo" type="text" />
    <button @click="submitTodoList">Save Me</button>
    <div v-if="todoEmpty">Tidak Boleh Kosong</div>
    <div>
      <ol>
        <li v-for="todo in todoList" v-bind:key="todo">{{ todo }}</li>
      </ol>
    </div>
    <div v-if="isListMoreThanFour">Hebat!</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      todo: "",
      todoList: [],
      todoEmpty: false,
    };
  },
  methods: {
    submitTodoList: function () {
      if (this.todo.length) {
        this.todoList.push(this.todo);

        this.todo = "";

        this.todoEmpty = false;
      } else {
        this.todoEmpty = true;
      }
    },
  },
  computed: {
    isListMoreThanFour: function () {
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
</style>

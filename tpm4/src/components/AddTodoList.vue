<template>
  <div>
    <label class="d-block" for="inputTodoList">Todo:</label>
    <input
      id="inputTodoList"
      type="text"
      v-model="todo"
      :placeholder="textPlaceholder"
      @keyup.enter="pushTodo"
    />
    <div v-if="isShowingError" style="color: red">Field Required</div>
    <button @click="pushTodo">Save Me</button>
  </div>
</template>

<script>
export default {
  name: "AddTodoList",
  props: {
    textPlaceholder: String,
    isShowingError: Boolean,
  },
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    pushTodo() {
      this.$emit("update-todo", this.todo);

      this.todo = "";
    },
  },
};
</script>

<style scoped>
.d-block {
  display: block;
}
</style>

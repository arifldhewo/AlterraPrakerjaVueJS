<template>
  <div>
    <label class="d-block" for="inputTodoList">Todo:</label>
    <input
      style="width: 94%"
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
  },
  data() {
    return {
      todo: "",
      isShowingError: false,
    };
  },
  methods: {
    pushTodo() {
      if (!this.todo) {
        this.isShowingError = true;
      } else {
        const trimmed = this.todo.trim();

        this.$store.dispatch("triggerPushTodo", trimmed);

        this.isShowingError = false;
      }

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

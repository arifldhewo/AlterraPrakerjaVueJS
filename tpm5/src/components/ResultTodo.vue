<template>
  <div>
    <ol>
      <li
        v-for="(todo, index) in this.$store.state.todoList"
        :key="index"
        :id="`${index}`"
      >
        <template v-if="isShowing(index, indexButton)">
          <div>
            <input type="text" :placeholder="todo" v-model="todoEdit" />
            <button @click="editItem(index)">Save Me</button>
            <button @click="deleteItem(index)" :id="index">Hapus</button>
          </div>
        </template>

        <template v-else>
          <div>
            <router-link :to="`/edit/${index}`">{{ todo }}</router-link>
            <button @click="toggleEdit(index)" :id="index">Edit</button>
            <button @click="deleteItem(index)" :id="index">Hapus</button>
          </div>
        </template>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "ResultTodo",
  props: {
    cancelSave: {
      type: Boolean,
    },
  },
  data() {
    return {
      todoEdit: "",
      indexButton: -1,
    };
  },
  methods: {
    deleteItem(buttonId) {
      this.$store.dispatch("triggerDeleteItem", buttonId);
    },
    editItem(buttonId) {
      this.$store.dispatch("triggerEditItem", [this.todoEdit, buttonId]);

      this.indexButton = -1;
    },
    toggleEdit(buttonId) {
      this.indexButton = buttonId;
    },
    isShowing(index, buttonId) {
      return index == buttonId ? true : false;
    },
  },
};
</script>

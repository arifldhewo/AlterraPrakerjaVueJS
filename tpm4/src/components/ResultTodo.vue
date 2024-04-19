<template>
  <div>
    <ol>
      <li v-for="(todo, index) in resultArr" :key="index" :id="`list${index}`">
        <template v-if="isShowing(index, indexButton)">
          <div>
            <input type="text" :placeholder="todo" v-model="todoEdit" />
            <button @click="editItem(index)">Save Me</button>
            <button @click="deleteItem(index)" :id="index">Hapus</button>
          </div>
        </template>

        <template v-else>
          <div>
            {{ todo }}
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
    resultArr: {
      type: Array,
    },
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
      this.$emit("trigger-delete", buttonId);
    },
    editItem(buttonId) {
      this.$emit("trigger-edit", [this.todoEdit, buttonId]);

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

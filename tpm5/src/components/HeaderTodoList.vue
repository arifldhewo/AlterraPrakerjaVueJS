<template>
  <h1>{{ text }}</h1>
</template>

<script>
export default {
  name: "HeaderTodoList",
  props: {
    text: String,
  },
};
</script>

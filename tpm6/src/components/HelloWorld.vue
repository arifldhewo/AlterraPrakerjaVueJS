<template>
  <div class="responsive">
    <div v-for="(news, index) in this.$store.state.newsArr[0]" :key="index">
      <a :href="news.url">
        <img :src="news.urlToImage" alt="image" />
        <p>Author: {{ news.author }}</p>
        <h1>
          {{ news.title }}
        </h1>
        <p>Published : {{ news.publishedAt }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    fetchNewsFromState() {
      this.$store.dispatch("triggerNewsApiFetch");
    },
  },
  mounted() {
    this.fetchNewsFromState();
  },
  computed: {
    consoleLogAPI() {
      console.log(this.$store.state.newsArr);
      return true;
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.items-center {
  align-items: center;
}

img {
  width: 100%;
}

.responsive {
  background: #3333;
  display: grid;
  grid-template-columns: auto;
}

@media only screen and (min-width: 768px) {
  .responsive {
    grid-template-columns: auto auto;
  }
}

@media only screen and (min-width: 1280px) {
  .responsive {
    grid-template-columns: auto auto auto;
  }
}
</style>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
          v-if="isLoading"
          style="height: 100%"
          loading
          variant="tonal"
          class="mt-5 d-flex justify-center"
        >
          <v-card-title>Please Wait While Getting Data</v-card-title>
          <v-card-actions>
            <v-btn loading>Loading</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col v-for="(news, index) in newsList[0]" :key="index" sm="6" lg="3">
        <v-card
          @click="goToDetail(index)"
          v-if="!isLoading"
          style="height: 100%; cursor: pointer"
          variant="tonal"
          class="mt-5"
        >
          <v-img :src="news.urlToImage"></v-img>
          <v-card-title>{{ news.title }}</v-card-title>
          <v-card-subtitle> {{ news.publishedAt }} </v-card-subtitle>
          <v-card-text> {{ news.description }}</v-card-text>
          <v-card-actions>
            <v-btn @click="goToDetail(index)">see detail</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      newsList: this.$store.state.newsList,
      isLoading: true,
    };
  },
  methods: {
    loadNews() {
      this.$store.dispatch("triggerAddNews").then(() => {
        this.isLoading = false;
      });
    },
    goToDetail(id) {
      this.$router.push(`/detail/${id}`);
    },
  },
  mounted() {
    this.loadNews();
  },
};
</script>

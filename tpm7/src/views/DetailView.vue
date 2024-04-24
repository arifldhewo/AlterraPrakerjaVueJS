<template>
  <v-container>
    <v-row class="d-flex justify-center mt-5">
      <div>
        <v-btn @click="goBackToNewsPage"> Back </v-btn>
      </div>
      <v-col cols="12" lg="6" v-if="isLoading">
        <v-card
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
      <v-col cols="12" lg="6" v-if="!isLoading">
        <v-card
          v-for="(news, index) in newsDetail"
          :key="index"
          style="height: 100%"
          variant="tonal"
        >
          <v-img :src="news.urlToImage"></v-img>
          <v-card-title> {{ news.title }} </v-card-title>
          <v-card-subtitle> {{ news.publishedAt }} </v-card-subtitle>
          <v-card-text>
            {{ news.description }}
          </v-card-text>
          <v-card-actions>
            <v-btn :href="news.url">go to source</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DetailView",
  data() {
    return {
      newsDetail: [],
      paramId: this.$route.params.id,
      isLoading: true,
    };
  },
  methods: {
    getDetail() {
      this.$store.dispatch("triggerAddNews").then(() => {
        this.newsDetail.push(this.$store.state.newsList[0][this.paramId]);

        this.isLoading = false;
      });
    },
    goBackToNewsPage() {
      this.$router.push("/");
    },
  },
  mounted() {
    this.getDetail();
  },
};
</script>

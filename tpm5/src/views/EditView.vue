<template>
  <div>
    <button @click="goBack">Kembali</button>
    <h1>Edit Page</h1>
    <div>
      <p v-if="isEdited">Belum Ada Deskripsi Nih!!!</p>
      <input v-if="!isEdited" type="text" />
    </div>
    <button @click="isEditActiveToggle()">Ubah Deskripsi</button>
  </div>
</template>

<script>
export default {
  name: "EditView",
  data() {
    return {
      isEdited: false,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    isEditActiveToggle() {
      this.isEdited = !this.isEdited;
    },
  },
};
</script>

<template>
  <div>
    <button @click="goBack">Kembali</button>
    <h1>Edit Page</h1>
    <div v-if="!isEdited">
      <div v-if="!statusValue">
        <p>Belum Ada Deskripsi Nih!!!</p>
        <button @click="isEditActiveToggle()">Ubah Deskripsi</button>
      </div>
      <div v-if="statusValue">
        <p>{{ descValue }}</p>
        <button @click="isEditActiveToggle()">Ubah Deskripsi</button>
      </div>
    </div>
    <div v-if="isEdited">
      <input style="margin-bottom: 13px" type="text" v-model="descValue" />
      <button @click="changeValueDescription()">Save Me</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditView",
  data() {
    return {
      isEdited: false,
      descValue: "",
      statusValue: false,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    isEditActiveToggle() {
      this.isEdited = !this.isEdited;
    },
    changeValueDescription() {
      this.statusValue = 1;

      this.isEdited = !this.isEdited;
    },
  },
};
</script>

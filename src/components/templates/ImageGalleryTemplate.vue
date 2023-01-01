<template>
<div class="imageContainer">
    <img class="image" :src="imageUrl" :alt="imageAlt" :title="title"/>
    <div class="imageTitle">{{ title }}</div>
    <div class="imageText">{{ text }}</div>
</div>
</template>
<script>
export default {
  props: {
    id: {
      default: 0,
      type: Number,
    },
    imageUrl: {
      default: "",
      type: String,
    },
    imageAlt: {
      default: "",
      type: String,
    },
    title: {
      default: "",
      type: String,
    },
    text: {
      default: "",
      type: String,
    }
  }
}
</script>
<style scoped>
.imageTitle {}
.imageText {}
.imageContainer {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 48%;
}
.imageContainer {
  border: 1px solid #777;
}
.image {
  width: 100%;
  height: auto;
}
</style>

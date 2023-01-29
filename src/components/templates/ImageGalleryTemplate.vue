<template>
  <div class="imageContainer">
    <img class="image" :src="imgsrc" :alt="imgalt" :title="title" />
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
    imgsrc: {
      default: "",
      type: String,
    },
    imgalt: {
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
    },
  },
};
</script>
<style scoped>
.imageTitle {
  font-weight: bold;
  padding-block: 10px;
  text-align: center;
}
.imageText {
  font-weight: b;
  text-align: center;
}
.imageContainer {
  margin: 25px;
  border: 1px solid #ccc;
  width: 20%;
  padding: 20px;
  display: inline-block;
}
.imageContainer {
  border: 1px solid #777;
}
.image {
  width: 100%;
  height: auto;
}
</style>

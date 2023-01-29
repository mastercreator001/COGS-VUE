<template>
  <li class="cofe-padding-12" v-on:click="itemClicked">
    <img
      :src="imgsrc"
      :title="imgalt"
      :alt="imgalt"
      class="cofe-left cofe-margin-right"
      style="width: 90px"
    />
    <span class="cofe-large">
      <strong>{{ title }}</strong>
    </span>
    <br />
    <span>{{ text }}</span>
  </li>
</template>
<script>
export default {
  props: {
    id: {
      default: 0,
      type: Number,
    },
    title: {
      default: "",
      type: String,
    },
    text: {
      default: "",
      type: String,
    },
    imgsrc: {
      default: "",
      type: String,
    },
    imgalt: {
      default: "",
      type: String,
    },
  },
  methods: {
    itemClicked() {
      console.log(this.title);
      this.$router.push("/Posts/" + this.id);
    },
  },
};
</script>

<template>
  <div class="cofe-container" style="margin-top: 10px">
    <div class="cofe-container cofe-padding cofe-black">
      {{ image.title }}
    </div>
    <img :src="image.imgsrc" :alt="image.imgalt" :title="image.imgalt" />
    <div class="cofe-container cofe-padding cofe-white">
      {{ image.text }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: {},
    };
  },
  mounted() { 
    this.images = this.$store.state["imagesStore"].images;
    var filterimage = this.images.filter(
      (image) => image.id.toString() === this.$route.params.id
    );
    if (filterimage.length > 0) {
      this.image = filterimage[0];
    }
    console.log(this.image);
  },
};
</script>

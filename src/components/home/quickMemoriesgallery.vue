<template>
  <hr />
  <div class="cofe-container">
    <div class="cofe-padding cofe-black">
      <h4>Quick Memories Gallery</h4>
    </div>
    <ul class="cofe-ul cofe-hoverable cofe-white">
      <ImageGalleryTemplate
        v-for="image in images"
        :key="image.id"
        :title="image.title"
        :text="image.text"
        :imgsrc="image.imgsrc"
        :imgalt="image.imgalt"
      />
    </ul>
  </div>
</template>

<script>
import ImageGalleryTemplate from "../templates/ImageGalleryTemplate.vue";
export default {
  components: {
    ImageGalleryTemplate,
  },
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    console.log(this.$store.state["imagesStore"].images);
    this.images = this.$store.state["imagesStore"].images;
  },
};
</script>

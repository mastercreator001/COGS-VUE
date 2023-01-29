<template>
  <div class="cofe-container" style="margin-top: 10px">
    <div class="cofe-padding cofe-black">
      <h4>Images</h4>
    </div>
    <ul class="cofe-ul cofe-hoverable cofe-white">
      <ImageGalleryTemplate
        v-for="image in images"
        :key="image.id"
        :title="image.title"
        :text="image.text"
        :imgsrc="image.imgsrc"
        :imgalt="image.imgalt"
        @click="itemClicked(image.id)"
      />
    </ul>
  </div>
</template>
<script>
import ImageGalleryTemplate from "../components/templates/ImageGalleryTemplate.vue";
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
    this.images = this.$store.state["imagesStore"].images;
  },
  methods: {
    itemClicked(id) {
      this.$router.push("/Images/" + id);
    },
  },
};
</script>
<style>
@media (min-width: 1024px) {
  .images {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

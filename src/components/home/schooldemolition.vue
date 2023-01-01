<template>
  <div class="demolitionContainer">
    <div class="cofe-padding cofe-black">
      <h4>Popular Posts</h4>
    </div>
    <div class="galleryContainer">
      <ImageGalleryTemplate
          v-for="picture in gallery"
          :key="picture.id"
          :id="picture.id"
          :title="picture.title"
          :text="picture.text"
          :imageUrl="picture.imageUrl"
          :imageAlt="picture.imageAlt"
        />
    </div>
    <br/>
    <div>
      <h2>School Demolition Pictures</h2>
      <p>I was fortunte enough or should I say unfortunate enough to have some time off in October and visited the school daily during the demolition phase. As sad as it was to see the school fall it was comforting to capture on camera the fall of an old friend.</p>
    </div>
  </div>
</template>
<script>
import ImageGalleryTemplate from "../templates/ImageGalleryTemplate.vue";
export default {
  components: {
    ImageGalleryTemplate
  },
  data() {
    return {
      gallery: [
        {
          id: 1,
          title: "",
          text: "",
          imageUrl: "/schooldemolition/received_213994836394223.jpeg",
          imageAlt: ""
        },
        {
          id: 2,
          title: "",
          text: "",
          imageUrl: "/schooldemolition/received_194563705096290.jpeg",
          imageAlt: ""
        },
        {
          id: 3,
          title: "",
          text: "",
          imageUrl: "/schooldemolition/received_205185620839955.jpeg",
          imageAlt: ""
        },
        {
          id: 4,
          title: "",
          text: "",
          imageUrl: "/schooldemolition/received_189733305615043.jpeg",
          imageAlt: ""
        },
      ]
    }
  }
}
</script>
<style scoped>
.demolitionContainer {background-color: white; display: inline-block;}
.galleryContainer {display: inline-block;}
</style>

<template>
  <div class="cofe-container">
    <div class="cofe-padding cofe-black">
      <h4>Popular Posts</h4>
    </div>
    <ul class="cofe-ul cofe-hoverable cofe-white">
      <PopularPostItem
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :text="post.text"
        :imgsrc="post.thumbnailsrc"
        :imgalt="post.imgalt"
      />
    </ul>
  </div>
</template>
<script>
import PopularPostItem from "../templates/PopularPostItem.vue";
export default {
  components: {
    PopularPostItem,
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.posts = this.$store.state["postsStore"].posts;
  },
};
</script>

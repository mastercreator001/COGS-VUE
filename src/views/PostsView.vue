<template>
  <div class="cofe-container" style="margin-top: 10px">
    <div class="cofe-padding cofe-black">
      <h4>Posts</h4>
    </div>
    <ul class="cofe-ul cofe-hoverable cofe-white">
      <PopularPostItem
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :text="post.text"
        :imgsrc="post.imgsrc"
        :imgalt="post.imgalt"
      />
    </ul>
  </div>
</template>
<script>
import PopularPostItem from "../components/templates/PopularPostItem.vue";
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
<style>
@media (min-width: 1024px) {
  .posts {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

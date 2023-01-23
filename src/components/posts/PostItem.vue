<template>
  <div class="cofe-container" style="margin-top: 10px">
    <div class="cofe-container cofe-padding cofe-black">
      {{ post.title }}
    </div>
    <img :src="post.imgsrc" :alt="post.imgalt" :title="post.imgalt" />
    <div class="cofe-container cofe-padding cofe-white">
      {{ post.text }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
    };
  },
  mounted() {
    this.posts = this.$store.state["postsStore"].posts;
    var filterPost = this.posts.filter(
      (post) => post.id.toString() === this.$route.params.id
    );
    if (filterPost.length > 0) {
      this.post = filterPost[0];
    }
      console.log(this.post)
  },
};
</script>

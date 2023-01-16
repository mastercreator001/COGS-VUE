<template>
  <div class="cofe-container" style="margin-top: 10px">
    <div class="cofe-container cofe-padding cofe-black">
      {{ post.title }}
    </div>
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
    console.log(this.$route.params.id);
    this.posts = this.$store.state["postsStore"].posts;
    var filterPost = this.posts.filter(
      (post) => post.id.toString() === this.$route.params.id
    );
    if (filterPost.length > 0) {
      this.post = filterPost[0];
    }
    console.log(filterPost);
  },
};
</script>

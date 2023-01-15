<template>
  <div class="cofe-container">
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
import { mapGetters } from "vuex";
export default {
  components: {
    PopularPostItem
  },
  data() {
    return {
      posts: []
    };
  },
  computed: {
    ...mapGetters([
      'getAllPosts'
    ])
  },
  mounted() {
    this.posts = this.getAllPosts();
  }
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
  
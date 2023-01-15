<template>
    <div class="cofe-container cofe-padding cofe-black">
        {{ post.title }}
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
 data() {
    return {
      post: {}
    };
  },
  computed: {
    ...mapGetters([
      'getPostById'
    ])
  },
  mounted() {
    this.post = this.getPostById(1)
  }
};
</script>
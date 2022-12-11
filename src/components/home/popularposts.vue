<template>
    <div class="cofe-container cofe-padding cofe-black">
      <h4>Popular Posts</h4>
    </div>
    <ul class="cofe-ul cofe-hoverable cofe-white">
      <PopularPosts
        v-for="post in posts"
        :key="post.title"
        :title="post.title"
        :text="post.text"
        :imgsrc="post.imgsrc"
        :imgalt="post.imgalt"
      />
    </ul>
</template>
  <script>
    import PopularPosts from './PopularPosts.vue'
    export default {
      components: {
        PopularPosts
      },
      data() {
        return {
          posts: [
            { title: 'Home', text: 'A Familliar view', imgsrc:'/PopularPosts/20200228_205500.jpg', imgalt: 'view of the school' },
            { title: 'Trips out', text: 'Trips with students', imgsrc:'/PopularPosts/20200504_121909.jpg', imgalt: 'school trip out' },
            { title: 'Pictures', text: 'Miss Forers class', imgsrc:'/PopularPosts/20200415_200810.jpg', imgalt: 'take2 cardwell pictures of students' },
            { title: 'Teachers', text: 'Students meet which teacher ?', imgsrc:'/PopularPosts/Lumii_20210523_085700252.jpg', imgalt: 'Image' }
          ]
        }
      }
    }
  </script>
    
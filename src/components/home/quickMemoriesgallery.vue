<template>
    <div class="cofe-container">
      <div class="cofe-padding cofe-black">
        <h4>Quick Memories Gallery</h4>
      </div>
      <ul class="cofe-ul cofe-hoverable cofe-white">
        <quickMemoriesgallery
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :text="post.text"
          :imgsrc="post.imgsrc"
          :imgalt="post.imgalt"
        />
      </ul>
    </div>
  </template>
  <script>
  import quickMemoriesgallery from "../home/quickMemoriesgallery.vue";
  export default {
    components: {
        quickMemoriesgallery
    },
    data() {
      return {
        posts: [
          {
            id: 1,
            title: "Home",
            text: "A Familiar view",
            imgsrc: "/quickMemoriesgallery/20200228_205500.jpg",
            imgalt: "view of the school",
          },
          {
            id: 2,
            title: "Trips out",
            text: "Trips with students",
            imgsrc: "/quickMemoriesgallery/20200504_121909.jpg",
            imgalt: "school trip out",
          },
          {
            id: 3,
            title: "Pictures",
            text: "Miss Forers class",
            imgsrc: "/quickMemoriesgallery/20200415_200810.jpg",
            imgalt: "take2 cardwell pictures of students",
          },
          {
            id: 4,
            title: "Teachers",
            text: "Students meet which teacher ?",
            imgsrc: "/quickMemoriesgalllery/Lumii_20210523_085700252.jpg",
            imgalt: "Image",
          },
        ],
      };
    },
  };
  </script>
  
<template>
  <hr />
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
  import quickMemoriesgallery from "../templates/PopularPostItem.vue";
  export default {
    components: {
        quickMemoriesgallery
    },
    data() {
      return {
        posts: [
          {
            id: 1,
            title: "Anyone Remember",
            text: " Name The Dog, and the owner ?",
            imgsrc: "/quickMemoriesgallery/Lumii_20210523_081022127.jpg",
            imgalt: "2 students with dog",
          },
          {
            id: 2,
            title: "Trips out",
            text: "Trips with students",
            imgsrc: "/quickMemoriesgallery/Lumii_20210523_081701844.jpg",
            imgalt: "school trip out",
          },
          {
            id: 3,
            title: "Pictures",
            text: "Miss Forers class",
            imgsrc: "dist/quickMemoriesgallery/Lumii_20210523_082432053.jpg",
            imgalt: "take2 cardwell pictures of students",
          },

          {
            id: 5,
            title: "Totland Anyone ?",
            text: "Students meet which teacher ?",
            imgsrc: "/quickMemoriesgallery/20200509_092615m.jpg",
            imgalt: "Image",
          },
            
            {  
              id: 6,
            title: "School Outing Anyone",
            text: "A Well Prepared Bunch",
            imgsrc: "/quickMemoriesgallery/20200509_092922m.jpg",
            imgalt: "school trip out,but where",
          },

          {  
              id: 7,
            title: "A Pond At School ?",
            text: "Who ever new we had a pond at school, plenty I'm sure",
            imgsrc: "/quickMemoriesgallery/20200509_092251m.jpg",
            imgalt: "School pond",
          },

          {  
              id: 8,
            title: "The team to beat",
            text: "Stunning colour fablous play",
            imgsrc: "/quickMemoriesgallery/20200509_093242m.jpg",
            imgalt: "Image",
          },

          {  
              id: 9,
            title: "The three muskateers ?",
            text: "The Mystery remains, Who? Where? and When?",
            imgsrc: "/quickMemoriesgallery/20200509_093140m.jpg",
            imgalt: "three students",
          },
        ],
      };
    },
  };
  </script>
  
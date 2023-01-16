const state = () => ({
  posts: [
    {
      id: 1,
      title: "Home",
      text: "A Familliar view",
      imgsrc: "/PopularPosts/20200228_205500.jpg",
      imgalt: "view of the school",
    },
    {
      id: 2,
      title: "Trips out",
      text: "Trips with students",
      imgsrc: "/PopularPosts/20200504_121909.jpg",
      imgalt: "school trip out",
    },
    {
      id: 3,
      title: "Pictures",
      text: "Miss Forers class",
      imgsrc: "/PopularPosts/20200415_200810.jpg",
      imgalt: "take2 cardwell pictures of students",
    },
    {
      id: 4,
      title: "Teachers",
      text: "Students meet which teacher ?",
      imgsrc: "/PopularPosts/Lumii_20210523_085700252.jpg",
      imgalt: "Image",
    },
  ],
});
const getters = {
  getPostById: (state) => (id) => {
    return state.posts.find((post) => post.id === id);
  },
  getAllPosts: (state) => {
    return state.posts;
  },
};
export default {
  namespaced: true,
  state,
  getters,
};

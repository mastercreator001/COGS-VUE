const state = () => ({
  posts: [
    {
      id: 1,
      title: "Home",
      text: "A Familliar view twist",
      thumbnailsrc: "/thumbnails/thumb20200228_205500.jpg",
      imgsrc: "/PopularPosts/20200228_205500.jpg",
      imgalt: "view of the school",
    },
    {
      id: 2,
      title: "Trips out",
      text: "Trips with students",
      thumbnailsrc: "/thumbnails/thumb20200504_121909.jpg",
      imgsrc: "/PopularPosts/20200504_121909.jpg",
      imgalt: "school trip out",
    },
    {
      id: 3,
      title: "Pictures",
      text: "Miss Forers class",
      thumbnailsrc: "/thumbnails/thumb20200415_200810.jpg",
      imgsrc: "/PopularPosts/20200415_200810.jpg",
      imgalt: "take2 cardwell pictures of students",
    },
    {
      id: 4,
      title: "Teachers",
      text: "Students meet which teacher ?",
      thumbnailsrc: "/thumbnails/thumbLumii_20210523_085700252.jpg",
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

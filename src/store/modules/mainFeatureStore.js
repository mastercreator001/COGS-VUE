const state = () => ({
  features: [
    {
      id: 1,
      title: "The School",
      subTitle: "Brief History,",
      titleDate: "Thursday 4th February 1971",
      subSubTitle: "Closed 4th May: 2009",
      mainImageSrc: "/Lumii_20210523_091220715.jpg",
      mainImageAlt: "Miss forers IMAGES",
      contentTitle: "A Loved School:",
      author: "Richard:",
      createdDate: "September 25th 2022 PM",
      authorComment:
        "Welcome back to memory corner for a brief historical tour of the old school.",
      replyCount: "1",
      paragraphs: [
        {
          id: 1,
          text: "I am crazy about this old school and it could be put down to perhaps me getting old.",
        },
        {
          id: 2,
          text: "Yes the school is no longer in existence so why get all internet about it I hear you ask ?",
        },
        {
          id: 3,
          text: "I started the Memory Corner on Facbook as a project as all of the footage I was gathering would some day be part of historical record. I failed to realise at the time that all this information needed to be appreciated for better or worse.",
        },
        {
          id: 4,
          text: "The Photos were a physical representation of my failing memory and the need to show the world, hence the group was bourne. C of E Middle School or Welly Road no matter It`s current configuration will live in our hearts forever woven into our memories and shaped our experiences at a very formulative time.",
        },
        {
          id: 5,
          text: "Hence my need to create a historical reference I do hope you like it.",
        },
      ],
    },
    {
      id: 2,
      title: "Visits Away",
      subTitle: "Days out,",
      titleDate: "Thursday 4th February 1971",
      subSubTitle: "April 7, 1985",
      mainImageSrc: "/visits away/20200509_093057.jpg",
      mainImageAlt: "Miss forers IMAGES",
      contentTitle: "",
      author: "",
      createdDate: "",
      authorComment: "",
      replyCount: "2",
      paragraphs: [
        {
          id: 1,
          text: "Did you miss! The legendary breaks from school were more of a holiday for the students and a nightmare of the the teachers, imagine looking after 30, 40 ,50 or even 60 kids who are not yours.",
        },
        {
          id: 2,
          text: "Fortuntely school trips were uniformed early in the schools history with the 1st years or year ones attending Singleton Open Air Museum. Well actually now called the Weald and Downland Open Air Experience these days, Check out the link to visit.",
        },
      ],
    },
    {
      id: 3,
      title: "Teachers",
      subTitle: "",
      titleDate: "All years, 1971-2009",
      subSubTitle: "",
      mainImageSrc: "/teachers19712009/20200218_193858.jpg",
      mainImageAlt: "Picture of signed shirts",
      contentTitle:
        "Shirts! The trend this summer is for a new term and a new year.",
      author: "Angie:",
      createdDate: "April 23, 2015, 9:12 PM",
      authorComment: "",
      replyCount: "3",
      paragraphs: [
        {
          id: 1,
          text: "Some schools are places to learn and some purely academic in structure and delivery. Wasnt C Of E Middle different in many ways, speaking to ex students over the years il be saying a big yes.",
        },
        {
          id: 2,
          text: "The students make a school the teachers make a learning instiution and the building makes it a place to attend. The culmination of all three made Welly Road more of a home. Countless times I have listened to stories read posts and been throughly impressed by te love and engagment puplis and teaches have shown for learning and cultivating a loving environment. ",
        },
      ],
    },
  ],
});
const getters = {
  getFeatureById: (state) => (id) => {
    return state.features.find((feature) => feature.id === id);
  },
  getAllFeatures: (state) => {
    return state.features;
  },
};
export default {
  namespaced: true,
  state,
  getters,
};

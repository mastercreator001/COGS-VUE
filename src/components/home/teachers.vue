<template>
  <FeatureTemplate
    title="Teachers"
    subTitle=""
    titleDate="All years, 1971-2009"
    subSubTitle=""
    mainImageSrc="/teachers19712009/20200218_193858.jpg"
    mainImageAlt="Picture of signed shirts"
    contentTitle="Shirts! The trend this summer is for a new term and a new year."
    author="Angie:"
    createdDate="April 23, 2015, 9:12 PM"
    authorComment=""
    replyCount="3"
    :paragraphs="[
      {
        id: 1,
        text: 'Some schools are places to learn and some purely academic in structure and delivery. Wasnt C Of E Middle different in many ways, speaking to ex students over the years il be saying a big yes.',
      },
      {
        id: 2,
        text: 'The students make a school the teachers make a learning instiution and the building makes it a place to attend. The culmination of all three made Welly Road more of a home. Countless times I have listened to stories read posts and been throughly impressed by te love and engagment puplis and teaches have shown for learning and cultivating a loving environment. ',
      },
    ]"
  ></FeatureTemplate>
</template>
<script>
import FeatureTemplate from "../templates/FeatureTemplate.vue";
export default {
  components: {
    FeatureTemplate
  },
};
</script>

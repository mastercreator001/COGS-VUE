<template>
  <FeatureTemplate
    title="Visits Away"
    subTitle="Days out,"
    titleDate="Thursday 4th February 1971"
    subSubTitle="April 7, 1985"
    mainImageSrc="/visits away/20200509_093057.jpg"
    mainImageAlt="Miss forers IMAGES"
    replyCount="2"
    :paragraphs="[
      {
        id: 1,
        text: 'Did you miss! The legendary breaks from school were more of a holiday for the students and a nightmare of the the teachers, imagine looking after 30, 40 ,50 or even 60 kids who are not yours.',
      },
      {
        id: 2,
        text: 'Fortuntely school trips were uniformed early in the schools history with the 1st years or year ones attending Singleton Open Air Museum. Well actually now called the Weald and Downland Open Air Experience these days, Check out the link to visit.',
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

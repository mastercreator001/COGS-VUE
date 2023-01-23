<template>
  <FeatureTemplate
    v-for="feature in features"
    :key="feature.id"
    :id="feature.id"
    :title="feature.title"
    :subTitle="feature.subTitle"
    :titleDate="feature.titleDate"
    :subSubTitle="feature.subSubTitle"
    :mainImageSrc="feature.mainImageSrc"
    :mainImageAlt="feature.mainImageAlt"
    :contentTitle="feature.contentTitle"
    :author="feature.author"
    :createdDate="feature.createdDate"
    :authorComment="feature.authorComment"
    :replyCount="feature.replyCount"
    :paragraphs="feature.paragraphs"
  />
</template>
<script>
import FeatureTemplate from "../templates/FeatureTemplate.vue";
export default {
  components: {
    FeatureTemplate,
  },
  data() {
    return {
      features: [],
    };
  },
  mounted() {
    this.features = this.$store.state["mainFeatureStore"].features;
  },
};
</script>

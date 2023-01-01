<template>
  <div class="cofe-col l8 s12">
    <div class="cofe-container cofe-white cofe-margin cofe-padding-large">
      <div class="cofe-center">
        <h3>{{ title }}</h3>
        <h5>
          {{ subTitle }}
          <span class="cofe-opacity">{{ titleDate }}</span>
        </h5>
        <span class="cofe-opacity">{{ subSubTitle }}</span>
      </div>

      <div class="cofe-justify">
        <img
          :src="mainImageSrc"
          :alt="mainImageAlt"
          :title="mainImageAlt"
          style="width: 100%"
          class="cofe-padding-16"
        />
        <p>
          <strong>{{ contentTitle }}</strong>
        </p>
        <p
          class="feature-paragraph"
          v-for="paragraph in paragraphs"
          :key="paragraph.id"
        >
          {{ paragraph.text }}
        </p>
        <p class="cofe-left">
          <button
            class="cofe-button cofe-white cofe-border"
            onclick="likeFunction(this)"
          >
            <b><i class="fa fa-thumbs-up"></i> Like</b>
          </button>
        </p>
        <p class="cofe-right">
          <button
            class="cofe-button cofe-black"
            onclick="myFunction('demo1')"
            id="myBtn"
          >
            <b>Replies &nbsp;</b>
            <span class="cofe-tag cofe-white">{{ replyCount }}</span>
          </button>
        </p>
        <p class="cofe-clear"></p>
        <div
          class="cofe-row cofe-margin-bottom cofe-show"
          id="demo1"
          style="display: none"
        >
          <hr />
          <div class="cofe-col l10 m9">
            <h4>
              {{ author }}
              <span class="cofe-opacity cofe-medium">{{ createdDate }}</span>
            </h4>
            <p>{{ authorComment }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      default: 0,
      type: Number,
    },
    title: {
      default: "",
      type: String,
    },
    subTitle: {
      default: "",
      type: String,
    },
    titleDate: {
      default: "",
      type: String,
    },
    subSubTitle: {
      default: "",
      type: String,
    },
    mainImageSrc: {
      default: "",
      type: String,
    },
    mainImageAlt: {
      default: "",
      type: String,
    },
    contentTitle: {
      default: "",
      type: String,
    },
    paragraphs: {
      default() {
        return {};
      },
      type: Object,
    },
    replyCount: {
      default: 0,
      type: Number,
    },
    author: {
      default: "",
      type: String,
    },
    createdDate: {
      default: "",
      type: String,
    },
    authorComment: {
      default: "",
      type: String,
    },
  },
};
</script>
<style scoped>
.feature-paragraph {
  margin: 10px 0 5px 0;
  line-height: 1.4em;
}
</style>

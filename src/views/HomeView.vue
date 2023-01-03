<script setup>
import TopSection from "../components/home/TopSection.vue";
import PictureFeature from "../components/home/PictureFeature.vue";
import HeadTeachers from "../components/home/HeadTeachers.vue";
import PopularPosts from "../components/home/PopularPosts.vue";
import quickMemoriesgallery from "../components/home/quickMemoriesgallery.vue";
import QuickAccess from "../components/common/QuickAccess.vue";
import schooldemolition2 from "../components/home/schooldemolition.vue";
import visitsaway from "../components/home/visitsaway.vue";
import followme from "../components/common/followme/contact.vue";
import subscribe from "../components/common/subscribe.vue";
import emaillink from "../components/common/emaillink.vue";
import siteFooter from "../components/common/siteFooter.vue";
import teachers from "../components/home/teachers.vue";
import secondsVue from "../components/home/seconds.vue";
</script>

<template>
  <main>
    <TopSection />
  </main>
  <div class="content">
    <PictureFeature />
    <div class="side">
      <HeadTeachers />
      <PopularPosts />
      <quickMemoriesgallery />
    </div>
    <teachers />
    <visitsaway />
  </div>
  <div class="bottom">
    <QuickAccess />
    <schooldemolition2 />
    <br />
    <followme />
    <br />
    <subscribe />
    <emaillink />
    <br />
  </div>
  <siteFooter />
</template>

<style scoped>
.content {
  padding: 8px 8px;
  background-color: #ccc;
  border: 1px solid #ccc;
  width: 100%;
  display: inline-block;
}
.side {
  width: 33%;
  display: inline-block;
}
.bottom {
  background-color: #ccc;
  border: 1px solid #ccc;
  padding: 0 20px;
}
</style>

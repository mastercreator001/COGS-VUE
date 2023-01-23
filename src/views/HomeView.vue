<script setup>
import TopSection from "../components/home/TopSection.vue";
import HeadTeachers from "../components/home/HeadTeachers.vue";
import popularPosts from "../components/home/popularPosts.vue";
import quickMemoriesgallery from "../components/home/quickMemoriesgallery.vue";
import QuickAccess from "../components/common/QuickAccess.vue";
import schoolDemolition from "../components/home/schoolDemolition.vue";
import followme from "../components/common/followme/contact.vue";
import subscribe from "../components/common/subscribe.vue";
import emaillink from "../components/common/emaillink.vue";
import siteFooter from "../components/common/siteFooter.vue";
import cookingClass from "../components/home/cookingClass.vue";
import mainFeatures from "../components/home/mainFeatures.vue";
</script>

<template>
  <main>
    <TopSection />
  </main>
  <div class="content">
    <mainFeatures />
    <div class="side">
      <HeadTeachers />
      <popularPosts />
    </div>
    <quickMemoriesgallery />
    <cookingClass />
  </div>
  <div class="bottom">
    <QuickAccess />
    <schoolDemolition />
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
@media only screen and (max-width: 992px) {
  .side {
    width: 100%;
  }
}
</style>

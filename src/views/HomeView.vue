<script setup>
import TopSection from '../components/home/TopSection.vue'
import PictureFeature from '../components/home/PictureFeature.vue'
import HeadTeachers from '../components/home/HeadTeachers.vue'
import PopularPosts from '../components/home/PopularPosts.vue'
import QuickAccess from '../components/common/QuickAccess.vue'
import schooldemolition2 from '../components/home/schooldemolition.vue'
import visitsaway from '../components/home/visitsaway.vue'
import followme from '../components/common/followme/contact.vue'
import subscribe from '../components/common/subscribe.vue'
import emaillink from '../components/common/emaillink.vue'
import footer from '../components/common/footer.vue'
import teachers1971to2009 from '../components/home/teachers19712009.vue'
import FeatureTemplateVue from '../components/home/FeatureTemplate.vue'

</script>

<template>
  <main>
    <TopSection />
  </main>
  <div class="content">
    <feature-template/>
    <PictureFeature />
    <HeadTeachers />
  </div>
  <PopularPosts/>
  <QuickAccess />
<schooldemolition2/>
<teachers1971to2009/>
<visitsaway/>
<followme/>
<subscribe/>
<emaillink/>
<footer/>
</template>

<style scoped>
.content {
  padding: 8px 16px;
  background-color: #ccc;
  border: 1px solid #ccc;
  width: 100%;
  display: flex;
}
</style>

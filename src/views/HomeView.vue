<script setup>
import TopSection from '../components/home/TopSection.vue'
import PictureFeature from '../components/home/PictureFeature.vue'
import HeadTeachers from '../components/home/HeadTeachers.vue'
import popularposts from '../components/home/popularposts.vue'
import QuickAccess from '../components/common/QuickAccess.vue'
import schooldemolition from '../components/home/school demolition.vue'
import visitsaway from '../components/home/visitsaway.vue'
import followme from '../components/common/followme/contact.vue'
import subscribe from '../components/common/subscribe.vue'
import emaillink from '../components/common/emaillink.vue'
import footer from '../components/common/footer.vue'
import teachers19712009Vue from '../components/home/teachers1971-2009.vue'
</script>

<template>
  <main>
    <TopSection />
  </main>
  <content>
    <PictureFeature />
    <HeadTeachers />
  </content>
  <popularposts/>
  <QuickAccess />
<schooldemolition/>
<teachers-1971-2009/>
<visitsaway/>
<followme/>
<subscribe/>
<emaillink/>
<footer/>
</template>

<style scoped>
content {
  padding: 8px 16px;
  background-color: #ccc;
  border: 1px solid #ccc;
  width: 100%;
  display: flex;
}
</style>

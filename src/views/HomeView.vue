<script setup>
import TopSection from '../components/home/TopSection.vue'
import PictureFeature from '../components/home/PictureFeature.vue'
import HeadTeachers from '../components/home/HeadTeachers.vue'
</script>

<template>
  <main>
    <TopSection />
  </main>
  <content>
    <PictureFeature />
    <HeadTeachers />
  </content>
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

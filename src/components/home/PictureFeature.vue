<template>
  <FeatureTemplate
    title="The School"
    subTitle="Brief History,"
    titleDate="Thursday 4th February 1971"
    subSubTitle="Closed 4th May: 2009"
    mainImageSrc="/Lumii_20210523_091220715.jpg"
    mainImageAlt="Miss forers IMAGES"
    contentTitle="A Loved School:"
    Richardtitle="Richard:"
    titledate2="September 25th 2022 PM"
    wtbtmc="Welcome back to memory corner"
    :paragraphs="[{id:1, text:'I am crazy about this old school and it could be put down to perhaps me getting old.'},{id:2,text:'Yes the school is no longer in existence so why get all internet about it I hear you ask ?'}, {id:3, text:'I started the Memory Corner on Facbook as a project as all of the footage I was gathering would some day be part of historical record. I failed to realise at the time that all this information needed to be appreciated for better or worse.'},{id:4,text:'The Photos were a physical representation of my failing memory and the need to show the world, hence the group was bourne. C of E Middle School or Welly Road no matter It`s current configuration will live in our hearts forever woven into our memories and shaped our experiences at a very formulative time.'},{id:5,text:'Hence my need to create a historical reference I do hope you like it.'}]"
  ></FeatureTemplate>
</template>
<script>
  import FeatureTemplate from './FeatureTemplate.vue'
  export default {
    components: {
      FeatureTemplate
    }
  }
</script>
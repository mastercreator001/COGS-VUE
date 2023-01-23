<template>
  <div class="demolitionContainer">
    <div class="cofe-padding cofe-black">
      <h4> The School's Demolition</h4>
    </div>
    <div class="galleryContainer">
      <ImageGalleryTemplate
          v-for="picture in gallery"
          :key="picture.id"
          :id="picture.id"
          :title="picture.title"
          :text="picture.text"
          :imgsrc="picture.imageUrl"
          :imgalt="picture.imageAlt"
        />
    </div>
    <br/>
    <div><hr>
    <div class="cofe-padding cofe-black" data-v-ea3345d8=""><h4 data-v-ea3345d8=""> School's Out Forever</h4>
    </div>
   
  </div>
  <div><p></p>
   I was fortunate enough or should I say unfortunate enough to have some time off in October 2019 when I visited the school daily during the demolition phase. To be perfectly honest I hadn't been in touch with the school as far as I was aware it was still being used as part of the Christ The King Campus until the subsequently I read about the arson perpetrated by persons unknown.
    
  As sad as it was to see the school fall it was comforting to capture on camera the fall of an old friend. The school was an innovation of the times and incorprated the latest building tech into it's construction including the absestos that frequented many of the buildings of the time.

   Eventually this innovation befall the school as the product and it's insultion properties proved hazadous to workers updating or renovating the building. <p></p><p></p>
  
  A sad reflection on it's innovation was it's down fall as latter implemented work controls around asbestos made amendments and improvements expensive. 
  </div>
  </div>
</template>
<script>
import ImageGalleryTemplate from "../templates/ImageGalleryTemplate.vue";
export default {
  components: {
    ImageGalleryTemplate
  },
  data() {
    return {
      gallery: [
        {
          id: 1,
          title: "Deep Into The School's Heart",
          text: "The school was cutting edge for it's time but after the school had aged and the building processs we're further developed materials previously found to be safe wern't as safe as first thought. Many schools built in the 50's 60's and 70s used asbestos, a now very damaging sustance making alterations to the school expensive.",
          imageUrl: "/schooldemolition/received_213994836394223.jpeg",
          imageAlt: " 1H gone"
        },
        {
          id: 2,
          title: "Nearly Done",
          text: "The planning and ultimate desrtuction of the school was unique as the school was dug into the hills natural incline. As to it's end and as per building regualtions the school and the foundation footings were entirely removed so as the new additon to the land was afforded the suitable foundations.",
          imageUrl: "/schooldemolition/received_194563705096290.jpeg",
          imageAlt: "Almost totally gone school"
        },
        {
          id: 3,
          title: "The Famous Steps",
          text: "An innovative way to retain the hillside while still performing a practical function for any years on the theme of a ampitheatre. And finally the steps were broke up to become the rubble foundation for another building project on anoter peiece of land.",
          imageUrl: "/schooldemolition/received_205185620839955.jpeg",
          imageAlt: "School steps"
        },
        {
          id: 4,
          title: "Nothing But Rubble ",
          text: "The End of the school was well planned as schools closed and were amalgamated but for us the trinity the loss of this school was felt particually keenly. The school transitioned from Church Of England Middle to Trinty Church Of England Middle to Christ the King College. ",
          imageUrl: "/schooldemolition/received_189733305615043.jpeg",
          imageAlt: "rubble"
        },
      ]
    }
  }
}
</script>
<style scoped>
.demolitionContainer {background-color: rgb(250, 246, 246); display: inline-block; padding-top: 50px; padding-bottom: 50px;  font-weight: normal; margin: 9px 9px 9px 9px;}
.galleryContainer {display: inline-flex; flex-wrap: wrap; flex: 22%; padding: 50px 0;  font-weight: bold; text-underline-offset: 10px;}
@media only screen and (max-width: 600px) {
  .galleryContainer {
    flex: 100%;
    background-color: aquamarine;
  }
}
</style>

<template>
  <header class="cofe-container cofe-center cofe-green">
    <img
      class="cofe-logo"
      src="/20200218_195526.jpg"
      alt="school logo"
      width="90"
      style="border: solid black 2px"
    />
    <h1 class="cofe-xxxlarge"><b>Church Of England</b></h1>
    <h6>Welcome to the blog of <span class="cofe-tag">"Welly Road"</span></h6>

    <div class="slideshow-container">
      <div class="mySlides fade" style="display: none">
        <img src="/slides/20200509_100219.jpg" class="slideImage" />
        <div class="numbertext">1 / 8</div>
        <div class="text"></div>
      </div>

      <div class="mySlides fade" style="display: none">
        <img src="/slides/20200509_095853.jpg" class="slideImage" />
        <div class="numbertext">2 / 8</div>
        <div class="text"></div>
      </div>

      <div class="mySlides fade" style="display: none">
        <img src="/slides/20200509_095821.jpg" class="slideImage" />
        <div class="numbertext">3 / 8</div>
        <div class="text"></div>
      </div>

      <div class="mySlides fade" style="display: none">
        <img src="/slides/Lumii_20210523_080316194.jpg" class="slideImage" />
        <div class="numbertext">4 /8</div>
        <div class="text"></div>
      </div>

      <div class="mySlides fade" style="display: block">
        <img src="/slides/Lumii_20210523_083337279.jpg" class="slideImage" />
        <div class="numbertext">5 / 8</div>
        <div class="text"></div>
      </div>

      <div class="mySlides fade" style="display: none">
        <img src="/slides/Lumii_20210523_085156479.jpg" class="slideImage" />
        <div class="numbertext">6 / 8</div>
        <div class="text"></div>
      </div>

      <div class="mySlides fade" style="display: none">
        <img src="/slides/Lumii_20210523_085924491.jpg" class="slideImage" />
        <div class="numbertext">7 / 8</div>
        <div class="text"></div>
      </div>

      <div class="mySlides fade" style="display: none">
        <img src="/slides/Lumii_20210523_083139319.jpg" class="slideImage" />
        <div class="numbertext">8/ 8</div>
        <div class="text"></div>
      </div>

      <br />
      <div style="text-align: center">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      slideIndex: 0,
    };
  },
  mounted: function () {
    this.showSlides();
  },
  methods: {
    showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      this.slideIndex++;
      if (this.slideIndex > slides.length) {
        this.slideIndex = 1;
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
      setTimeout(this.showSlides, 3500); // Change image every 3 seconds
    },
    checkAccepted() {
      var checkbox = document.getElementById("mycheck");
      var text = document.getElementById("text");
      if (checkbox.checked == true) {
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
    },
  },
};
</script>
<style scoped>
.slideImage {
  width: 60%;
}
</style>

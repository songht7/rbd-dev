<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="banner" v-for="banner in banners">
        <div
          class="slide-img"
          :style="{ backgroundImage: `url(${banner})` }"
        ></div>
      </div>
    </div>
    <div
      class="swiper-pagination"
      :style="{ backgroundImage: `url(${pagBg})` }"
    ></div>
    <div class="swiper-scrollbar" slot="scrollbar"></div>
  </div>
</template>

<script>
var img1 = require("@img/slide01.jpg"),
  img2 = require("@img/slide02.jpg"),
  img3 = require("@img/slide03.jpg"),
  img4 = require("@img/slide04.jpg");
var pagination = require("@img/pagination.jpg");
export default {
  name: "SwiperSilde",
  props: [],
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        // loop: true,
        // dynamicBullets: true,
        // dynamicMainBullets: 1,
        pagination: ".swiper-pagination",
        scrollbar: ".swiper-scrollbar",
        watchSlidesProgress: true,
        autoplay: 3000,
        speed: 600,

        // pagination2: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        //   currentClass: "my-pagination-current",
        //   type: "bullets",
        //   renderBullet: function(index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + "</span>";
        //   },
        // },
      },
      pagBg: pagination,
      banners: [img1, img2, img3, img4],
    };
  },

  components: {},

  computed: {},
  mounted() {
    console.log("Current Swiper instance object", this.mySwiper);
    // this.mySwiper.slideTo(3, 1000, false);
  },
  methods: {},
};
</script>
<style scoped>
.swiper-wrapper {
  width: 100%;
  height: calc(100vw / 3);
  position: relative;
}
.slide-img {
  margin-left: 30%;
  width: 70%;
  height: 100%;
  background-color: #eee;
  background-image: none;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
.swiper-pagination {
  left: 0;
  position: absolute;
  width: 30%;
  height: 100%;
  background-image: url("/src/assets/images/pagination.jpg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100% 100%;
}
.swiper-container-vertical > .swiper-scrollbar{
  left: 3px;
  width: 30%;
}
.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet{
  width: 10px;
  border-radius: 0;
}
.swiper-pagination-bullet-active {
  width: 30px;
}
</style>

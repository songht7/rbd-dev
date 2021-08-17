<template>
  <div id="SwiperSilde">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="#"><img :src="swiperOption.imgp1"/></a>
        </div>
        <div class="swiper-slide">
          <a href="#"><img :src="swiperOption.imgp2"/></a>
        </div>
        <div class="swiper-slide">
          <a href="#"><img :src="swiperOption.imgp3"/></a>
        </div>
      </div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper, { Pagination, Navigation, Autoplay } from "swiper";
Swiper.use([Pagination, Navigation, Autoplay]);

export default {
  name: "SwiperSilde",
  props: [],
  data() {
    return {
      swiperOption: {
        imgp1: "http://www.jobpgroup.com/img/1.jpg",
        imgp2: "http://www.jobpgroup.com/img/1.jpg",
        imgp3: "http://www.jobpgroup.com/img/1.jpg",
      },
    };
  },

  components: {},

  computed: {},
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 3,
      autoplay: true,
      //修改swiper的父元素时，自动初始化swiper
      observer: true,
      //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    //鼠标移入停止轮播
    mySwiper.el.onmouseover = function() {
      mySwiper.autoplay.stop();
    };
    //鼠标移出开始轮播
    mySwiper.el.onmouseout = function() {
      mySwiper.autoplay.start();
    };
  },
  methods: {},
};
</script>
<style scoped>

body {
    background: url(/src/assets/images/bg_slide.png) no-repeat center 20px #fff;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

.swiper-container {
  margin-top: 50px;
}

.swiper-slide {
  width: 860px;
}

.swiper-slide a {
  transition: 0.2s;
}

.swiper-slide a:hover {
  opacity: 0.6;
}

.swiper-pagination {
  text-align: center;
  width: 100%;
  margin-top: 10px;
}

.swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  margin: 0 5px;
  background: #02328d;
}

.swiper-button-prev {
  width: 50%;
  height: 360px;
  left: -450px;
  top: 0;
  background: url(/src/assets/images/ichimatsu.png) repeat 0 0;
  border-radius: 5px;
  margin-top: 0;
  z-index: 99;
  transition: 0.2s;
}

.swiper-button-prev:before {
  content: "";
  position: absolute;
  width: 15px;
  height: 100%;
  background: url(/src/assets/images/slide_prev.png) no-repeat 0 center;
  left: 94%;
  top: 50%;
  margin-top: -180px;
}

.swiper-button-next {
  width: 50%;
  height: 360px;
  right: -450px;
  top: 0;
  background: url(/src/assets/images/ichimatsu.png) repeat 0 0;
  border-radius: 5px;
  margin-top: 0;
  z-index: 99;
  transition: 0.2s;
}

.swiper-button-next:after {
  content: "";
  position: absolute;
  width: 15px;
  height: 100%;
  background: url(/src/assets/images/slide_prev.png) no-repeat 0 center;
  right: 94%;
  top: 50%;
  margin-top: -180px;
  transform: rotate(180deg);
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  opacity: 0.6;
}
</style>

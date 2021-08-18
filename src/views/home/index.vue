<template>
  <div id="Page-main">
    <Head></Head>
    <div id="Page-container">
      <div id="Home" class="page-block">
        <div class="silde-box">
          <carousel-slide></carousel-slide>
        </div>
      </div>

      <div class="page-block" id="About">
        <b-container fluid="xl">
          <about-us></about-us>
          <!-- <b-row class="brow">
            <b-col cols="4">
              <img
                src="@img/23.jpg"
                class="col-img col-img-full align-top"
                alt="rbd group"
              />
            </b-col>
            <b-col cols="4">
              <img
                src="@img/20.jpg"
                class="col-img col-img-full align-top"
                alt="rbd group"
              />
            </b-col>
            <b-col cols="4">
              <img
                src="@img/22.jpg"
                class="col-img col-img-full align-top"
                alt="rbd group"
              />
            </b-col>
          </b-row> -->
        </b-container>
      </div>

      <div>
        <swiper-slide></swiper-slide>
      </div>
      <!-- block-bg -->
      <div class="page-block " id="Integrity">
        <div class="form-box">
          <integrity-safety></integrity-safety>
        </div>
      </div>

      <div row class="img-full">
        <img
          src="@img/p3.jpg"
          class="col-img col-img-full align-top"
          alt="rbd group"
        />
      </div>
      <div class="page-block" id="Flow">
        <b-container fluid="xl">
          <div class="form-box">
            <working-flow></working-flow>
          </div>
        </b-container>
      </div>

      <div id="Contact" class="page-block block-bg">
        <b-container fluid="xl">
          <ContactUs></ContactUs>
        </b-container>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import SwiperSlide from "@/components/swiper-slide/SwiperSlide";
import CarouselSlide from "@/components/carousel-slide";
import AboutUs from "@/components/about-us";
import IntegritySafety from "@/components/integrity-safety";
import WorkingFlow from "@/components/working-flow";
import ContactUs from "@/components/ContactUs";

var MobileDetect = require("mobile-detect"),
  md = new MobileDetect(navigator.userAgent);
export default {
  data() {
    return {
      AuditorCols1: 4,
      AuditorCols2: 8,
    };
  },
  components: {
    SwiperSlide,
    CarouselSlide,
    AboutUs,
    IntegritySafety,
    WorkingFlow,
    ContactUs,
  },
  mounted() {
    // this.getAuthority();
    var that = this;
    //console.log(md.mobile());
    if (md.mobile()) {
      that.cols = 12;
      that.AuditorCols1 = 12;
      that.AuditorCols2 = 12;
    } else {
      that.AuditorCols1 = 4;
      that.AuditorCols2 = 8;
    }
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>

<style lang="scss"></style>

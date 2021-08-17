<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      fade
      controls
      indicators
      background="#ababab"
      img-width="1092"
      img-height="300"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- <b-carousel-slide
        v-for="(obj, key) in list"
        v-bind:key="key"
        caption=""
        text=""
        :img-src="obj.src"
      ></b-carousel-slide> -->
      <b-carousel-slide
        caption=""
        text=""
        img-src="http://www.jobpgroup.com/img/1.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption=""
        text=""
        img-src="http://www.jobpgroup.com/img/2.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption=""
        text=""
        img-src="http://www.jobpgroup.com/img/3.jpg"
      ></b-carousel-slide>
      <!-- <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="800"
            height="400"
            img-src="http://www.jobpgroup.com/img/1.jpg"
            alt=""
          />
        </template>
      </b-carousel-slide> -->

      <!-- <b-carousel-slide
              caption="Blank Image"
              img-blank
              img-alt="Blank image"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse eros felis, tincidunt a tincidunt eget, convallis
                vel est. Ut pellentesque ut lacus vel interdum.
              </p>
            </b-carousel-slide> -->
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "CarouselSlide",
  props: {
    list: [
      { src: "http://www.jobpgroup.com/img/1.jpg", txt: "", val: "" },
      { src: "http://www.jobpgroup.com/img/2.jpg", txt: "", val: "" },
      { src: "http://www.jobpgroup.com/img/3.jpg", txt: "", val: "" },
    ],
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },

  components: {},

  computed: {},
  mounted() {
    // this.getAuthority();
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>
<style scoped></style>

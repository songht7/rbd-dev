<template>
  <div id="Page-main">
    <Head></Head>
    <div id="Page-container">
      <div class="page-block">
        <b-container fluid="xl">
          <div class="silde-box">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              fade
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <!-- Text slides with image -->
              <b-carousel-slide
                caption="First slide"
                text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                img-src="https://picsum.photos/1024/480/?image=52"
              ></b-carousel-slide>

              <!-- Slides with custom text -->
              <b-carousel-slide
                img-src="https://picsum.photos/1024/480/?image=54"
              >
                <h1>Hello world!</h1>
              </b-carousel-slide>

              <!-- Slides with image only -->
              <b-carousel-slide
                img-src="https://picsum.photos/1024/480/?image=58"
              ></b-carousel-slide>

              <!-- Slides with img slot -->
              <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block img-fluid w-100"
                    width="1024"
                    height="480"
                    src="https://picsum.photos/1024/480/?image=55"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>
              <!-- Slide with blank fluid image to maintain slide aspect ratio -->
              <b-carousel-slide
                caption="Blank Image"
                img-blank
                img-alt="Blank image"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse eros felis, tincidunt a tincidunt eget, convallis
                  vel est. Ut pellentesque ut lacus vel interdum.
                </p>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </b-container>
      </div>

      <div class="page-block">
        <b-container fluid="xl">
          <b-row>
            <b-jumbotron>
              <template v-slot:lead>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </template>
            </b-jumbotron>
          </b-row>
        </b-container>
      </div>

      <div class="page-block">
        <b-container fluid="xl">
          <b-row>
            <b-card-group deck>
              <b-card
                img-src="https://placekitten.com/1000/300"
                img-alt="Card image"
                img-bottom
              >
                <b-card-text>
                  Some quick example text to build on the card and make up the
                  bulk of the card's content.
                </b-card-text>
              </b-card>
            </b-card-group>
          </b-row>
        </b-container>
      </div>
      
      <div class="page-block">
        <b-container fluid="xl">
          <b-row>
            <b-card-group deck>
              <b-card
                img-src="https://placekitten.com/1000/300"
                img-alt="Card image"
                img-left
              >
                <b-card-text>
                  Some quick example text to build on the card and make up the
                  bulk of the card's content.
                </b-card-text>
              </b-card>
            </b-card-group>
          </b-row>
        </b-container>
      </div>

      <div class="page-block">
        <b-container fluid="xl">
          <b-row>
            <b-img-lazy
              src="https://picsum.photos/1024/400/?image=41"
              fluid
              alt="Responsive image"
            ></b-img-lazy>
          </b-row>
        </b-container>
      </div>

      <div class="page-block">
        <b-container fluid="xl">
          <div class="form-box">
            <b-row class="my-1">
              <b-col>
                <b-form-input
                  id="type-text"
                  type="text"
                  placeholder="Enter your name"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col>
                <b-form-input
                  id="type-number"
                  type="number"
                  placeholder="Enter your phone number"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col>
                <b-form-input
                  id="type-email"
                  type="email"
                  placeholder="Enter your email"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col>
                <b-button variant="primary">Primary</b-button>
              </b-col>
            </b-row>
          </div>
        </b-container>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
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

<style lang="scss"></style>

<template>
  <div id="Page-main">
    <b-row>
      <div id="nav" class="navbar-box">
        <b-navbar type="light" variant="faded" fixed="top" :sticky="sticky">
          <b-container fluid="xl">
            <b-navbar-nav>
              <b-nav-item href="#">Home</b-nav-item>
              <!-- Navbar dropdowns -->
              <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown text="User" right>
                <b-dropdown-item href="#">Account</b-dropdown-item>
                <b-dropdown-item href="#">Settings</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-container>
        </b-navbar>
      </div>
    </b-row>
    <div id="Page-container">
      <b-container fluid="xl">
        <div class="silde-box">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
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

          <p class="mt-4">
            Slide #: {{ slide }}<br />
            Sliding: {{ sliding }}
          </p>
        </div>

        <div class="jumbotron-box">
          <b-row>
            <b-jumbotron>
              <template v-slot:header>BootstrapVue</template>

              <template v-slot:lead>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </template>

              <hr class="my-4" />

              <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
              </p>

              <b-button variant="primary" href="#">Do Something</b-button>
              <b-button variant="success" href="#">Do Something Else</b-button>
            </b-jumbotron>
          </b-row>
        </div>

        <b-row>
          <b-img
            src="https://picsum.photos/1024/400/?image=41"
            fluid
            alt="Responsive image"
          ></b-img>
        </b-row>

        <div class="form-box">
          <b-container fluid>
            <b-row class="my-1" v-for="type in types" :key="type">
              <b-col sm="3">
                <label :for="`type-${type}`"
                  >Type <code>{{ type }}</code
                  >:</label
                >
              </b-col>
              <b-col sm="9">
                <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
              </b-col>
            </b-row>
          </b-container>
        </div>

        <div class="button-box">
          <div>
            <b-button variant="primary">Primary</b-button>
            <b-button variant="secondary">Secondary</b-button>
            <b-button variant="success">Success</b-button>
            <b-button variant="danger">Danger</b-button>
            <b-button variant="warning">Warning</b-button>
            <b-button variant="info">Info</b-button>
            <b-button variant="light">Light</b-button>
            <b-button variant="dark">Dark</b-button>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      sticky: true,
      types: [
        "text",
        "number",
        "email",
        "password",
        "search",
        "url",
        "tel",
        "date",
        "time",
        "range",
        "color",
      ],
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

<style lang="scss">
</style>
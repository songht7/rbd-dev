<template>
  <div>
    <b-navbar
      class="nav-bar"
      type="dark"
      toggleable="xl"
      variant="faded"
      fixed="top"
    >
      <!-- <b-container fluid="xl"> -->
      <b-navbar-brand href="/">
        <img
          id="Logo"
          src="../assets/images/logo-white.png"
          class="d-inline-block align-top"
          alt="rbd group"
        />
      </b-navbar-brand>
      <b-navbar-toggle class="nav-tog" target="nav-collapse"></b-navbar-toggle>
      <b-collapse class="nav-coll" is-nav id="nav-collapse">
        <b-navbar-nav class="nav-bar-main">
          <b-nav-item class="nav-btn" href="/#About" @click="animated"
            >About RBD</b-nav-item
          >
          <!-- <b-nav-item href="#Industry">Our Industry</b-nav-item> -->
          <b-nav-item class="nav-btn" href="/services" @click="animated"
            >Our Services</b-nav-item
          >
          <b-nav-item class="nav-btn" href="/#Integrity" @click="animated"
            >Integrity & Safety</b-nav-item
          >
          <b-nav-item class="nav-btn" href="/#Flow" @click="animated"
            >Working Flow</b-nav-item
          >
          <b-nav-item class="nav-btn" href="/#Contact" @click="animated"
            >Contact Us</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
      <!-- </b-container> -->
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Head",
  props: [],
  data() {
    return {
      stickyval: true,
    };
  },

  components: {},

  computed: {},
  mounted() {
    // this.getAuthority();
  },
  methods: {
    animated() {
      this.$store.state.animated.animateStyle = "fadeIn";
      this.$store.state.animated.duration = "3s";
      setTimeout(() => {
        this.$store.state.animated.animateStyle = "";
        this.$store.state.animated.duration = "";
      }, 3000);
    },
  },
};
</script>
<style scoped></style>

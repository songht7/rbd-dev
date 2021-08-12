<template>
  <div>
    <b-row>
      <div id="nav" class="navbar-box">
        <b-navbar type="light" variant="faded" fixed="top" :sticky="sticky">
          <b-container fluid="xl">
            <b-navbar-nav>
              <b-nav-item href="/">Home</b-nav-item>
              <!-- Navbar dropdowns -->
            </b-navbar-nav>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-navbar-brand href="#">
              <img
                src="../assets/images/logo.png"
                class="d-inline-block align-top"
                alt="rbd group"
              />
            </b-navbar-brand>
          </b-container>
        </b-navbar>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Head",
  props: [],
  data() {
    return {
      sticky: true,
    };
  },

  components: {},

  computed: {},
  mounted() {
    // this.getAuthority();
  },
  methods: {},
};
</script>
<style scoped></style>

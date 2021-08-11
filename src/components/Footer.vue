<template>
  <div id="Footer-box">
    <b-container fluid="xl">
      <b-jumbotron>
        <!-- <template v-slot:header>BootstrapVue</template> -->

        <template v-slot:lead>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </template>

        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: [],
  data() {
    return {};
  },

  components: {},

  computed: {},
  mounted() {
    // this.getAuthority();
  },
  methods: {},
};
</script>
<style scoped>
#Footer-box{
	background: #efefef;
	padding: 50px 0;
}
</style>

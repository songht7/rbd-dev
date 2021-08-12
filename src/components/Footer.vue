<template>
  <div id="Footer-box">
    <b-container fluid="xl">
      <b-jumbotron>
        <!-- <template v-slot:header>BootstrapVue</template> -->

        <template v-slot:lead>
          <div class="page-block copyright">
            <a href="http://www.beian.miit.gov.cn" target="_blank"
              ><img src="@img/national.png" /> 沪ICP备19019514号-1</a
            >
          </div>
        </template>

        <p></p>
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
#Footer-box {
  background: #efefef;
  padding: 50px 0;
}
</style>

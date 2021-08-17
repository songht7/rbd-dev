<template>
  <div>
    <b-row class="brow">
      <b-col>
        <b-jumbotron>
          <template v-slot:header>Inspection Arrangement Flow </template>
          <!-- <template v-slot:lead>
                    <div class="temp-row">
                      <p>Inspection Arrangement Flow</p>
                    </div>
                  </template> -->
        </b-jumbotron>
      </b-col>
    </b-row>
    <b-row class="brow">
      <b-col>
        <img
          src="@img/tree.png"
          class="col-img col-img-full align-top"
          alt="rbd group"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "IntegritySafety",
  props: {},
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
<style scoped></style>

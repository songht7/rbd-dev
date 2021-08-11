<template>
  <div id="app">
      <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "app",
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      loading: "getLoading"
    })
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss"></style>

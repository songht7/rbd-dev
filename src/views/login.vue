<template>
  <div>login-page</div>
</template>

<script>
export default {
  created() {
    this.getToken();
  },
  methods: {
    getToken(param, type) {
      window.localStorage["hr_logintoken"] = "";
      window.localStorage.removeItem("hr_token");
      let params = {
        grant_type: "client_credentials",
        client_id: "91trial",
        client_Secret:
          "vboWpBGzP6sdoM8wIf9ceLXU4cpyyTacjpKx-5dNI1y7_U1RqN5UhDBpY-_9rSygY0BIQXK7AVSYCkvpg0vu8yCy1lEGl6bEJyfVkLcZ2oLaGy9N8jaSNkvuUUR4U866PW-u2Q2k9SscHBGcS5AALMjsAXLwlaDZaXrrOwcOSIRQkqKw6GrKuIX7HfVM2BZs8_K5ihna8AsX87jIC-EhEw"
      };
      window.sessionStorage.setItem("qs", "1");
      this.$api.login.getToken(params).then(res => {
        let access_token = res.access_token;
        let token_type = res.token_type;
        let token = token_type + " " + access_token;
        window.localStorage.setItem("hr_token", token);
      });
    }
  }
};
</script>

<style>
</style>
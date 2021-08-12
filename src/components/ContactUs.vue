<template>
  <div class="form-box">
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="6"> </b-col>
        <b-col cols="6">
          <b-row class="my-1">
            <b-col>
              <b-form-input
                id="type-text"
                type="text"
                placeholder="Enter your name"
                v-model="name"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col>
              <b-form-input
                id="type-number"
                type="number"
                placeholder="Enter your phone number"
                v-model="phone"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col>
              <b-form-input
                id="type-email"
                type="email"
                placeholder="Enter your email"
                v-model="email"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col>
              <div class="btn-box">
                <b-alert
                  class="alert-block"
                  :show="alertShow"
                  :variant="variant"
                  fade
                >
                  {{ variantVal }}
                </b-alert>
                <b-button
                  :block="block"
                  variant="primary"
                  style="width:100%"
                  @click="OnSubmit"
                  >Submit</b-button
                >
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
var graceChecker = require("/public/graceChecker.js");
export default {
  name: "ContactUs",
  props: [],
  data() {
    return {
      block: true,
      name: "",
      phone: "",
      email: "",
      mark: "",
      alertShow: false,
      variant: "danger", //success danger warning
      variantVal: "",
      loading: true,
      formData: {
        name: "",
        phone: "",
        email: "",
        mark: "",
      },
    };
  },

  components: {},

  computed: {},
  mounted() {
    // this.getAuthority();
  },
  methods: {
    OnSubmit() {
      var that = this;
      if (that.loading == true) {
        return;
      }
      var _formData = {
        name: that.name,
        phone: that.phone,
        email: that.email,
        mark: that.mark,
      };
      var rule = [
        {
          name: "name",
          checkType: "notnull",
          checkRule: "",
          errorMsg: "Please enter name",
        },
        {
          name: "phone",
          checkType: "phoneno",
          checkRule: "",
          errorMsg: "Please enter the correct phone number",
        },
        {
          name: "email",
          checkType: "email",
          checkRule: "",
          errorMsg: "Please enter the correct email",
        },
      ];
      //进行表单检查
      var checkRes = graceChecker.check(_formData, rule);
      that.loading = true;
      if (checkRes) {
        //api: contact api.js
        var data = {
          邮件来源: ".::RBD Group Site::.",
          姓名: _formData.name,
          联系方式: _formData.phone,
          邮箱: _formData.email,
          留言: _formData.mark,
        };
        this.$api.contact
          .postSetMail(data)
          .then((res) => {
            console.log("postSetMail:", res);
            that.alertShow = true;
            that.variant = res.success == true ? "success" : "danger"; //success danger warning
            that.variantVal = res.data;
            setTimeout(() => {
              that.alertShow = false;
              that.loading = false;
            }, 3000);
            if (res.success) {
            } else {
            }
          })
          .catch((res) => {
            that.loading = false;
            console.log(res);
          });
      } else {
        console.log(graceChecker.error);
        that.loading = false;
        that.alertShow = true;
        that.variant = "warning"; //success danger warning
        that.variantVal = graceChecker.error;
        setTimeout(() => {
          that.alertShow = false;
        }, 1000);
      }
    },
  },
};
</script>
<style scoped>
#Footer-box {
  background: #efefef;
  padding: 50px 0;
}
</style>

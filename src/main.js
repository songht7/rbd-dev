import "@babel/polyfill"; // 兼容IE
import Vue from "vue";
import baseComponents from "@/plug/baseComponents"; //获取公共组件
import "viewerjs/dist/viewer.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "@/assets/css/normalize.css";
import "@/assets/css/init.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store";
for (let i in baseComponents) {
  // Vue.component(baseComponents[i].name, baseComponents[i])
  Vue.use(baseComponents[i]);
}

import Head from "@/components/Head";
Vue.component("Head", Head);
import Footer from "@/components/Footer";
Vue.component("Footer", Footer);

Vue.config.productionTip = false;

Object.setPrototypeOf = require("setprototypeof"); //解决ie兼容性

import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
Vue.prototype.$moment = moment;

import api from "@/api";
Vue.prototype.$api = api;

const uuid = require("uuid/v1");
Vue.prototype.$uuid = uuid;

import Cookies from "js-cookie";
Vue.prototype.$cookies = Cookies;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

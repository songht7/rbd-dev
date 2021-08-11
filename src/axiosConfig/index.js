import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
import store from '@/store';
// import {
//   Message
// } from "ant-design-vue";

// Message.config({
//   top: `40%`,
//   duration: 1,
//   maxCount: 1,
// });

// 响应时间
axios.defaults.timeout = 30 * 1000;
// 配置cookie
// axios.defaults.withCredentials = true
// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.headers.common['Authorization'] = '1';

// 静态资源
Vue.prototype.$static = '';

// 配置接口地址
axios.defaults.baseURL = '';

// var loadingInstance;
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  config => {

    if (window.localStorage.getItem('hr_token')) {
      config.headers.common['Authorization'] = window.localStorage.getItem('hr_token');
    }
    if (config.method === 'post') {
      if (window.sessionStorage.getItem('qs')) {
        config.data = qs.stringify(config.data);
        window.sessionStorage.removeItem('qs');
      }
    };

    store.commit('setLoading', true);
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    if (res.data.message) {
      if (res.data.code == 0) {
        // Message.error(res.data.message)
        console.log(res.data.message);
      } else {
        // Message.success(res.data.message)
        console.log(res.data.message);
      }
    }
    store.commit('setLoading', false);
    return res;
  },
  error => {
    store.commit('setLoading', false);
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "错误请求"
        case 401:
          error.message = "权限丢失"
      }
      error.message && Message.error(error.message)
    }
    return Promise.reject(error)
  },
);
// 发送请求
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        res => {
          resolve(res.data)
        },
        err => {
          reject(err.data)
        }
      )
      .catch(err => {
        reject(err.data)
      });
  });
};
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      });
  });
};
// 发送请求  resultful风格接口
export function resultfulPost(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        res => {
          resolve(res.data)
        },
        err => {
          reject(err.data)
        }
      )
      .catch(err => {
        reject(err)
      });
  });
};
export function resultfulGet(url, _params, _params2) {
  const params = _params ? `/${_params.join("/")}` : "";
  return new Promise((resolve, reject) => {
    axios
      .get(url + params, {
        params: _params2
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      });
  });
};
export function resultfulPut(url, _params, _params2) {
  const params = _params ? `/${_params.join("/")}` : "";
  return new Promise((resolve, reject) => {
    axios
      .put(url + params, _params2)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      });
  });
};
export function resultfulDelete(url, id) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url + `/${id}`)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      });
  });
};
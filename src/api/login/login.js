import {
  Login
} from './api.js';

import {
  post,
  get,
  resultfulGet,
  resultfulPost,
  resultfulPut,
  resultfulDelete
} from '@/axiosConfig';

export default {
  getToken(params) {
    return post(Login.getToken, params)
  }
};
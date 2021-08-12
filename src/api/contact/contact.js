import {
  ContactUs
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
  getSetMail(params) {
    return get(ContactUs.setMail, params)
  },
  postSetMail(params) {
    return post(ContactUs.setMail, params)
  }

};
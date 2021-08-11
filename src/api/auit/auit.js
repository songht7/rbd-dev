import {
  AuitIndex
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
  getWaitAuditList(params) {
    return get(AuitIndex.getWaitAuditList, params)
  },
  getWaitAuditDetail(params) {
    return get(AuitIndex.getWaitAuditDetail, params)
  }

};
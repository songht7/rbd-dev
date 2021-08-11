import {
  PatientIndex
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
  getImgList(params) {
    return get(PatientIndex.getImgList, params)
  },
  GetProActionList(params) {
    return get(PatientIndex.GetProActionList, params)
  }
}
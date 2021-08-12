let BASEURL = process.env.VUE_APP_BASEURL;

export const ContactUs = {
  setMail: 'http://www.spacehu.com/space/mail/mail.php?leo=407794660@qq.com', //发送邮件
}
export const AuitIndex = {
  getWaitAuditList: BASEURL + '/Patient/GetPatientAllList', //获取待审核患者列表
  getWaitAuditDetail: BASEURL + '/Process/InsertNodLog', //获取待审核患者详情
}

export const PatientIndex = {
  getImgList: BASEURL + '/Picture/GetPictureList', //获得图片列表
  GetProActionList: BASEURL + '/Process/GetProActionList',
}
let BASEURL = process.env.VUE_APP_BASEURL;;
let TokenUrl = "https://token.91trial.com";

export const Index = {
  getToken: TokenUrl + '/token/grant', // 获取token
}
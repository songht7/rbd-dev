let BASEURL = process.env.VUE_APP_BASEURL;
let postUrl = {};
import {
  Test
} from "@/api/test"

let urlAll = [Test];

console.log(Test)
Object.assign(postUrl, ...urlAll);

export default postUrl;
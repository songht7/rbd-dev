export function parseUA() {
  let u = navigator.userAgent;
  let u2 = navigator.userAgent.toLowerCase();
  return { //移动终端浏览器版本信息
    trident: u.indexOf('Trident') > -1, //IE内核
    presto: u.indexOf('Presto') > -1, //opera内核
    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
    iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
    iPad: u.indexOf('iPad') > -1, //是否iPad
    webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
    iosv: u.substr(u.indexOf('iPhone OS') + 9, 3),
    weixin: u2.match(/MicroMessenger/i) == "micromessenger",
    ali: u.indexOf('AliApp') > -1,
  };
};

export function repHei() {
  //修复 微信 键盘弹出 页面高度 不恢复 bug
  document.querySelectorAll("input,select").forEach(res => {
    res.onblur = function () {
      window.scrollTo(0, 0);
    };
  });

  document.querySelectorAll("select").forEach(res => {
    res.ochange = function () {
      window.scrollTo(0, 0);
    };
  });
};

//读取cookie
export function getCookie() {
  if (document.cookie.length > 0) {
    var arr = document.cookie.split("; "); // 这里显示的格式需要切割一下自己可输出看下
    for (var i = 0; i < arr.length; i++) {
      var arr2 = arr[i].split("="); // 再次切割
      // 判断查找相对应的值
      if (arr2[0] === 'mark') {
        const userId = arr2[1]; // 保存到保存数据的地方
        return userId;
      }
    }
  }
}



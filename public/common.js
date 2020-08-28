// 谷歌统计代码
var googletagmanager = document.createElement('script');
googletagmanager.src = 'https://www.googletagmanager.com/gtag/js?id=UA-135109709-7';
document.body.appendChild(googletagmanager);
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'UA-135109709-7');

// 百度统计
var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?89ee6689697162e00a0dec7f052b8f4b";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

// 百度自动推送
(function () {
  var canonicalURL, curProtocol;
  //Get the <link> tag
  var x = document.getElementsByTagName("link");
  //Find the last canonical URL
  if (x.length > 0) {
    for (i = 0; i < x.length; i++) {
      if (x[i].rel.toLowerCase() == 'canonical' && x[i].href) {
        canonicalURL = x[i].href;
      }
    }
  }
  //Get protocol
  if (!canonicalURL) {
    curProtocol = window.location.protocol.split(':')[0];
  }
  else {
    curProtocol = canonicalURL.split(':')[0];
  }
  //Get current URL if the canonical URL does not exist
  if (!canonicalURL) canonicalURL = window.location.href;
  //Assign script content. Replace current URL with the canonical URL
  !function () { var e = /([http|https]:\/\/[a-zA-Z0-9\_\.]+\.baidu\.com)/gi, r = canonicalURL, t = document.referrer; if (!e.test(r)) { var n = (String(curProtocol).toLowerCase() === 'https') ? "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif" : "//api.share.baidu.com/s.gif"; t ? (n += "?r=" + encodeURIComponent(document.referrer), r && (n += "&l=" + r)) : r && (n += "?l=" + r); var i = new Image; i.src = n } }(window);
})();
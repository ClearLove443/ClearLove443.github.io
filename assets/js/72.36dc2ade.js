(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{596:function(n,s,t){"use strict";t.r(s);var a=t(8),e=Object(a.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"优化打包编译方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化打包编译方式"}},[n._v("#")]),n._v(" 优化打包编译方式")]),n._v(" "),t("p",[n._v("使用 "),t("code",[n._v("ng build '-c=prod'")]),n._v(" "),t("code",[n._v("ng build --prod --aot")]),n._v(" "),t("code",[n._v("ng build --aot")]),n._v(" 或者"),t("code",[n._v("ng serve --aot")])]),n._v(" "),t("h1",{attrs:{id:"nginx-进行文件压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-进行文件压缩"}},[n._v("#")]),n._v(" nginx 进行文件压缩")]),n._v(" "),t("p",[n._v("修改/mydata/nginx/conf目录下的nginx.conf配置文件，开启GZIP压缩；")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('http {\n    gzip on; #开启gzip\n    gzip_disable "msie6"; #IE6不使用gzip\n    gzip_vary on; #设置为on会在Header里增加 "Vary: Accept-Encoding"\n    gzip_proxied any; #代理结果数据的压缩\n    gzip_comp_level 6; #gzip压缩比（1~9），越小压缩效果越差，但是越大处理越慢，所以一般取中间值\n    gzip_buffers 16 8k; #获取多少内存用于缓存压缩结果\n    gzip_http_version 1.1; #识别http协议的版本\n    gzip_min_length 1k; #设置允许压缩的页面最小字节数，超过1k的文件会被压缩\n    gzip_types application/javascript text/css; #对特定的MIME类型生效,js和css文件会被压缩\n    include /etc/nginx/conf.d/*.conf;\n}\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br")])]),t("p",[n._v("nginx返回请求头中添加了Content-Encoding: gzip的信息，设置成功")])])}),[],!1,null,null,null);s.default=e.exports}}]);
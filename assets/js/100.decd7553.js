(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{673:function(e,s,a){"use strict";a.r(s);var t=a(5),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("最近在本地Nexus中添加了一个外部依赖包，通过Nexus后台可以查看，通过URL也可以访问，可是本地开发环境就是说找不到。")]),e._v(" "),a("p",[e._v("错误如下：")]),e._v(" "),a("p",[e._v("[ERROR] Failed to execute goal on project enterprise-server: Could not resolve dependencies for project com.thgy:enterprise-server:jar:1.0-SNAPSHOT: Failure to find net.ipmarker:IPMarker_DevAPI_JavaSDK:jar:2.0 in http://nexus.xxxx.xxx/repository/maven-public/ was cached in the local repository, resolution will not be reattempted until the update interval of nexus has elapsed or updates are forced -> [Help 1]")]),e._v(" "),a("p",[e._v("通过上面发现，问题在于，maven并没有从nexus上寻找新包，原因就是时间没有到（而包是我刚上传的）。")]),e._v(" "),a("p",[e._v("后面发现maven有一个参数：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-U,--update-snapshots                  Forces a check for missing releases and updated snapshots on\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("通过命令行：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("mvn -U compile\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("就可以把项目需要的包下载下来了。")]),e._v(" "),a("p",[e._v("另外：\n通过管理后台上传时，注意勾选生产POM文件。")])])}),[],!1,null,null,null);s.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{698:function(s,a,e){"use strict";e.r(a);var t=e(5),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("linux账户保存在/etc/passwd，密码保存在/etc/shadow文件中。前者无需超级用户权限即可阅读。\n")])])]),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("ll /etc/passwd /etc/shadow\n-rw-r--r-- "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2055")]),s._v(" Sep "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":30 /etc/passwd\n-rw-r----- "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root shadow "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1112")]),s._v(" Nov "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":54 /etc/shadow\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("通过man 5 passwd，man 5 shadow可查看文件中各字段含义。\n")])])]),e("p",[s._v("如果你只有root用户，而忘记了密码，那没办法，即使暴力破解或者字典破解，由于你不知道加密算法中使用的salt，是破解不了的。")]),s._v(" "),e("p",[s._v("但是如果你的某个用户拥有sudoer权限的话，即使忘了root密码，也还是可以修改的。可能你并不了解这里面的加密算法以及salt是什么，别急，接下来我把背景知识补充一下。")]),s._v(" "),e("h2",{attrs:{id:"什么是加密函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是加密函数"}},[s._v("#")]),s._v(" 什么是加密函数")]),s._v(" "),e("p",[s._v("密码的散列存储\n如果你用过ss科学上网，你可能听说过一下这些中的某一个：")]),s._v(" "),e("ol",[e("li",[s._v("none")]),s._v(" "),e("li",[s._v("rc4")]),s._v(" "),e("li",[s._v("rc4-md5")]),s._v(" "),e("li",[s._v("rc4-md5-6")]),s._v(" "),e("li",[s._v("aes-128-ctr")]),s._v(" "),e("li",[s._v("aes-192-ctr")]),s._v(" "),e("li",[s._v("aes-256-ctr")]),s._v(" "),e("li",[s._v("aes-128-cfb")]),s._v(" "),e("li",[s._v("aes-192-cfb")]),s._v(" "),e("li",[s._v("aes-256-cfb")]),s._v(" "),e("li",[s._v("aes-128-cfb8")]),s._v(" "),e("li",[s._v("aes-192-cfb8")]),s._v(" "),e("li",[s._v("aes-256-cfb8")]),s._v(" "),e("li",[s._v("salsa20")]),s._v(" "),e("li",[s._v("chacha20")]),s._v(" "),e("li",[s._v("chacha20-ietf")])]),s._v(" "),e("p",[e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//blog.csdn.net/hengshujiyi/article/details/45972533",target:"_blank",rel:"noopener noreferrer"}},[s._v("AES,SHA1,DES,RSA,MD5区别 - CSDN博客"),e("OutboundLink")],1),s._v(" 这里有一篇文章专门讲这些加密方式的区别")]),s._v(" "),e("p",[s._v("总而言之，如果你的密码以明文的方式直接存储在数据库中是很危险的。于是我们想了一种办法，对密码进行SHA512加密，所谓加密，你可以理解为一个函数，确切的说是一个不可逆的散列函数（哈希函数），当你把密码当做这个函数的输入，会输出一串加密过的密码，如果你的机器被黑客黑了，他最多只能得到你加密过的密码。同样，每次你输入密码，系统会把密码输入哈希函数，拿输出的值与数据库中的值比较，如果你们有相同的输出，则你们是同一个人，如果函数的输出不同，你们就不是一个人。")]),s._v(" "),e("p",[s._v("比如：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("mkpasswd -m sha-512\nPassword: ａｐｐｌｅ\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$6")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LyVpT")]),s._v("/aetS"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mTDFTG9SzM7iVdP7Kqz6q2lsvgqjA45qXDAEcIUV")]),s._v("/eEAaOGreCbd1XMet8itx7z1XM1ZFCb3UUd3toBozQiuZ.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("在ubuntu系统中使用sudo apt-get install whois可以获得这个mkpasswd命令，通过这个命令我们可以对密码进行加密。\n")])])]),e("p",[s._v('我们看到，如果你的密码是apple，密码的散列值貌似是这么一长串。实际上，这一长串密码被"$"分割，第一个阿拉伯数字，代表了加密方法的种类， 这里6就代表了sha-512这种加密方式。第二个我们一会再说。第三个即为apple的散列值。系统中不存储apple这个密码，存储的是下面的散列值。当你再次输入密码的时候，会再次生成散列值，用于和数据库中的进行比较。')]),s._v(" "),e("h2",{attrs:{id:"什么是salt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是salt"}},[s._v("#")]),s._v(" 什么是salt？")]),s._v(" "),e("p",[s._v("举个例子，比如，如果你的密码仅仅是一个单词，黑客有一本字典，这个字典的每个单词后面都对应了这个单词的散列值。然后黑客看着你经过加密的密码，一页一页翻看字典。没翻几页他就发现，单词apple的散列值咋和你加密过的密码一样？")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("加Salt可以一定程度上解决这一问题。所谓加Salt，就是加点“佐料”。其基本想法是这样的——当用户首次提供密码时（通常是注册时），由系统自动往这个密码里撒一些“佐料”，然后再散列。而当用户登录时，系统为用户提供的代码撒上同样的“佐料”，然后散列，再比较散列值，已确定密码是否正确。\n")])])]),e("p",[s._v("我们刚才看到的"),e("code",[s._v("$6$LyVpT/aetS$mTDFTG9SzM7iVdP7Kqz6q2lsvgqjA45qXDAEcIUV/eEAaOGreCbd1XMet8itx7z1XM1ZFCb3UUd3toBozQiuZ.")]),s._v("\n这一串密文中， LyVpT/aetS即为加入的“盐”")]),s._v(" "),e("h2",{attrs:{id:"如何修改密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何修改密码"}},[s._v("#")]),s._v(" 如何修改密码？")]),s._v(" "),e("h3",{attrs:{id:"添加用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加用户"}},[s._v("#")]),s._v(" 添加用户")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" adduser username\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/shadow\n\ntom:"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$6")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$iXDRKGEq")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3FdFbXuwnPk7lSozGCsIws3q")]),s._v("/o3HhYYpdiKqt6cQ3yGMIQxMLO93KXRAgD5uJJaCQhvZOiuEwkh6ti8I3AYL50:17599:0:99999:7:::\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"添加用户到sudo-用户组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加用户到sudo-用户组"}},[s._v("#")]),s._v(" 添加用户到sudo 用户组")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -aG "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" username\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"删除用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除用户"}},[s._v("#")]),s._v(" 删除用户")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("userdel")]),s._v(" username\n\n参数：\n  -r  remove home directory and mail spool\n  -f  force removal of files, even "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" not owned by user\n  -z  remove any SELinux user mapping "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the user\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("我在linux中添加了一个用户tom来作为演示。 这天tom忘记了自己的密码，很着急，想知道如何找回密码。我说，密码是找不回了，但是我可以帮你修改原来的密码。")]),s._v(" "),e("p",[s._v("于是乎，我把上面apple的散列值替换了tom的散列值")]),s._v(" "),e("p",[e("code",[s._v("tom:$6$LyVpT/aetS$mTDFTG9SzM7iVdP7Kqz6q2lsvgqjA45qXDAEcIUV/eEAaOGreCbd1XMet8itx7z1XM1ZFCb3UUd3toBozQiuZ.:17599:0:99999:7:::")])]),s._v(" "),e("p",[e("code",[s._v("tom你好， apple就是你现在的新密码了。")])]),s._v(" "),e("p",[s._v("如果你没有超级用户权限，也忘了密码的话，可以启用单用户模式")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://jingyan.baidu.com/article/6181c3e080d479152ef153ac.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Red Hat Linux 进入单用户模式 修改root密码"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("如果你有sudo权限，"),e("code",[s._v("sudo passwd root")]),s._v("就行。")])])}),[],!1,null,null,null);a.default=r.exports}}]);
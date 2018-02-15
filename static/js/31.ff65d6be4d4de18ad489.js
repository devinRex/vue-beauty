webpackJsonp([31],{378:function(s,a,t){s.exports=t(469)},469:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={data:function(){return{spinning:!1}}},l=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("undefined",[t("h1",[s._v("Spin 加载中")]),s._v(" "),t("p",[s._v("用于页面和区块的加载中状态。")]),s._v(" "),t("h2",{attrs:{id:"he-shi-shi-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#he-shi-shi-yong","aria-hidden":"true"}},[s._v("¶")]),s._v(" 何时使用")]),s._v(" "),t("p",[s._v("页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。")]),s._v(" "),t("h2",{attrs:{id:"dai-ma-yan-shi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-yan-shi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 代码演示")]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:"<v-spin></v-spin>\n",script:null,style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[t("v-spin")],1),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"ji-ben"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben","aria-hidden":"true"}},[s._v("¶")]),s._v(" 基本")]),s._v(" "),t("p",[s._v("一个简单的 loading 状态")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-spin")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-spin")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 基本\n  一个简单的 loading 状态\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-spin")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-spin")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<v-spin tip="正在读取数据.">\n    <v-alert type="info" message="消息提示的文案" description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"></v-alert>\n</v-spin>\n',script:null,style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[t("v-spin",{attrs:{tip:"正在读取数据."}},[t("v-alert",{attrs:{type:"info",message:"消息提示的文案",description:"消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"}})],1)],1),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"zi-ding-yi-miao-shu-wen-an"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-miao-shu-wen-an","aria-hidden":"true"}},[s._v("¶")]),s._v(" 自定义描述文案")]),s._v(" "),t("p",[s._v("自定义描述文案，指定的 tip 文案会直接代替 ...")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-spin")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("tip")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"正在读取数据."')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-alert")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"info"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("message")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"消息提示的文案"')]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("description")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"')]),s._v("\n    >")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-alert")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-spin")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 自定义描述文案\n  自定义描述文案，指定的 tip 文案会直接代替 ...\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-spin")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("tip")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"正在读取数据."')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-alert")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"info"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("message")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"消息提示的文案"')]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("description")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"')]),s._v("\n    >")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-alert")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-spin")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<v-spin size="small"></v-spin>\n<v-spin></v-spin>\n<v-spin size="large"></v-spin>\n',script:null,style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[t("v-spin",{attrs:{size:"small"}}),s._v(" "),t("v-spin"),s._v(" "),t("v-spin",{attrs:{size:"large"}})],1),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"ge-chong-da-xiao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ge-chong-da-xiao","aria-hidden":"true"}},[s._v("¶")]),s._v(" 各种大小")]),s._v(" "),t("p",[s._v("小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-spin")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"small"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-spin")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-spin")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-spin")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-spin")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"large"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-spin")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 各种大小\n  小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-spin")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"small"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-spin")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-spin")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-spin")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-spin")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"large"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-spin")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<template>\n    <v-spin :spinning="spinning" tip="加载中">\n        <v-alert type="info" message="消息提示的文案" description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍">\n        </v-alert>\n    </v-spin>\n    切换加载状态：<v-switch v-model="spinning"></v-switch>\n</template>\n',script:"\nexport default {\n   data: ()=> ({\n       spinning:false\n   })\n}\n<script>\n",style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[t("v-spin",{attrs:{spinning:s.spinning,tip:"加载中"}},[t("v-alert",{attrs:{type:"info",message:"消息提示的文案",description:"消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"}})],1),s._v("\n    切换加载状态："),t("v-switch",{model:{value:s.spinning,callback:function(a){s.spinning=a},expression:"spinning"}})]],2),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"qia-pian-jia-zai-zhong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qia-pian-jia-zai-zhong","aria-hidden":"true"}},[s._v("¶")]),s._v(" 卡片加载中")]),s._v(" "),t("p",[s._v("可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-spin")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":spinning")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"spinning"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("tip")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"加载中"')]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-alert")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"info"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("message")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"消息提示的文案"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("description")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"')]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-alert")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-spin")]),s._v(">")]),s._v("\n    切换加载状态："),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-switch")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"spinning"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-switch")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n   "),t("span",{staticClass:"hljs-attr"},[s._v("data")]),s._v(": "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v("=>")]),s._v(" ({\n       "),t("span",{staticClass:"hljs-attr"},[s._v("spinning")]),s._v(":"),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n   })\n}\n<script>\n")])])])]),s._v(" "),t("summary",[s._v("\n  #### 卡片加载中\n  可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-spin")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":spinning")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"spinning"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("tip")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"加载中"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-alert")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"info"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("message")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"消息提示的文案"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("description")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-alert")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-spin")]),s._v(">")]),s._v("\n    切换加载状态："),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-switch")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"spinning"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-switch")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n   "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v("=>")]),s._v(" ({\n       "),t("span",{attrs:{class:"hljs-attr"}},[s._v("spinning")]),s._v(":"),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n   })\n}\n<script>\n")])])])]),s._v(" "),t("h2",{attrs:{id:"api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[s._v("¶")]),s._v(" API")]),s._v(" "),t("h3",{attrs:{id:"spin-props"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spin-props","aria-hidden":"true"}},[s._v("¶")]),s._v(" Spin Props")]),s._v(" "),t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("size")]),s._v(" "),t("td",[s._v("spin组件中点的大小，可选值为 small default large")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("default")])]),s._v(" "),t("tr",[t("td",[s._v("spinning")]),s._v(" "),t("td",[s._v("用于内嵌其他组件的模式，可以关闭 loading 效果")]),s._v(" "),t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("true")])]),s._v(" "),t("tr",[t("td",[s._v("tip")]),s._v(" "),t("td",[s._v("自定义描述文案")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("无")])])])])],1)},v=[],i=t(0),_=Object(i.a)(n,l,v,!1,null,null,null);a.default=_.exports}});
//# sourceMappingURL=31.ff65d6be4d4de18ad489.js.map
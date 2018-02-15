webpackJsonp([47],{345:function(a,e,t){a.exports=t(408)},408:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("undefined",[t("h2",{attrs:{id:"mu-lu-jie-gou"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mu-lu-jie-gou","aria-hidden":"true"}},[a._v("¶")]),a._v(" 目录结构")]),a._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs"}},[a._v("    VUE-BEAUTY/\n    |-- build               存放webpack的配置\n    |-- vb                  组件库\n    |   |-- components      组件\n    |   |-- directives      指令\n    |   |-- locale          多语言\n    |   |-- mixins          混合\n    |   |-- style           核心样式\n    |   |-- utils           工具方法\n    |   `-- index.js        入口\n    `-- src                 存放文档\n        |-- views           视图页面\n        |-- docs            组件文档\n        |-- components      业务组件\n        |-- main.js         入口\n        `-- routers.js      路由\n")])]),a._v(" "),t("h2",{attrs:{id:"can-yu-liu-cheng"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-yu-liu-cheng","aria-hidden":"true"}},[a._v("¶")]),a._v(" 参与流程")]),a._v(" "),t("ul",[t("li",[a._v("我们会通过issue的形式发布一系列任务")]),a._v(" "),t("li",[a._v("在任务issue下面回复并认领")]),a._v(" "),t("li",[a._v("根据某个issue，fork并在next分支下实现")]),a._v(" "),t("li",[a._v("提交pr到next分支")]),a._v(" "),t("li",[a._v("合并pr，测试并发布到master分支")]),a._v(" "),t("li",[a._v("NOTICE：可以加入QQ群548062121讨论")])]),a._v(" "),t("h2",{attrs:{id:"kai-fa-bu-zou"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kai-fa-bu-zou","aria-hidden":"true"}},[a._v("¶")]),a._v(" 开发步骤")]),a._v(" "),t("ul",[t("li",[a._v("在vb/components建立组件的文件夹，比如xxx,里面包含style文件夹、index.js、xxx.vue")]),a._v(" "),t("li",[a._v("到"),t("a",{attrs:{href:"https://github.com/ant-design/ant-design/tree/master/components"}},[a._v("ant-design")]),a._v("官网拷贝相应的样式到vb/components/xxx的style文件夹下")]),a._v(" "),t("li",[a._v("在index.js里面引入样式并导出组件")]),a._v(" "),t("li",[a._v("开发完组件后，需要在vb/components/index.js里面导出")]),a._v(" "),t("li",[a._v("到src/docs下编写组件的使用文档")]),a._v(" "),t("li",[a._v("同时在下列文件：src/routers.js、src/views/components.vue，添加组件的路由和链接")]),a._v(" "),t("li",[a._v("NOTICE：如果你需要增加样式，可以在组件对应的style目录中增加xxx_vb.less（如button_vb.less），并在style/index.less中import该样式文件")])]),a._v(" "),t("h2",{attrs:{id:"ming-ming-gui-fan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ming-ming-gui-fan","aria-hidden":"true"}},[a._v("¶")]),a._v(" 命名规范")]),a._v(" "),t("ul",[t("li",[a._v("文件，目录均以横线连接(如data-table)")]),a._v(" "),t("li",[a._v("组件的name均以大写开头，驼峰式(如TreeSelect)")])]),a._v(" "),t("h2",{attrs:{id:"es-yu-fa-shuo-ming"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es-yu-fa-shuo-ming","aria-hidden":"true"}},[a._v("¶")]),a._v(" ES语法说明")]),a._v(" "),t("ul",[t("li",[a._v(".babelrc配置了preset-latest保证新的语法支持（如const、let）")]),a._v(" "),t("li",[a._v(".babelrc配置了transform-runtime保证新的全局对象和全局对象上的方法的支持（如Promise、Object.assign）")]),a._v(" "),t("li",[a._v("vb/utils/polyfill.js配置了可以使用的实例方法（如'abc'.includes('a')）")])]),a._v(" "),t("h2",{attrs:{id:"gan-xie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gan-xie","aria-hidden":"true"}},[a._v("¶")]),a._v(" 感谢")]),a._v(" "),t("ul",[t("li",[a._v("感谢为这个项目做过贡献的所有朋友。")]),a._v(" "),t("li",[a._v("感谢vue和ant design的开发者。")])]),a._v(" "),t("h2",{attrs:{id:"kai-fa-huan-jing-da-jian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kai-fa-huan-jing-da-jian","aria-hidden":"true"}},[a._v("¶")]),a._v(" 开发环境搭建")]),a._v(" "),t("p",[a._v("首先你需要安装Node.js 4+、yarn")]),a._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-javascript"}},[a._v("    git clone your fork\n    yarn\n    npm run dev\n")])]),a._v(" "),t("h2",{attrs:{id:"dai-ma-gui-fan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-gui-fan","aria-hidden":"true"}},[a._v("¶")]),a._v(" 代码规范")]),a._v(" "),t("p",[a._v("参考"),t("a",{attrs:{href:"https://github.com/airbnb/javascript",target:"blank"}},[a._v("Airbnb")]),a._v("的JavaScript风格规范。")])])},i=[],n=t(0),r=Object(n.a)(null,s,i,!1,null,null,null);e.default=r.exports}});
//# sourceMappingURL=47.804bfcadd19a8ab4981e.js.map
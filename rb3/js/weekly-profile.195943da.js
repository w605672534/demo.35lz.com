(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["weekly-profile"],{"159b":function(t,e,a){var r=a("da84"),s=a("fdbc"),n=a("17c2"),i=a("9112");for(var o in s){var c=r[o],l=c&&c.prototype;if(l&&l.forEach!==n)try{i(l,"forEach",n)}catch(p){l.forEach=n}}},"17c2":function(t,e,a){"use strict";var r=a("b727").forEach,s=a("a640"),n=a("ae40"),i=s("forEach"),o=n("forEach");t.exports=i&&o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,a){var r=a("d039"),s=a("b622"),n=a("2d00"),i=s("species");t.exports=function(t){return n>=51||!r((function(){var e=[],a=e.constructor={};return a[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4160:function(t,e,a){"use strict";var r=a("23e7"),s=a("17c2");r({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},"4de4":function(t,e,a){"use strict";var r=a("23e7"),s=a("b727").filter,n=a("1dde"),i=a("ae40"),o=n("filter"),c=i("filter");r({target:"Array",proto:!0,forced:!o||!c},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),s=a("5899"),n="["+s+"]",i=RegExp("^"+n+n+"*"),o=RegExp(n+n+"*$"),c=function(t){return function(e){var a=String(r(e));return 1&t&&(a=a.replace(i,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,a){var r=a("861d"),s=a("d2bb");t.exports=function(t,e,a){var n,i;return s&&"function"==typeof(n=e.constructor)&&n!==a&&r(i=n.prototype)&&i!==a.prototype&&s(t,i),t}},"7a9c":function(t,e,a){"use strict";a("4de4"),a("4160"),a("d81d"),a("a9e3"),a("159b");function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var s={DESCRIPTIONS_ITEM:!0,props:{label:String,span:{type:Number,default:1},align:{type:String,default:"left"}},render:function(){return this.$slots.default},renderError:function(){}},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"ant-descriptions-row"},[t._t("default")],2)},i=[],o={},c=o,l=a("2877"),p=Object(l["a"])(c,n,i,!1,null,null,null),u=p.exports;e["a"]={DescriptionsItem:s,components:{Row:u},props:{title:String,bordered:{type:Boolean,default:!1},column:{type:[Number,Object],default:3},size:{type:[Boolean,String],default:!1,enum:["default","middle","small"]},layout:{type:String,default:"horizontal",enum:["horizontal","vertical"]},inline:{type:Boolean,default:!0},colon:{type:Boolean,default:!0}},computed:{rows:function(){var t=[],e=this.column,a=this.$slots.default,r=[],s=e;return a.filter((function(t){var e=t.componentOptions||{Ctor:{}},a=e.Ctor.options;return!!a&&a.DESCRIPTIONS_ITEM})).forEach((function(n,i){var o=n.componentOptions.propsData.span||1;if(i===a.length-1)return r.push(n),void t.push(r);o<s?(s-=o,r.push(n)):(r.push(n),t.push(r),s=e,r=[])})),t}},render:function(){var t,e=arguments[0],a=this.title,s=this.rows,n=this.bordered,i=this.size,o=this.colon,c=this.$slots,l=this.layout,p=this.inline;return e("div",{class:(t={"ant-descriptions":!0},r(t,"ant-descriptions-".concat(i),!0),r(t,"ant-descriptions-bordered",!!n),t)},[a&&e("div",{class:"ant-descriptions-title"},[a]),!a&&c.title&&e("div",{class:"ant-descriptions-title"},[c.title]),e("div",{class:"ant-descriptions-view"},[e("table",[e("tbody",[s.map((function(t){return"vertical"===l?[e(u,[" ",t.map((function(t){var a=t.componentOptions.propsData,r=a.span,s=a.label,n=a.align;return e("th",{class:"ant-descriptions-item-label",style:{"text-align":n},attrs:{colSpan:r}},[s])}))," "]),e(u,[" ",t.map((function(t){var a=t.componentOptions.propsData,r=a.span,s=a.align;return e("td",{class:"ant-descriptions-item-content",style:{"text-align":s},attrs:{colSpan:r}},[t])}))," "])]:e(u,[" ",t.map((function(t){var a=t.componentOptions.propsData,r=a.label,s=a.span,i=a.align;return n||!p?[e("th",{class:"ant-descriptions-item-label"},[r]),e("td",{class:"ant-descriptions-item-content",style:{"text-align":i},attrs:{colSpan:s?2*s-1:""}},[t])]:e("td",{class:"ant-descriptions-item",attrs:{colSpan:s},style:{"text-align":i}},[e("span",{class:{"ant-descriptions-item-label":!0,"ant-descriptions-item-colon":o}},[r]),e("span",{class:"ant-descriptions-item-content"},[t])])}))," "])}))])])])])},renderError:function(){}}},"9f54":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.$theme.layouts.page.base,{tag:"component"},[a("h3",{staticStyle:{"margin-bottom":"16px"}},[t._v("工程技术部第 2 周项目周报")]),a("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{bordered:!1}},[a("table",{staticClass:"ant-profile-table"},[a("tbody",[a("tr",[a("td",{attrs:{width:"35%"}},[a("h2",[t._v("项目状态: 正常")]),a("p",[t._v("本周主要完成各项目组任务迁移，云服务工作支持，EAP 已立项项目完善项目组成员等工作。下周计划完成各项目组任务安排等工作。")]),a("div",[a("a-button-group",{staticStyle:{"margin-right":"16px"},attrs:{slot:"actions-none"},slot:"actions-none"},[a("a-button",{attrs:{type:"primary"}},[t._v("创建新周报")])],1),a("a-button-group",{staticStyle:{"margin-right":"16px"},attrs:{slot:"actions-multiple"},slot:"actions-multiple"},[a("a-button",[t._v("设置项目信息")])],1)],1),a("div",{staticStyle:{"margin-top":"16px"}},[a("a-button",{attrs:{type:"link"}},[t._v("周报评分")]),a("a-rate",{model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]),a("td",[a("Descriptions",{attrs:{size:"small"}},[a("DescriptionsItem",{attrs:{label:"项目经理"}},[t._v("小宝")]),a("DescriptionsItem",{attrs:{label:"填报日期"}},[t._v("2020/3/7")]),a("DescriptionsItem",{attrs:{label:"实施进度",align:"center"}},[a("a-progress",{staticStyle:{width:"120px"},attrs:{percent:50,strokeColor:"red",size:"small"}})],1),a("DescriptionsItem",{attrs:{label:"开始日期"}},[t._v("2020/3/2")]),a("DescriptionsItem",{attrs:{label:"结束日期"}},[t._v("2020/3/7")]),a("DescriptionsItem",{attrs:{label:"时间进度",align:"center"}},[a("a-progress",{staticStyle:{width:"120px"},attrs:{percent:60,size:"small"}})],1)],1),a("a-divider"),a("a-steps",{attrs:{current:1,size:"small",labelPlacement:"vertical"}},[a("a-step",{attrs:{title:"商务"}}),a("a-step",{attrs:{title:"需求"}}),a("a-step",{attrs:{title:"设计"}}),a("a-step",{attrs:{title:"开发"}}),a("a-step",{attrs:{title:"收尾"}}),a("a-step",{attrs:{title:"验收"}})],1)],1)])])]),a("a-alert",{staticStyle:{"margin-top":"16px"},attrs:{message:"风险提示",description:"本周有未完成任务 1 个，延误计划 2 个。",type:"warning"}})],1),a("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{tabList:[{key:"1",tab:"未完成任务 (1)"},{key:"2",tab:"计划任务 (5)"},{key:"3",tab:"完成任务 (5)"}],bordered:!1},on:{tabChange:function(e){return t.activeTabKey=e}}},["1"===t.activeTabKey?a("a-table",{staticStyle:{"margin-bottom":"16px"},attrs:{columns:t.columns,dataSource:t.$store.state.products.slice(10),size:"middle",pagination:!1},scopedSlots:t._u([{key:"name",fn:function(e){return a("a",{attrs:{href:"javascript:;"}},[t._v(t._s(e))])}}],null,!1,1793409836)},[a("span",{attrs:{slot:"customTitle"},slot:"customTitle"},[t._v("名称")]),a("span",{attrs:{slot:"action"},slot:"action"},[a("a",{attrs:{href:"javascript:;"}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"Are you sure delete this task?",okText:"Yes",cancelText:"No"}},[a("a",{attrs:{href:"#"}},[t._v("删除")])]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{staticClass:"ant-dropdown-link",attrs:{href:"javascript:;"}},[t._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1)],1)]):t._e(),"2"===t.activeTabKey?a("a-table",{staticStyle:{"margin-bottom":"16px"},attrs:{columns:t.columns,dataSource:t.$store.state.products.slice(5,10),size:"middle",pagination:!1},scopedSlots:t._u([{key:"name",fn:function(e){return a("a",{attrs:{href:"javascript:;"}},[t._v(t._s(e))])}}],null,!1,1793409836)},[a("span",{attrs:{slot:"customTitle"},slot:"customTitle"},[t._v("名称")]),a("span",{attrs:{slot:"action"},slot:"action"},[a("a",{attrs:{href:"javascript:;"}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"Are you sure delete this task?",okText:"Yes",cancelText:"No"}},[a("a",{attrs:{href:"#"}},[t._v("删除")])]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{staticClass:"ant-dropdown-link",attrs:{href:"javascript:;"}},[t._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1)],1)]):t._e()],1),a("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{title:"问题跟踪列表",bordered:!1}},[a("a-config-provider",{scopedSlots:t._u([{key:"renderEmpty",fn:function(){return[a("a-empty",{attrs:{image:"https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"}},[a("span",{attrs:{slot:"description"},slot:"description"},[t._v("很棒哦，该项目目前没有未解决问题哦，继续保持。")]),a("a-button",{attrs:{type:"primary"}},[t._v("创建新问题")])],1)]},proxy:!0}])},[a("a-list",{attrs:{itemLayout:"horizontal",dataSource:[],size:"large"},scopedSlots:t._u([{key:"renderItem",fn:function(e){return a("a-list-item",{},[a("a",{attrs:{slot:"actions"},slot:"actions"},[t._v("编辑")]),a("a",{attrs:{slot:"actions"},slot:"actions"},[t._v("删除")]),a("a-list-item-meta",{attrs:{description:e.summary}},[a("a",{attrs:{slot:"title",href:"https://www.antdv.com/"},slot:"title"},[t._v(t._s(e.goods_name))]),a("a-avatar",{attrs:{slot:"avatar",shape:"square",size:48,src:"http://garanf-qn-cdn.jialandao.com/"+e.cover},slot:"avatar"})],1),a("div",{staticStyle:{"margin-left":"40px"}},[a("p",[t._v(t._s(t.moment(e.created).fromNow()))])]),a("div",{staticStyle:{"margin-left":"40px",width:"20%"}},[a("a-progress",{attrs:{percent:30,size:"small"}})],1)],1)}}])})],1)],1)],1)},s=[],n=a("7a9c"),i=n["a"].DescriptionsItem,o=[{dataIndex:"goods_name",key:"name",slots:{title:"customTitle"},scopedSlots:{customRender:"name"}},{title:"价格",dataIndex:"sell_price",key:"age",align:"right"},{title:"库存",dataIndex:"goods_stock",key:"address",align:"right"},{title:"销售",key:"tags",dataIndex:"goods_stock",scopedSlots:{customRender:"tags"},align:"right"},{title:"操作",key:"action",scopedSlots:{customRender:"action"},align:"center"}],c={components:{Descriptions:n["a"],DescriptionsItem:i},data:function(){return{value:3.5,columns:o,activeTabKey:"1"}}},l=c,p=(a("e377"),a("2877")),u=Object(p["a"])(l,r,s,!1,null,"1cefb5a7",null);e["default"]=u.exports},a640:function(t,e,a){"use strict";var r=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&r((function(){a.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,a){"use strict";var r=a("83ab"),s=a("da84"),n=a("94ca"),i=a("6eeb"),o=a("5135"),c=a("c6b6"),l=a("7156"),p=a("c04e"),u=a("d039"),d=a("7c73"),f=a("241c").f,m=a("06cf").f,v=a("9bf2").f,g=a("58a8").trim,h="Number",y=s[h],b=y.prototype,S=c(d(b))==h,_=function(t){var e,a,r,s,n,i,o,c,l=p(t,!1);if("string"==typeof l&&l.length>2)if(l=g(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+l}for(n=l.slice(2),i=n.length,o=0;o<i;o++)if(c=n.charCodeAt(o),c<48||c>s)return NaN;return parseInt(n,r)}return+l};if(n(h,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var x,I=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof I&&(S?u((function(){b.valueOf.call(a)})):c(a)!=h)?l(new y(_(e)),a,I):_(e)},E=r?f(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;E.length>A;A++)o(y,x=E[A])&&!o(I,x)&&v(I,x,m(y,x));I.prototype=b,b.constructor=I,i(s,h,I)}},b9f7:function(t,e,a){},d81d:function(t,e,a){"use strict";var r=a("23e7"),s=a("b727").map,n=a("1dde"),i=a("ae40"),o=n("map"),c=i("map");r({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},e377:function(t,e,a){"use strict";var r=a("b9f7"),s=a.n(r);s.a},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=weekly-profile.195943da.js.map
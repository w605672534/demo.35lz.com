(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20efc5"],{b265:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.$theme.layouts.page.base,{tag:"component"},[a(t.$theme.layouts.view.list,{tag:"component",scopedSlots:t._u([{key:"search",fn:function(){return[a("a-radio-group",{staticStyle:{"margin-left":"16px"},attrs:{defaultValue:"a"}},[a("a-radio-button",{attrs:{value:"a"}},[t._v("全部")]),a("a-radio-button",{attrs:{value:"b"}},[t._v("草稿")]),a("a-radio-button",{attrs:{value:"c"}},[t._v("审批中")]),a("a-radio-button",{attrs:{value:"d"}},[t._v("可领取")])],1),a("a-select",{staticStyle:{width:"160px","margin-left":"16px"},attrs:{allowClear:"",placeholder:"证明函类型"}},[a("a-select-option",{attrs:{value:"a"}},[t._v("标准在职证明")]),a("a-select-option",{attrs:{value:"b"}},[t._v("因私出境在职证明")]),a("a-select-option",{attrs:{value:"c"}},[t._v("个人收入证明")]),a("a-select-option",{attrs:{value:"d"}},[t._v("因公邀请函")]),a("a-select-option",{attrs:{value:"e"}},[t._v("随调家属证明")])],1),a("a-input-search",{staticStyle:{"margin-left":"16px",width:"200px"},attrs:{placeholder:"请输入申请人姓名"}})]},proxy:!0}])},[a("a-button-group",{staticStyle:{"margin-right":"16px"},attrs:{slot:"actions-none"},slot:"actions-none"},[a("a-button",{attrs:{type:"primary"}},[a("a-icon",{attrs:{type:"plus"}}),t._v(" 新建")],1)],1),a("a-button-group",{staticStyle:{"margin-right":"16px"},attrs:{slot:"actions-multiple"},slot:"actions-multiple"},[a("a-button",[a("a-icon",{attrs:{type:"delete"}}),t._v(" 删除")],1)],1),a("a-table",{staticStyle:{"margin-bottom":"16px"},attrs:{columns:t.columns,dataSource:t.$store.state.attestations,size:"middle",pagination:!1,rowSelection:{}},scopedSlots:t._u([{key:"name",fn:function(e){return a("a",{attrs:{href:"#/base/support/attestation-detail"}},[t._v(t._s(e))])}},{key:"tags",fn:function(e){return a("span",{},t._l(e,(function(e){return a("a-tag",{key:e,attrs:{color:"loser"===e?"volcano":e.length>5?"geekblue":"green"}},[t._v(" "+t._s(e.toUpperCase())+" ")])})),1)}}])},[a("span",{attrs:{slot:"customTitle"},slot:"customTitle"},[t._v("申请人姓名")]),a("span",{attrs:{slot:"action"},slot:"action"},[a("a",{attrs:{href:"javascript:;"}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"Are you sure delete this task?",okText:"Yes",cancelText:"No"}},[a("a",{attrs:{href:"#"}},[t._v("删除")])]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{staticClass:"ant-dropdown-link",attrs:{href:"javascript:;"}},[t._v("申请")])],1)]),a("a-pagination",{attrs:{slot:"pagination",showSizeChanger:"",defaultCurrent:1,total:500},slot:"pagination"})],1)],1)},o=[],n=[{dataIndex:"name",key:"name",slots:{title:"customTitle"},scopedSlots:{customRender:"name"}},{title:"证明函类型",dataIndex:"type",key:"type"},{title:"领取方式",dataIndex:"receive",key:"receive"},{title:"状态",key:"status",dataIndex:"status"},{title:"更新时间",key:"update_time",dataIndex:"update_time",align:"center"},{title:"操作",key:"action",scopedSlots:{customRender:"action"},align:"center"}],r=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}],l={data:function(){return{data:r,columns:n,actions:[{type:"star-o",text:"156"},{type:"like-o",text:"156"},{type:"message",text:"2"}]}}},i=l,c=a("2877"),u=Object(c["a"])(i,s,o,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d20efc5.c307ea38.js.map
webpackJsonp([0],{852:function(t,e,o){function a(t){return o(r(t))}function r(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var n={"./zhdf/food-order-btn":854,"./zhdf/food-order-btn.js":854,"./zhdf/food-order-days":855,"./zhdf/food-order-days.js":855,"./zhdf/food-order-form":857,"./zhdf/food-order-form-date":856,"./zhdf/food-order-form-date.js":856,"./zhdf/food-order-form.js":857,"./zhdf/food-order-static":858,"./zhdf/food-order-static.js":858,"./zhdf/food-order-table":859,"./zhdf/food-order-table.js":859};a.keys=function(){return Object.keys(n)},a.resolve=r,t.exports=a,a.id=852},854:function(t,e,o){t.exports={widget:"static",params:[{name:"start_date",title:"日期"},{name:"end_date",title:"日期"}],option:{column:24,xs:24,component:{template:'\n          <button class = "btn btn-primary" style="float: right;position: relative;top: 16px;right: 16px;" @click="exportFood">导出</button>\n          ',methods:{exportFood:function(){var t=this.$store.state.server+"/food/api/download",e=this.$store.state.params[this.$route.params.name].start_date,o=this.$store.state.params[this.$route.params.name].end_date,a=this.$store.state.server+"/food/api/report-export/report";this.$http.post(a,{repast_start_date:e,repast_end_date:o}).then(function(e){window.open(t,"_blank")},function(t){t.data&&t.data.error?this.$message({showClose:!0,message:t.data.content,type:"error"}):this.$message({showClose:!0,message:"认证接口异常",type:"error"})})}}}}}},855:function(t,e,o){t.exports={widget:"block",option:{mode:"grid",gutter:20,views:[{id:"1",column:24,view:"view/zhdf/food-order-static"},{id:"2",column:24,view:"view/zhdf/food-order-table"}]}}},856:function(t,e,o){t.exports={widget:"xform",option:{series:[{name:"date",control:"daterange",label:"日期",value:function(){var t=new Date,e=new Date,o=e.setDate(1);return[[e.getFullYear()+"-",+e.getMonth()<9?"0"+(e.getMonth()+1):e.getMonth()+1+"-",+e.getDate()<10?"0"+e.getDate():o].join(""),[t.getFullYear()+"-",+t.getMonth()<9?"0"+(t.getMonth()+1):t.getMonth()+1+"-",+t.getDate()<10?"0"+t.getDate():t.getDate()].join("")]}(),change:function(t){t?(this.$store.commit("setParams",{name:this.$route.params.name,key:"start_date",value:t[0]}),this.$store.commit("setParams",{name:this.$route.params.name,key:"end_date",value:t[1]})):(this.$store.commit("setParams",{name:this.$route.params.name,key:"start_date",value:""}),this.$store.commit("setParams",{name:this.$route.params.name,key:"end_date",value:""}))},options:{}}]}}},857:function(t,e,o){t.exports={widget:"block",option:{mode:"grid",params:[{name:"start_date",title:"日期"},{name:"end_date",title:"日期"}],views:[{id:"1",column:10,view:"view/zhdf/food-order-form-date"},{id:"1",column:14,view:"view/zhdf/food-order-btn"}]}}},858:function(t,e,o){t.exports={widget:"static",option:{gutter:0,column:24,xs:24,component:{props:["pageName"],template:'\n          <h4 style="text-align: center;margin-bottom: 30px;">\n            预约订餐统计\n          </h4>\n          '}}}},859:function(t,e,o){t.exports={widget:"xtable",dataset:{items:[{name:"food-order-days-statistics",params:[{name:"start_date"},{name:"end_date"}]}]},option:{stripe:!0,series:[{name:"序号",data:"sort"},{name:"姓名",data:"order_person"},{name:"卡号",data:"repast_number"},{name:"本人/天",data:"order_person_num"},{name:"成人家属/天",data:"repast_adult_num"},{name:"儿童家属/天",data:"repast_child_num"}]}}}});
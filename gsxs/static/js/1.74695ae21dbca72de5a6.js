webpackJsonp([1],{1053:function(e,a,n){function t(e){return n(i(e))}function i(e){var a=o[e];if(!(a+1))throw new Error("Cannot find module '"+e+"'.");return a}var o={"./company/index":1055,"./company/index.js":1055,"./home/index":1056,"./home/index.js":1056};t.keys=function(){return Object.keys(o)},t.resolve=i,e.exports=t,t.id=1053},1055:function(e,a,n){e.exports={name:"主页",params:[{name:"current_month",value:""},{name:"start_date",value:""},{name:"end_date",value:""},{name:"area_name",value:""}],views:[{id:"7",column:12,view:"view/company/real-total-amount.js",className:"panel-notitle panel-noframe",height:100,xs:24},{id:"6",view:"view/company/total-amount.js",className:"panel-notitle panel-noframe",height:100,xs:24},{id:"4",view:"view/company/factory-map.js",column:12,height:540,xs:24,className:"panel-noframe year-income"},{id:"7",column:3,xs:24,view:"view/company/start-date-block.js",className:"panel-date-bar anel-notitle panel-noframe"},{id:"8",column:7,xs:24,view:"view/company/end-date-block.js",className:"panel-date-bar panel-date-end-bar anel-notitle panel-noframe"},{id:"10",title:"站点检查分析",column:12,xs:24,view:"view/company/income-bar.js",height:420},{id:"111",title:"运输类型占比分析",column:6,xs:24,view:"view/company/income.js",height:420},{id:"112",title:"油品占比分析",column:6,view:"view/company/company-asset-type.js",height:420,xs:24},{id:"5",title:"各市检查分析",column:12,xs:24,view:"view/company/manage-trend.js",height:480}]}},1056:function(e,a,n){e.exports={name:"主页",views:[{id:"0",title:"公司总览",column:3,view:"view/home/company-overview.js",className:"panel-top-right",height:320},{id:"1",title:"民情通办理今日结果",view:"view/home/handle.js",className:"panel-bottom-right",created:function(e){var a={day:"今日",month:"月累",year:"年累"};this.$watch(function(){return this.$store.state.params["home.index"].dimension},function(){this.view.title="民情通办理"+a[this.$store.state.params["home.index"].dimension]+"结果"})}},{id:"2",column:6,view:"view/home/home-map.js",height:700,className:"panel-noframe"},{id:"3",column:3,title:"年度服务评价趋势",view:"view/home/project-type-trend.js",className:"panel-top-left",height:330},{id:"4",title:"加油站排行榜",view:"view/home/construction-project.js",className:"panel-bottom-left panel-title-right"}]}}});
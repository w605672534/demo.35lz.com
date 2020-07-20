webpackJsonp([0],{880:function(e,t,a){function o(e){return a(n(e))}function n(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var i={"./finance/abnormal-order":886,"./finance/abnormal-order.js":886,"./finance/capital-budget":887,"./finance/capital-budget.js":887,"./finance/capital-demand":888,"./finance/capital-demand.js":888,"./finance/capital-type":889,"./finance/capital-type.js":889,"./finance/shipment-filter":890,"./finance/shipment-filter.js":890,"./finance/shipment-view":891,"./finance/shipment-view.js":891,"./finance/shortage-warning":892,"./finance/shortage-warning.js":892,"./home/construction-project":893,"./home/construction-project.js":893,"./home/cost-dynamics":894,"./home/cost-dynamics.js":894,"./home/dynamic-quantity":895,"./home/dynamic-quantity.js":895,"./home/home-map":896,"./home/home-map.js":896,"./home/new-order":897,"./home/new-order.js":897,"./home/progress-circle":898,"./home/progress-circle.js":898,"./home/progress-health":899,"./home/progress-health.js":899,"./home/progress-view":900,"./home/progress-view.js":900,"./home/project-type-trend":901,"./home/project-type-trend.js":901,"./project/detail-budget":902,"./project/detail-budget.js":902,"./project/detail-carousel":903,"./project/detail-carousel.js":903,"./project/detail-info":904,"./project/detail-info.js":904,"./project/detail-milepost":905,"./project/detail-milepost.js":905,"./project/detail-progress":906,"./project/detail-progress.js":906,"./project/detail-status":907,"./project/detail-status.js":907,"./project/detail-task":908,"./project/detail-task.js":908};o.keys=function(){return Object.keys(i)},o.resolve=n,e.exports=o,o.id=880},886:function(e,t,a){e.exports={widget:"static",option:{component:{template:'\n        <el-table\n          :data="tableData"\n          style="width: 100%">\n          <el-table-column\n            prop="date"\n            label="订单名称">\n          </el-table-column>\n          <el-table-column\n            prop="name"\n            label="订单编号">\n          </el-table-column>\n          <el-table-column\n            prop="status"\n            label="状态">\n            <template slot-scope="scope">\n              <el-tag type="danger" effect="dark" size="medium">异常</el-tag>\n            </template>\n          </el-table-column>\n        </el-table>\n      ',data:function(){return{tableData:[{date:"五水头孢唑林钠",name:"SJ-A-1"},{date:"三九胃泰",name:"SJ-B-2"},{date:"三九感冒灵",name:"SJ-C-3"},{date:"999螯合新泰林",name:"SJ-D-4"}]}}}}}},887:function(e,t,a){e.exports={widget:"echart",option:{tooltip:{trigger:"axis",formatter:"{b}月 : {c} (万)"},grid:{left:"3%",right:"3%"},xAxis:{type:"category",boundaryGap:!1,splitLine:{show:!1},axisLabel:{formatter:function(e){return e+"月"}},axisLine:{lineStyle:{color:"#54bfc8"}},data:["1","2","3","4","5","6","7","8","9","10","11","12"]},yAxis:{type:"value",axisLabel:{formatter:function(e){return e+"万"}},axisLine:{lineStyle:{color:"#54bfc8"}},splitLine:{show:!1}},series:[{data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"line",markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{data:[{type:"average",name:"平均值"}]}}]}}},888:function(e,t,a){e.exports={widget:"echart",option:{tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"},label:{backgroundColor:"#54bfc8"}}},legend:{data:["数量"]},grid:{left:"3%",right:"3%",bottom:"0",top:"16%",containLabel:!0},xAxis:[{type:"category",data:["库存数量","客户需求量","已发货数量"],axisPointer:{type:"shadow"},axisLine:{lineStyle:{color:"#54bfc8"}},splitLine:{show:!1}}],yAxis:[{type:"value",axisLine:{lineStyle:{color:"#54bfc8"}},splitLine:{show:!1}}],series:[{name:"数量",type:"bar",data:[2e3,4e3,5e3]}]}}},889:function(e,t,a){e.exports={widget:"echart",option:{tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:["订单取消量","订单已发货数量","订单延迟数量"]},series:[{name:"订单类型",type:"pie",radius:"80%",center:["60%","55%"],data:[{value:335,name:"订单取消量"},{value:310,name:"订单已发货数量"},{value:234,name:"订单延迟数量"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"},normal:{label:{show:!0,formatter:"{d}%"},labelLine:{show:!0}}},label:{normal:{position:"inner"}}}]}}},890:function(e,t,a){e.exports={widget:"static",option:{component:{template:'\n        <el-radio-group v-model="value">\n          <el-radio-button label="总量"></el-radio-button>\n          <el-radio-button label="单品"></el-radio-button>\n          <el-radio-button label="省份"></el-radio-button>\n        </el-radio-group>\n      ',data:function(){return{value:"总量"}}}}}},891:function(e,t,a){e.exports={widget:"block",option:{views:[{id:"0",column:24,view:"view/finance/shipment-filter",height:50},{id:"1",column:24,view:"view/finance/capital-budget",height:400}]}}},892:function(e,t,a){e.exports={widget:"static",option:{component:{template:'\n        <el-table\n          :data="tableData"\n          style="width: 100%">\n          <el-table-column\n            prop="date"\n            label="药品名称">\n          </el-table-column>\n          <el-table-column\n            prop="num"\n            label="剩余数量">\n          </el-table-column>\n          <el-table-column\n            prop="status"\n            label="状态">\n            <template slot-scope="scope">\n              <el-tag type="warning" effect="dark" size="medium">缺货</el-tag>\n            </template>\n          </el-table-column>\n        </el-table>\n      ',data:function(){return{tableData:[{date:"五水头孢唑林钠",num:"10"},{date:"三九胃泰",num:"15"},{date:"三九感冒灵",num:"18"},{date:"999螯合新泰林",num:"8"}]}}}}}},893:function(e,t,a){e.exports={widget:"echart",option:{tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{data:["广东","山东","福建","湖南","江苏"]},series:[{name:"订单类型",type:"pie",radius:"60%",center:["50%","60%"],data:[{value:335,name:"广东"},{value:310,name:"山东"},{value:234,name:"福建"},{value:135,name:"湖南"},{value:165,name:"江苏"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"},normal:{label:{show:!0,formatter:"{b}"},labelLine:{show:!0}}}}]}}},894:function(e,t,a){e.exports={widget:"echart",option:{angleAxis:{type:"category",data:["2016-07","2016-08","2017-09","2017-10","2017-11","2017-12"],z:10},radiusAxis:{},polar:{z:"3"},tooltip:{show:!0,trigger:"item",axisPointer:{type:"line",axis:"auto"}},legend:{show:!0,data:["人员费用","管理费用","财务费用"]},series:[{type:"bar",data:[1,2,3,4,3,5,1],coordinateSystem:"polar",name:"人员费用",stack:"a"},{type:"bar",data:[2,4,6,1,3,2,1],coordinateSystem:"polar",name:"管理费用",stack:"a"},{type:"bar",data:[1,2,3,4,1,2,5],coordinateSystem:"polar",name:"财务费用",stack:"a"}]}}},895:function(e,t,a){e.exports={widget:"echart",option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["订单金额","订单数量"]},grid:{left:"3%",right:"4%",bottom:"0",top:"14%",containLabel:!0},xAxis:[{type:"category",data:["广东","山东","福建","湖南","江苏"],splitLine:{show:!1},axisLine:{lineStyle:{color:"#54bfc8"}}}],yAxis:[{type:"value",splitLine:{show:!1},axisLine:{lineStyle:{color:"#54bfc8"}}},{type:"value",splitLine:{show:!1},axisLine:{lineStyle:{color:"#54bfc8"}}}],series:[{name:"订单金额",type:"bar",data:[3500,4900,1400,4400,470]},{name:"订单数量",type:"line",yAxisIndex:1,data:[230,420,420,250,27]}]}}},896:function(e,t,a){e.exports={widget:"echart",option:{title:{text:"订单进度管理",x:"center"},tooltip:{trigger:"item",formatter:function(e){return[e.value[3]," : ",e.value[2]].join("")}},geo:{map:"china",label:{emphasis:{show:!1}},itemStyle:{normal:{areaColor:"#4096a4",borderColor:"#013d42"},emphasis:{areaColor:"#54bfc8"}},regions:[{name:"广东",itemStyle:{normal:{areaColor:"#54bfc8"}}},{name:"甘肃",itemStyle:{normal:{areaColor:"#54bfc8"}}},{name:"西藏",itemStyle:{normal:{areaColor:"#54bfc8"}}},{name:"黑龙江",itemStyle:{normal:{areaColor:"#54bfc8"}}},{name:"广西",itemStyle:{normal:{areaColor:"#54bfc8"}}},{name:"新疆",itemStyle:{normal:{areaColor:"#54bfc8"}}},{name:"辽宁",itemStyle:{normal:{areaColor:"#54bfc8"}}},{name:"上海",itemStyle:{normal:{areaColor:"#54bfc8"}}},{name:"湖北",itemStyle:{normal:{areaColor:"#54bfc8"}}},{name:"黑龙江",itemStyle:{normal:{areaColor:"#54bfc8"}}},{name:"内蒙古",itemStyle:{normal:{areaColor:"#54bfc8"}}}]},color:["#f9ed5f"],series:[{name:"全国分布",type:"scatter",coordinateSystem:"geo",symbolPosition:"end",symbolSize:[18,24],symbolOffset:[0,-12],symbol:"path://M512 0C300.144 0 128.454 140.846 128.454 376.474c0 235.62 222.595 308.371 383.546 647.526 162.67-340.942 383.546-421.234 383.546-647.526S723.817 0 512 0z m0 576.048c-118.255 0-191.773-76.402-191.773-191.78S387.977 192.494 512 192.494c124.031 0 191.773 73.51 191.773 191.774S630.263 576.04 512 576.04z",label:{normal:{show:!0,color:"#fff",offset:[0,-20]},emphasis:{show:!0}},data:function(){var e={"海门":[121.15,31.89],"鄂尔多斯":[109.781327,39.608266],"招远":[120.38,37.35],"舟山":[122.207216,29.985295],"齐齐哈尔":[123.97,47.33],"盐城":[120.13,33.38],"赤峰":[118.87,42.28],"青岛":[120.33,36.07],"乳山":[121.52,36.89],"金昌":[102.188043,38.520089],"泉州":[118.58,24.93],"莱西":[120.53,36.86],"日照":[119.46,35.42],"胶南":[119.97,35.88],"南通":[121.05,32.08],"拉萨":[91.11,29.97],"云浮":[112.02,22.93],"梅州":[116.1,24.55],"文登":[122.05,37.2],"上海":[121.48,31.22],"攀枝花":[101.718637,26.582347],"威海":[122.1,37.5],"承德":[117.93,40.97],"厦门":[118.1,24.46],"汕尾":[115.375279,22.786211],"潮州":[116.63,23.68],"丹东":[124.37,40.13],"太仓":[121.1,31.45],"曲靖":[103.79,25.51],"烟台":[121.39,37.52],"福州":[119.3,26.08],"瓦房店":[121.979603,39.627114],"即墨":[120.45,36.38],"抚顺":[123.97,41.97],"玉溪":[102.52,24.35],"张家口":[114.87,40.82],"阳泉":[113.57,37.85],"莱州":[119.942327,37.177017],"湖州":[120.1,30.86],"汕头":[116.69,23.39],"昆山":[120.95,31.39],"宁波":[121.56,29.86],"湛江":[110.359377,21.270708],"揭阳":[116.35,23.55],"荣成":[122.41,37.16],"连云港":[119.16,34.59],"葫芦岛":[120.836932,40.711052],"常熟":[120.74,31.64],"东莞":[113.75,23.04],"河源":[114.68,23.73],"淮安":[119.15,33.5],"泰州":[119.9,32.49],"南宁":[108.33,22.84],"营口":[122.18,40.65],"惠州":[114.4,23.09],"江阴":[120.26,31.91],"蓬莱":[120.75,37.8],"韶关":[113.62,24.84],"嘉峪关":[98.289152,39.77313],"广州":[113.23,23.16],"延安":[109.47,36.6],"太原":[112.53,37.87],"清远":[113.01,23.7],"中山":[113.38,22.52],"昆明":[102.73,25.04],"寿光":[118.73,36.86],"盘锦":[122.070714,41.119997],"长治":[113.08,36.18],"深圳":[114.07,22.62],"珠海":[113.52,22.3],"宿迁":[118.3,33.96],"咸阳":[108.72,34.36],"铜川":[109.11,35.09],"平度":[119.97,36.77],"佛山":[113.11,23.05],"海口":[110.35,20.02],"江门":[113.06,22.61],"章丘":[117.53,36.72],"肇庆":[112.44,23.05],"大连":[121.62,38.92],"临汾":[111.5,36.08],"吴江":[120.63,31.16],"石嘴山":[106.39,39.04],"沈阳":[123.38,41.8],"苏州":[120.62,31.32],"茂名":[110.88,21.68],"嘉兴":[120.76,30.77],"长春":[125.35,43.88],"胶州":[120.03336,36.264622],"银川":[106.27,38.47],"张家港":[120.555821,31.875428],"三门峡":[111.19,34.76],"锦州":[121.15,41.13],"南昌":[115.89,28.68],"柳州":[109.4,24.33],"三亚":[109.511909,18.252847],"自贡":[104.778442,29.33903],"吉林":[126.57,43.87],"阳江":[111.95,21.85],"泸州":[105.39,28.91],"西宁":[101.74,36.56],"宜宾":[104.56,29.77],"呼和浩特":[111.65,40.82],"成都":[104.06,30.67],"大同":[113.3,40.12],"镇江":[119.44,32.2],"桂林":[110.28,25.29],"张家界":[110.479191,29.117096],"宜兴":[119.82,31.36],"北海":[109.12,21.49],"西安":[108.95,34.27],"金坛":[119.56,31.74],"东营":[118.49,37.46],"牡丹江":[129.58,44.6],"遵义":[106.9,27.7],"绍兴":[120.58,30.01],"扬州":[119.42,32.39],"常州":[119.95,31.79],"潍坊":[119.1,36.62],"重庆":[106.54,29.59],"台州":[121.420757,28.656386],"南京":[118.78,32.04],"滨州":[118.03,37.36],"贵阳":[106.71,26.57],"无锡":[120.29,31.59],"本溪":[123.73,41.3],"克拉玛依":[84.77,45.59],"渭南":[109.5,34.52],"马鞍山":[118.48,31.56],"宝鸡":[107.15,34.38],"焦作":[113.21,35.24],"句容":[119.16,31.95],"北京":[116.46,39.92],"徐州":[117.2,34.26],"衡水":[115.72,37.72],"包头":[110,40.58],"绵阳":[104.73,31.48],"乌鲁木齐":[87.68,43.77],"枣庄":[117.57,34.86],"杭州":[120.19,30.26],"淄博":[118.05,36.78],"鞍山":[122.85,41.12],"溧阳":[119.48,31.43],"库尔勒":[86.06,41.68],"安阳":[114.35,36.1],"开封":[114.35,34.79],"济南":[117,36.65],"德阳":[104.37,31.13],"温州":[120.65,28.01],"九江":[115.97,29.71],"邯郸":[114.47,36.6],"临安":[119.72,30.23],"兰州":[103.73,36.03],"沧州":[116.83,38.33],"临沂":[118.35,35.05],"南充":[106.110698,30.837793],"天津":[117.2,39.13],"富阳":[119.95,30.07],"泰安":[117.13,36.18],"诸暨":[120.23,29.71],"郑州":[113.65,34.76],"哈尔滨":[126.63,45.75],"聊城":[115.97,36.45],"芜湖":[118.38,31.33],"唐山":[118.02,39.63],"平顶山":[113.29,33.75],"邢台":[114.48,37.05],"德州":[116.29,37.45],"济宁":[116.59,35.38],"荆州":[112.239741,30.335165],"宜昌":[111.3,30.7],"义乌":[120.06,29.32],"丽水":[119.92,28.45],"洛阳":[112.44,34.7],"秦皇岛":[119.57,39.95],"株洲":[113.16,27.83],"石家庄":[114.48,38.03],"莱芜":[117.67,36.19],"常德":[111.69,29.05],"保定":[115.48,38.85],"湘潭":[112.91,27.87],"金华":[119.64,29.12],"岳阳":[113.09,29.37],"长沙":[113,28.21],"衢州":[118.88,28.97],"廊坊":[116.7,39.53],"菏泽":[115.480656,35.23375],"合肥":[117.27,31.86],"武汉":[114.31,30.52],"大庆":[125.03,46.58]};return[{city:"乌鲁木齐"},{city:"兰州"},{city:"拉萨"},{city:"哈尔滨"},{city:"沈阳"},{city:"南宁"},{city:"武汉"},{city:"上海"},{city:"广州"},{city:"呼和浩特"}].map(function(t){return e[t.city].concat(parseInt(10*Math.random()),t.city)})}}]}}},897:function(e,t,a){e.exports={widget:"static",option:{component:{template:"#x-tpl-new-order"}}}},898:function(e,t,a){e.exports={widget:"static",option:{component:{template:"#x-tpl-progress-circle"}}}},899:function(e,t,a){e.exports={widget:"echart",option:{tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:["拒绝补货","成品销售","部门货样","换货"]},series:[{name:"订单类型",type:"pie",radius:"80%",center:["60%","55%"],data:[{value:335,name:"拒绝补货"},{value:310,name:"成品销售"},{value:234,name:"部门货样"},{value:135,name:"换货"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"},normal:{label:{show:!0,formatter:"{d}%"},labelLine:{show:!0}}},label:{normal:{position:"inner"}}}]}}},900:function(e,t,a){e.exports={widget:"block",option:{views:[{id:"1",column:24,view:"view/home/progress-health",height:200},{id:"2",column:24,view:"view/home/progress-circle"}]}}},901:function(e,t,a){e.exports={widget:"echart",option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["订单数量"]},grid:{left:"3%",right:"4%",bottom:"0",top:"14%",containLabel:!0},xAxis:{type:"category",data:["广东","山东","福建","湖南","江苏"],splitLine:{show:!1},axisLine:{lineStyle:{color:"#54bfc8"}}},yAxis:{type:"value",boundaryGap:[0,.01],splitLine:{show:!1},axisLine:{lineStyle:{color:"#54bfc8"}}},series:[{name:"订单数量",type:"bar",data:[230,420,420,250,27]}]}}},902:function(e,t,a){e.exports={widget:"echart",option:{tooltip:{trigger:"axis"},legend:{data:["预算","实际"]},grid:{left:50,right:20,bottom:80,top:40},calculable:!0,xAxis:{type:"category",data:["2016-07-01","2016-08-01","2016-09-01","2016-10-01","2016-11-01","2016-12-01","2017-01-01","2017-02-01","2017-03-01","2014-07-01","2015-07-01","2017-06-01","2017-07-01"],axisLabel:{rotate:70}},yAxis:[{type:"value",nameTextStyle:{fontSize:10}}],series:[{name:"预算",type:"bar",data:[20,49,70,232,256,767,1356,1622,326,200,64,33,326]},{name:"实际",type:"bar",data:[26,59,90,264,2.7,707,17.6,1822,487,188,60,23,487]}]}}},903:function(e,t,a){e.exports={widget:"static",option:{component:{template:"#x-tpl-detail-carousel"}}}},904:function(e,t,a){e.exports={widget:"static",option:{component:{template:"#x-tpl-detail-info"}}}},905:function(e,t,a){e.exports={widget:"static",option:{component:{template:"#x-tpl-detail-milepost"}}}},906:function(e,t,a){e.exports={widget:"echart",option:{angleAxis:{},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c}"},grid:{left:50,right:50},radiusAxis:{type:"category",data:["2016-07","2016-08","2017-09","2017-10","2017-11","2017-12"],z:10},polar:{center:["50%","53%"]},series:[{type:"bar",data:[5,12,30,4,6,9],coordinateSystem:"polar",name:"计划进度",center:["50%","53%"]},{type:"bar",data:[12,14,16,18,10,15],coordinateSystem:"polar",name:"实际进度",center:["50%","53%"]}],legend:{show:!0,data:["计划进度","实际进度"]}}}},907:function(e,t,a){e.exports={widget:"static",option:{component:{template:"#x-tpl-detail-status"}}}},908:function(e,t,a){e.exports={widget:"echart",option:{grid:{left:"3%",right:"4%",bottom:"0",containLabel:!0},xAxis:{type:"value",show:!1},yAxis:{type:"category",data:["任务1","任务2","任务3","任务4","任务5","任务6"]},series:[{name:"直接访问",type:"bar",stack:"总量",itemStyle:{normal:{color:"transparent"}},data:[5,30,75,90,243,300]},{name:"搜索引擎",type:"bar",stack:"总量",barWidth:20,barMaxWidth:20,label:{normal:{show:!0,position:"insideRight",formatter:function(e,t,a){return e.data.name}}},data:[{name:"Jan 1 - Mar 6",value:120,itemStyle:{normal:{color:"#54bfc8"}}},{name:"Jan 10 - Mar 3",value:125,itemStyle:{normal:{color:"#cf5ba4"}}},{name:"Feb 10 - May 12",value:180,itemStyle:{normal:{color:"#526ac1"}}},{name:"Feb 2 - Jun 20",value:243,itemStyle:{normal:{color:"#ffa44f"}}},{name:"Apr 20 - Oct 6",value:300,itemStyle:{normal:{color:"#75c7a5"}}},{name:"Jun 3 - Dec 6",value:354,itemStyle:{normal:{color:"#52afdf"}}}]}]}}}});
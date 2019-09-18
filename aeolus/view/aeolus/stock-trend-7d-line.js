define({
  widget:'echart',
  grid:{
    x:50,
    y:20,
    x2:20,
    y2:25
  },
  xAxis : [
    {
      type : 'category',
      data : ["周一","周二","周三","周四","周五","周六","周日"]
    }
  ],
  yAxis : [
    {
      type : 'value',
      name : '库存量',
      axisLabel : {
        formatter: '{value}'
      },
      splitNumber:5,
    }
  ],
  series : [
    {
      name:'库存量',
      type:'line',
      data:[18945,9087,12000,12098,7865,19908,10008]
    }
  ]
});
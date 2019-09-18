define({
  widget:'echart',
  grid:{
    x:50,
    y:50,
    x2:40,
    y2:25
  },
  title:{
    text:'24小时产量趋势',
    textStyle:{
      fontSize:16
    }
  },
  xAxis : [
    {
      type : 'category',
      name : '小时',
      data : [
        "0","1","2","3","4","5","6","7","8","9","10",
        "11","12","13","14","15","16","17","18","19","20",
        "21","22","23"
      ]
    }
  ],
  yAxis : [
    {
      type : 'value',
      name : '产量',
      axisLabel : {
        formatter: '{value}'
      },
      splitNumber:5,
    }
  ],
  series : [
    {
      name:'产量',
      type:'line',
      data:[
        8,4,7,9,10,2,0,1,1,5,
        2,4,7,9,5,2,0,11,2,15,
        3,0,0,0
      ]
    }
  ]
});
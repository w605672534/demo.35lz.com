define({
  widget:'echart',
  tooltip : {
    trigger: 'axis'
  },
  legend: {
    data:['KPI']
  },
  grid:{
    x:40,
    y:40,
    x2:50,
    y2:25
  },
  xAxis : [
    {
      type : 'category',
      data : [
        '1','2','3','4','5','6','7','8','9','10',
        '11','12'
      ]
    }
  ],
  yAxis : [
    {
      type : 'value',
      name : 'KPI',
      axisLabel : {
        formatter: '{value} '
      },
      splitNumber:5
    }
  ],
  series : [
    {
      name:'KPI',
      type:'bar',
      data:[
        100, 80, 70, 90, 200, 150, 80, 125, 60, 50,
        100, 80
      ],
    }
  ]
});
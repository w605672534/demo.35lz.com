define({
  widget:'echart',
  tooltip : {
    trigger: 'axis'
  },
  legend: {
    data:['压力']
  },
  grid:{
    x:40,
    y:40,
    x2:0,
    y2:25
  },
  xAxis : [
    {
      type : 'category',
      data : [
        '1','2','3','4','5','6','7','8','9','10',
        '11','12','13','14','15','16','17','18','19','20',
        '21','22','23','24','25','26','27','28','29','30'
      ],
      axisLine : {
        show:false
      },
      axisLabel : {
        show:false
      },
      splitLine : {
        show:true
      }
    }
  ],
  yAxis : [
    {
      type : 'value',
      name : '压力',
      axisLabel : {
        formatter: '{value}'
      },
      splitNumber:5
    }
  ],
  series : [
    {
      name:'压力',
      type:'line',
      data:[
        90, 100, 85, 105, 80, 80, 80, 90, 90, 40,
        90, 100, 85, 105, 80, 80, 80, 90, 90, 40,
        90, 100, 85, 105, 80, 80, 80, 90, 90, 40
      ],
      /*markLine : {
          data : [
              {type : 'average', name : '平均值', itemStyle:{normal:{color:'#dc143c'}}}
              //{name : '参考值', value:80}
          ]
      }*/
    }
  ]
});
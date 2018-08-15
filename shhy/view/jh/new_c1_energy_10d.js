define({
  widget:'echart',
  tooltip : {
    trigger: 'axis'
  },
  grid:{
    x:40,
    y:3,
    x2:0,
    y2:3
  },
  xAxis : [
    {
      type : 'category',
      data : [
        '1','2','3','4','5','6','7','8','9','10'
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
      name : '水',
      axisLabel : {
        formatter: '{value}'
      },
      splitNumber:5
    }
  ],
  series : [
    {
      name:'水',
      type:'line',
      data:[
        290, 200, 185, 105, 180, 180, 180, 190, 190, 140
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
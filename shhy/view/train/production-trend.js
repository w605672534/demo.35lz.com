define({
  widget:'echart',
  dataset:'Train/TRAIN/production_trend_qry',
  params:{
    'PRODUCT_ID':null
  },
  tooltip : {
    trigger: 'axis'
  },
  legend: {
    data:['甲醇']
  },
  grid:{
    x:40,
    y:40,
    x2:5,
    y2:25
  },
  xAxis : [
    {
      type : 'category',
      data :  [
        '1','2','3','4','5','6','7','8','9','10',
        '11','12','13','14','15','16','17','18','19','20',
        '21','22','23','24','25','26','27','28','29','30'
      ]
    }
  ],
  yAxis : [
    {
      type : 'value',
      axisLabel : {
        formatter: '{value}'
      },
      scale : true
    }
  ],
  series : [
    {
      name:'甲醇',
      type:'bar',
      data:'PRODUCTION_VAL'
    }
  ]
});
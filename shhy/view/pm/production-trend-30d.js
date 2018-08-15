define({
  widget:'echart',
  params:{
    'PRODUCT_ID':null
  },
  dataset:'HYMII/PM/production_trend_qry',
  grid:{
    x:40,
    y:40,
    x2:50,
    y2:25
  },
  xAxis : [
    {
      type : 'category',
      data : 'INPUT_TIME',
      axisLabel : {
        formatter: function(value){
          return (value + '').slice(-2);
        }
      }
    }
  ],
  yAxis : [
    {
      type : 'value',
      name : '产品产量',
      axisLabel : {
        formatter: '{value} '
      },
      splitNumber:5
    },
    {
      type : 'value',
      name : '计划完成率',
      axisLabel : {
        formatter: '{value} %'
      },
      splitNumber:5,
      max:120
    }
  ],
  series : [
    {
      name:'产品产量',
      type:'bar',
      data:'PRODUCTION_VAL',
    },
    {
      name:'计划完成率',
      type:'line',
      yAxisIndex: 1,
      data:'MONTH_RATE'
    }
  ]
});
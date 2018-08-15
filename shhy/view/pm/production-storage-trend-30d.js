define({
  widget:'echart',
  dataset:'HYMII/PM/production_trend_qry',
  params:{
    'PRODUCT_ID':null
  },
  grid:{
    x:60,
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
      name : '库存量',
      axisLabel : {
        formatter: '{value} '
      },
      splitNumber:5
    },
    {
      type : 'value',
      name : '库存率',
      axisLabel : {
        formatter: '{value} %'
      },
      splitNumber:5,
      max:120
    }
  ],
  series : [
    {
      name:'库存量',
      type:'bar',
      data:'STOCK_VAL',
    },
    {
      name:'库存率',
      type:'line',
      yAxisIndex: 1,
      data:'STOCK_RATE'
    }
  ]
});
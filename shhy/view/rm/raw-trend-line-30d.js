define({
  widget:'echart',
  dataset:'HYMII/RM/raw_stock_trend_qry',
  params:{
    RAW_ID:null
  },
  grid:{
    x:40,
    y:40,
    x2:10,
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
      name:'库存率',
      type:'line',
      data:'STOCK_RATE'
    }
  ]
});
define({
  widget:'echart',
  dataset:'HYMII/RM/raw_stock_trend_qry',
  params:{
    RAW_ID:null
  },
  grid:{
    x:50,
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
      name : '库存量',
      axisLabel : {
          formatter: '{value} '
      },
      splitNumber:5
    }
  ],
  series : [
    {
      name:'库存量',
      type:'bar',
      data:'STOCK_VAL'
    }
  ]
});
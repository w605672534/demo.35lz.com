define({
  widget:'echart',
  dataset:'HYMII/UOM/corp_unit_load_history_qry',
  params:{
    'UNIT_LOAD_TAG':null
  },
  tooltip : {
    trigger: 'axis'
  },
  legend: {
    data:['负荷']
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
      data : 'UNIT_LOAD_TIME',
      axisLabel : {
        formatter: ' '
      },
       boundaryGap : false
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
      name:'负荷',
      type:'line',
      data:'UNIT_LOAD_VALUE'
    }
  ]
});
define({
  widget:'echart',
  params:{
    'UNIT_ID':1
  },
  dataset:'HYMII/UOM/unit_stop_total_type_qry',
  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  title:{
    text:'装置停机时长月累计',
    textStyle:{
      fontSize:16
    }
  },
  series : [
    {
      name:'停车时长',
      type:'pie',
      data:['RECORD_TYPE','TOTAL_MONTH']
    }
  ]
});
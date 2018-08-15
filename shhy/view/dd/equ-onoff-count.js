define({
  widget:'echart',
  params:{
    'EQU_ID':1
  },
  dataset:'HYMII/UOM/equ_stop_total_type_qry',
  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  title:{
    text:'设备停车时长月累计',
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
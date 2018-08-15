define({
  widget:'echart',
  dataset:'Train/TRAIN/corp_unit_state_count_qry',
  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  title:{
    text:'停机时长月累计',
    textStyle:{
      fontSize:16
    }
  },
  legend: {
    x : 'left',
    y : '40px',
    data : ['停车','运行']
  },
  series : [
    {
      name:'装置停车时长',
      type:'pie',
      radius : '50%',
      center: ['50%', '60%'],
      data:function(rows){
        return rows.length ? [
            {
              name:'停车',
              value:rows[0]['stop_count']
            },
            {
              name:'运行',
              value:rows[0]['running_count']
            }
          ] : [];
      }
    }
  ]
});
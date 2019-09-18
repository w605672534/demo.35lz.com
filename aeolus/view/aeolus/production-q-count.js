define({
  widget:'echart',
  dataset:'AL/production-q-count',
  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  title:{
    text:'不合格原因分析',
    textStyle:{
      fontSize:16
    }
  },
  legend: {
    orient : 'vertical',
    x : 'left',
    y : 40
  },
  series : [
    {
      name:'不合格数',
      type:'pie',
      radius : '60%',
      center : ['60%','65%'],
      data:['原因','数量'],
      itemStyle : {
        normal : {
          label : {
              show : false
          },
          labelLine : {
              show : false
          }
        }
      }
    }
  ]
});
define({
  dataset:'',
  xAxis :[{
    data : []
  }],
  yAxis:[
    {
      name : '产量',
      axisLabel : {
        formatter: '{value} '
      },
      splitNumber:5
    },
    {
      name : '完成率',
      axisLabel : {
        formatter: '{value} %'
      },
      splitNumber:5
    }
  ],
  series : [
    {
      name:'产品产量',
      type:'bar',
      data:[],
    },
    {
      name:'计划完成率',
      type:'line',
      yAxisIndex: 1,
      data:[]
    }
  ]
});
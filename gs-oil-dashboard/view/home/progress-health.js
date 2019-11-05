
define({
  widget: 'echart',
  option: {
    tooltip : {
      trigger: 'item',
      formatter: "{b} : {d}%"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['优秀','良好','一般','较差','差']
    },
    series : [
      {
        name: '健康状况',
        type: 'pie',
        radius : '80%',
        center: ['60%', '55%'],
        data:[
          {value:600, name:'优秀'},
          {value:310, name:'良好'},
          {value:234, name:'一般'},
          {value:135, name:'较差'},
          {value:90, name:'差'},
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          normal:{
            label:{
              show: true,
              formatter: '{d}%'
            },
            labelLine:{
              show:true
            },
          },
        },
        label:{
          normal:{
            position:'inner'
          }

        }
      }
    ]
  }
});

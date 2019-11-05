define({
  widget: 'echart',
  option: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
                backgroundColor: '#54bfc8'
        }
      }
    },
    legend: {
      data:['平均分数','分数升降趋势']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '0',
        containLabel: true
      },
    xAxis: [
      {
        type: 'category',
        data: ['2017-02','2017-03','2017-04','2017-05','2017-06','2017-07','2017-08','2017-09','2017-10','2017-11','2017-12','2018-01'],
        axisPointer: {
          type: 'shadow'
        },
        axisLabel:{
          rotate:45
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '平均分数',
        min: 0,
        max: 5,
        interval: 1,
        axisLabel: {
          formatter: '{value}'
        },
        nameTextStyle: {
          color:'#54bfc8',
        }
      },
      {
        type: 'value',
        name: '分数升降趋势',
        min: 0,
        max: 100,
        interval: 20,
        axisLabel: {
          formatter: '{value}%'
        },
        nameTextStyle: {
          color:'#54bfc8',
        }
      }
    ],
    series: [
      {
        name:'平均分数',
        type:'bar',
        data:[1, 1.1, 1.65, 2.25, 3.15,2.5,2.02, 2.15, 1.83, 3.8, 3.6, 3.1]
      },
      {
        name:'分数升降趋势',
        type:'line',
        yAxisIndex: 1,
        data:[55, 28, 36, 50, 67, 50, 40, 43, 36, 78, 72, 69]
      }
    ]
  }
});

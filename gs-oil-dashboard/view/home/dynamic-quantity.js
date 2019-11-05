define({
  widget: 'echart',
  option: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['完工项目', '在建项目','新增项目']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '0',
      top:'14%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: ['2016-07','2016-08','2017-09','2017-10','2017-11','2017-12']
    },
    series: [
      {
        name: '完工项目',
        type: 'bar',
        data: [23, 42, 42, 25, 27, 40]
      },
      {
        name: '在建项目',
        type: 'bar',
        data: [35, 49, 14, 44, 47, 33]
      },
      {
        name: '新增项目',
        type: 'bar',
        data: [34, 25, 46, 35, 47, 33]
      }
    ]
  }
});

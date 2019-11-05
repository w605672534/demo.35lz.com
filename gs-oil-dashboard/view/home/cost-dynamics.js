define({
  widget: 'echart',
  option: {
    angleAxis: {
      type: 'category',
      data: ['2016-07','2016-08','2017-09','2017-10','2017-11','2017-12'],
      z: 10
    },
    radiusAxis: {
    },
    polar: {
      z:'3'
    },
    tooltip:{
      show: true,
      trigger: 'item',
      axisPointer:{
        type: 'line',
        axis: 'auto',
      }
    },
    legend: {
      show: true,
      data: ['人员费用', '管理费用', '财务费用']
    },
    series: [{
      type: 'bar',
      data: [1, 2, 3, 4, 3, 5, 1],
      coordinateSystem: 'polar',
      name: '人员费用',
      stack: 'a'
    }, {
      type: 'bar',
      data: [2, 4, 6, 1, 3, 2, 1],
      coordinateSystem: 'polar',
      name: '管理费用',
      stack: 'a'
    }, {
      type: 'bar',
      data: [1, 2, 3, 4, 1, 2, 5],
      coordinateSystem: 'polar',
      name: '财务费用',
      stack: 'a'
    }],
  }
});

define({
  widget: 'echart',
  dataset: {
    items: [{
      name: 'material-group'
    }]
  },
  option: {
    title: {
      subtext: '单位：吨',
      top: -15,
      x: 'right',
    },
    tooltip: {
      trigger: 'item',
      formatter: "{b} ：{c} ：{d}%"
    },
    legend: {
      bottom: 10,
      left: 'center'
    },
    series: [{
      name: '化学品占比',
      type: 'pie',
      radius: ['50%', '75%'],
      center: ['50%', '45%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },emphasis: {
          show: true,
          textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
          }
        }
      },
      data: function (rows) {
        return rows.map(function (item) {
          return {
            name: item.material_name,
            value: item.load
          }
        });
      },
    }]
  }
});
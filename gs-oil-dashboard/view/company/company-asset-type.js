define({
  widget: 'echart',
  dataset: {
    items: [{
      name: 'company-factory-asset'
    }]
  },
  option: {
    tooltip: {
      trigger: 'item',
      formatter: "{b} : {c}个,占{d}%"
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: ['城镇供排水', '村镇污水', '水生态'],
    },
    color: ['#722ed1', '#fff566', '#ff7875'],
    toolbox: {
      show: true,
      feature: {
        mark: {
          show: true
        },
        magicType: {
          show: true,
          type: ['pie', 'funnel']
        }
      }
    },
    calculable: true,
    series: [{
      name: '类型占比',
      type: 'pie',
      radius: [40, 110],
      roseType: 'area',
      center: ['55%', '35%'],
      data: function (rows) {
        return rows.map(function (item) {
          return {
            name: item.asset_type,
            value: item.factory_num
          }
        });
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
        normal: {
          label: {
            show: false,
          },
          labelLine: {
            show: true
          },
        },
      },
      label: {
        normal: {
          position: 'inner'
        }
      }
    }]
  }
});

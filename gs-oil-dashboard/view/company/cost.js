define({
  widget: 'echart',
  dataset: {
    items: [{
      name: 'company-cost',
      params: [
        {
          name: 'current_month',
          value: ''
        }
      ]
    }]
  },
  option: {
    title: {
      subtext: '单位：万元',
      top: -15,
      x: 'right',
    },
    tooltip: {
      trigger: 'item',
      formatter: "{b} ：{c} ：{d}%"
    },
    legend: {
      bottom: 10,
      left: 'center',
      data: ['绵竹','吴忠','汝州','什邡','大同','黄石','安阳','榆林'],
    },
    series: [{
      name: '收入占比',
      type: 'pie',
      radius: '75%',
      center: ['50%', '45%'],
      data: function (rows) {
        return rows.map(function (item) {
          return {
            name: item.abbreviation,
            value: item.cost
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
            formatter: '{c}',
            fontSize: 16
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
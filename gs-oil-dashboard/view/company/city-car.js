define({
  widget: 'echart',
  dataset: {
      items: [{
          name: 'pre-city-car-total'
      }]
  },
  option: {
      title: {
          subtext: '单位：(辆)',
          x: 'right',       
      },
      tooltip: {
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'shadow'
              }
          },
      },
      grid: {
          left: '1%',
          right: '1%',
          bottom: '5%',
          containLabel: true
      },
      xAxis: {
          type: 'value',
          name: '',
          nameGap:'-20',
          nameTextStyle:{
              verticalAlign:'bottom'
          },
          boundaryGap: [0, 0.01],
      },
      
      yAxis: {
          type: 'category',
          data: 'way',
          textStyle: {
              color: 'rgba(255, 255, 255, 0.85)'
          }
      },
      series: [
          {
              name: 'total',
              type: 'bar',
              barWidth: '10%',
              data: function(rows) {
                  return rows.map(function(item) {
                      return { name: item.way, value: item.car_total }
                  });
              },
          }
      ]
  }
});
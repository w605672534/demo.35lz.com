/**
 * Created by xyt-imac-02 on 2018/3/13.
 */
define({
    widget: 'echart',
    dataset: {
        items: [{
            name: 'company-pre-cost-town-czws',
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
            subtext: '',
            x: 'right',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#1890ff'
                }
            },
        },
        grid: {
            left: '6%',
            right: '6%',
            bottom: '6%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: 'abbreviation',
            axisLabel: {
                rotate: 45
            }
        }],
        yAxis: [{
            type: 'value',
            name: '吨水成本（元）',
        }],
        series: [{
            name: '吨水成本',
            type: 'line',
            data: function(rows) {
                return rows.map(function(item) {
                    return { name: item.abbreviation, value: item.water_cost }
                });
            }
        }, ]
    }
});
/**
 * Created by xyt-imac-02 on 2018/3/13.
 */
define({
    widget: 'echart',
    dataset: {
        items: [{
            name: 'company-factory-charges',
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
            }
        },
        legend: {
            data: ['实收', '应收']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: 'abbreviation',
            axisLabel: {
                rotate: 45,
                type: 'shadow'
            }
        }, ],
        yAxis: [{
            type: 'value',
            name: '单位（万元）',
        }],
        series: [{
                name: '实收',
                type: 'bar',
                data: function(rows) {
                    return rows.map(function(item) {
                        return {
                            name: item.abbreviation,
                            value: item.real_charges
                        }
                    });
                }
            },
            {
                name: '应收',
                type: 'bar',
                data: function(rows) {
                    return rows.map(function(item) {
                        return {
                            name: item.abbreviation,
                            value: item.due_charges
                        }
                    });
                }
            }
        ]
    }
});

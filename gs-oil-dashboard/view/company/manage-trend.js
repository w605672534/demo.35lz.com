define({
    widget: 'echart',
    dataset: {
        items: [{
            name: 'status-num',
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
            data: ['已检查（车次）', '未检查（车次）']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: 'way',
            axisLabel: {
                rotate: 45,
                type: 'shadow'
            }
        }, ],
        yAxis: [{
                type: 'value',
                name: '已检查（车次）',

            },
            {
                type: 'value',
                name: '未检查（车次）',
            }
        ],
        series: [{
                name: '已检查',
                type: 'bar',
                data: function(rows) {
                    return rows.map(function(item) {
                        return { name: item.way, value: item.finish_num }
                    });
                }
            },
            {
                name: '未检查',
                type: 'bar',
                data: function(rows) {
                    return rows.map(function(item) {
                        return { name: item.way, value: item.going_num }
                    });
                }
            }
        ]
    }
});

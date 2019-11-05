define({
    widget: 'echart',
    dataset: {
        items: [{
            name: 'company-factory-type',
            delayed: true
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
            data: ['市政污水', '市政供水', '工业/园区供水', '工业/园区污水','村镇污水']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel']
                }
            }
        },
        calculable : true,
        series: [{
            name: '类型占比',
            type: 'pie',
            // radius: '70%',
            radius : [40, 110],
            roseType : 'area',
            center: ['55%', '35%'],
            data: function(rows) {
                return rows.map(function(item) {
                    return { name: item.type, value: item.factory_num }
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
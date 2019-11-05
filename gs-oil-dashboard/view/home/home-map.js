define({
    widget: 'echart',
    option: {
        title: {
            text: '全省加油站数量分布情况',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: function(data) {
                return [data.value[3], ' : ', data.value[2]].join('');
            }
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#3eede7',
                    borderColor: '#013d42'
                },
                emphasis: {
                    areaColor: '#70f3ff'
                }
            }
        },
        color: ['#f9ed5f'],
        series: [{
            name: '全国分布',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolPosition: 'end',
            symbolSize: [18, 24],
            symbolOffset: [0, -12],
            symbol: 'path://M512 0C300.144 0 128.454 140.846 128.454 376.474c0 235.62 222.595 308.371 383.546 647.526 162.67-340.942 383.546-421.234 383.546-647.526S723.817 0 512 0z m0 576.048c-118.255 0-191.773-76.402-191.773-191.78S387.977 192.494 512 192.494c124.031 0 191.773 73.51 191.773 191.774S630.263 576.04 512 576.04z',
            label: {
                normal: {
                    show: true,
                    color: '#fff',
                    offset: [0, -20]
                },
                emphasis: {
                    show: true
                }
            },
            data: function() {
                var geoCoordMap = {
                    "张掖": [100.46331, 38.960576],
                    "酒泉": [95.782362, 40.208959],
                    "嘉峪关": [98.288155, 39.778626],
                    "金昌": [102.195181, 38.525594],
                    "武威": [102.897517, 37.764785],
                    "甘南": [103.1236, 34.490355],
                    "陇南": [104.936049, 33.401074],
                    "庆阳": [107.659734, 35.737485],
                    "白银": [104.145026, 36.552448],
                    "定西": [104.485242, 34.865975],
                    "天水": [105.736591, 34.583846],
                    "平凉": [106.692676, 35.54228],
                    "临夏": [103.216966, 35.608266],
                    "兰州": [103.73, 36.03]
                };

                var projectGeo = [{
                        city: '兰州'
                    },
                    {
                        city: '张掖'
                    },
                    {
                        city: '酒泉'
                    },
                    {
                        city: '嘉峪关'
                    },
                    {
                        city: '金昌'
                    },
                    {
                        city: '武威'
                    },
                    {
                        city: '甘南'
                    },
                    {
                        city: '陇南'
                    },
                    {
                        city: '庆阳'
                    },
                    {
                        city: '白银'
                    },
                    {
                        city: '定西'
                    },
                    {
                        city: '天水'
                    },
                    {
                        city: '平凉'
                    },
                    {
                        city: '临夏'
                    }
                ];

                return projectGeo.map(function(el) {
                    return geoCoordMap[el.city].concat(parseInt(Math.random() * 200), el.city);
                });
            }
        }]
    }
});
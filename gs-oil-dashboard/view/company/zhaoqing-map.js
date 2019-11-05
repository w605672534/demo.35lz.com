define({
    widget: 'echart',
    dataset: {
        items: [{
            name: 'company-factory-station'
        }]
    },
    option: {
        events: {
            click: function(params) {
                if (params.value) {
                    this.$router.push('/page/zhaoqing.index?company_id=zhaoqing&factory_name=肇庆水厂');
                }
            }
        },
        title: {
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: function(data) {
                return [data.value[5], ' : ', data.value[6]].join('');
            }
        },
        geo: {
            map: 'zhaoqing',
            zoom: 1,
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#5cdbd3',
                    borderColor: '#002766'
                },
                emphasis: {
                    areaColor: '#69c0ff'
                }
            }
        },
        color: ['#f9ed5f'],
        series: [{
            name: '肇庆分布',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolPosition: 'end',
            symbolSize: [18, 24],
            symbolOffset: [0, -12],
            symbol: 'path://M512 0C300.144 0 128.454 140.846 128.454 376.474c0 235.62 222.595 308.371 383.546 647.526 162.67-340.942 383.546-421.234 383.546-647.526S723.817 0 512 0z m0 576.048c-118.255 0-191.773-76.402-191.773-191.78S387.977 192.494 512 192.494c124.031 0 191.773 73.51 191.773 191.774S630.263 576.04 512 576.04z',
            data: function(rows) {
                var data = [];
                var geoCoordMap = {};
                rows.forEach(function(item) {
                    geoCoordMap[item.station_name] = [item.longitude, item.latitude];
                    data.push({
                        value: [item.longitude, item.latitude, '', item.station_name, item.station_id, item.station_alias, item.station_category],
                        symbol: 'pin',
                        symbolSize: 15
                    })
                });
                data = data.map(function(item, index) {
                    item.itemStyle = { normal: { color: '#fa8c16' } };
                    return item;
                });
                var myChart = this.getCharts(this.chart);
                setTimeout(function () {
                    myChart.on('mouseup', function (params) {
                        if (!down || !params.componentSubType == 'scatter') {
                            return;
                        }
                        down = false;
                        var e = params.event;
                        var geoCoord = myChart.convertFromPixel('series', [e.offsetX, e.offsetY]);
                        myChart.setOption({
                            geo: {
                                center: geoCoord,
                                zoom: 10,
                                animationDurationUpdate: 1000,
                                animationEasingUpdate: 'cubicInOut'
                            }
                        });
                    });
                
                    var down;
                    myChart.on('mousedown', function () {
                        down = true;
                    });
                    myChart.on('mousemove', function () {
                        down = false;
                    });
                    myChart.getZr().on('mousewheel', function () {
                        myChart.getZr().dom.onmousewheel=false;
                        return false;
                    });
                    myChart.on('dblclick',function(params) {
                        var e = params.event;
                        var geoCoord = geoCoord = myChart.resize();
                        myChart.setOption({
                            geo: {
                                center: geoCoord,
                                zoom: 1,
                                animationDurationUpdate: 1000,
                                animationEasingUpdate: 'cubicInOut'
                            }
                        });
                    });
                
                }, 0);
                return data;
            }
        }]
    }
});
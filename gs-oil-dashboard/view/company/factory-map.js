define({
    widget: 'echart',
    dataset: {
        items: [{
            name: 'pre-city-total'
        }]
    },
    option: {
        title: {
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: function(data) {
                return [data.value[4], ' : ', data.value[5], ].join('');
            }
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center'
        },
        animation: true,
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'cubicInOut',
        geo: {
            map: 'gansu',
            label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: '#e6f7ff'
                  }
                },
                emphasis: {
                  show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#69c0ff',
                }
            },
            regions: [
                {
                    name: '浙江',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '河北',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '江苏',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '安徽',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '北京',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '天津',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '内蒙古',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '山东',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '吉林',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '青海',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '云南',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '重庆',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '贵州',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '甘肃',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '西藏',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '黑龙江',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '广西',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '新疆',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '辽宁',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '上海',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '湖南',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '江西',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '福建',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '黑龙江',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                },
                {
                    name: '内蒙古',
                    itemStyle: {
                        normal: {
                            areaColor: '#69c0ff'
                        }
                    }
                }
            ]
        },
        series: [{
            name: '水厂分布',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            symbolPosition: 'end',
            symbolOffset: [0, -12],
            showEffectOn: 'emphasis',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    show: false,
                    color: '#fff',
                    offset: [0, -20],

                },
                emphasis: {
                    show: true
                }
            },
            data: function(rows) {
                var data = [];
                var geoCoordMap = {};
                rows.forEach(function(item) {
                    geoCoordMap[item.name] = [item.longitude, item.latitude];
                    data.push({
                        value: [item.longitude, item.latitude, '', item.factory_id, item.way, item.way, item.total],
                        symbolSize: 15
                    })
                });
                var colorMap = {
                    '城镇供排水': '#722ed1',
                    '水生态': '#ff7875',
                    '村镇污水': '#fff566',
                    '其他': 'rgba(7,255,112,1)'
                  }
                var alarmColor = 'red'
                var itemSymbolSize = [20,20];
                if (window.innerWidth <= 880) { 
                    itemSymbolSize = [20,20];
                }
                data = data.map(function(item, index) {
                    if (item.value[6]) {
                        item.itemStyle = { normal: { color: alarmColor} };
                    } else {
                        item.itemStyle = { normal: { color: colorMap[item.value[5]] } };
                    }
                    item.symbol='circle'
                    item.symbolSize = itemSymbolSize
                    return item;
                });       
                return data;
            }
        }
    ],
    },
});
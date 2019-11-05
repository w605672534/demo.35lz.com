/**
 * Created by xyt-imac-02 on 2018/3/13.
 */
define({
    widget: 'echart',
    dataset: {
        items: [{
            name: 'company-manage-kpi',
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

        // legend: {
        //   show: true,
        //   data:function(rows){
        //     return rows.map(function(item){
        //       return {name: item.income}
        //     });
        //   }
        // },
        legend: {
            data: ['收入', '成本', '净利润']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: 'company_name',
            axisLabel: {
                rotate: 45,
                type: 'shadow'
            }
        }, ],
        yAxis: [{
                type: 'value',
                name: '单位（万元）',

            },
            {
                type: 'value',
                name: '净利润（万元）',
            }
        ],
        series: [{
                name: '收入',
                type: 'bar',
                data: function(rows) {
                    return rows.map(function(item) {
                        return { name: item.company_name, value: item.income }
                    });
                }
            },
            {
                name: '成本',
                type: 'bar',
                data: function(rows) {
                    return rows.map(function(item) {
                        return { name: item.company_name, value: item.cost_count }
                    });
                }
            },
            {
                name: '净利润',
                type: 'line',
                yAxisIndex: 1,
                data: function(rows) {
                    return rows.map(function(item) {
                        return { name: item.company_name, value: item.net_profit }
                    });
                }
            }
        ]
    }
});

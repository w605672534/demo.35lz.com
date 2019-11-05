/**
 * Created by xyt-imac-02 on 2018/3/13.
 */
define({
    widget: 'echart',
    dataset: {
        items: [{
            name: 'company-product-kpi',
            delayed: true
        }]
    },
    option: {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#1890ff'
                }
            },
        },
        legend: {
            data: ['进水量', '出水量']
        },
        // legend: {
        //   data:function(rows){
        //     return rows.map(function(item){
        //       return {name: item.in_water }
        //     });
        //   }
        // },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: 'factory_name',
            axisLabel: {
                rotate: 45,
                fontSize: 16
            }
        }],
        yAxis: [{
            type: 'value',
            name: '单位（万吨）',
        }],
        series: [{
                name: '进水量',
                type: 'line',
                data: function(rows) {
                    return rows.map(function(item) {
                        return { name: item.company_name, value: item.in_water }
                    });
                }
            },
            {
                name: '出水量',
                type: 'line',
                data: function(rows) {
                    return rows.map(function(item) {
                        return { name: item.company_name, value: item.out_water }
                    });
                }
            }
        ]
    }
});
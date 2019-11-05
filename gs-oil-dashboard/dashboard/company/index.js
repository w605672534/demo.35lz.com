define({
    name: '主页',
    params: [
        {
            name: 'current_month',
            value: ''
        }
    ],
    views: [
        {
            id: '12',
            title: '各市稽查总量',
            column: 3,
            view: 'view/company/processing-capacity.js',
            height: 340,
            xs: 24
        },
        {
            id: '7',
            column: 6,
            view: 'view/company/real-total-amount.js',
            className: 'panel-notitle panel-noframe',
            height: 100,
            xs: 24,
        },
        {
            id: '6',
            view: 'view/company/total-amount.js',
            className: 'panel-notitle panel-noframe',
            height: 100,
            xs: 24,
        },
        {
            id: '4',
            view: 'view/company/factory-map.js',
            height: 540,
            xs: 24,
            className: 'panel-noframe year-income'
        },
        {
            id: '11',
            title: '各市稽查车次',
            column: 3,
            view: 'view/company/city-car.js',
            height: 340,
            xs: 24,
        },
        {
            id: '1',
            title: '月度收入占比',
            column: 3,
            xs: 24,
            view: 'view/company/income.js',
            height: 340
        },
        {
            id: '5',
            title: '月度收入成本对比',
            column: 6,
            xs: 24,
            view: 'view/company/manage-trend.js',
            height: 340
        },
        {
            id: '3',
            title: '月度成本占比',
            column: 3,
            xs: 24,
            view: 'view/company/cost.js',
            height: 340
        }
    ]
});

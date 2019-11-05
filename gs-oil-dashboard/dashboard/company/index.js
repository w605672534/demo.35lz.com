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
            id: '1',
            title: '化学品占比分析',
            xs: 24,
            view: 'view/company/income.js',
            height: 340
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
            id: '112',
            title: '油品占比分析',
            view: 'view/company/company-asset-type.js',
            height: 340,
            xs: 24,
        },
        {
            id: '5',
            title: '各市检查未检查数分析',
            column: 12,
            xs: 24,
            view: 'view/company/manage-trend.js',
            height: 340
        }
    ]
});

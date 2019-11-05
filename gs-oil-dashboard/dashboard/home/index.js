define({
    name: '主页',
    views: [{
            id: '0',
            title: '公司总览',
            column: 3,
            view: 'view/home/company-overview.js',
            className: 'panel-top-right',
            height: 320
        },
        {
            id: '1',
            title: '民情通办理今日结果',
            view: 'view/home/handle.js',
            className: 'panel-bottom-right',
            created: function(view) {
                var labels = {
                    day: '今日',
                    month: '月累',
                    year: '年累'
                };
                this.$watch(function() {
                    return this.$store.state.params['home.index']['dimension']
                }, function() {
                    this.view.title = '民情通办理' + labels[this.$store.state.params['home.index']['dimension']] + '结果';
                })
            }
        },
        {
            id: '2',
            column: 6,
            view: 'view/home/home-map.js',
            height: 700,
            className: 'panel-noframe'
        },
        {
            id: '3',
            column: 3,
            title: '年度服务评价趋势',
            view: 'view/home/project-type-trend.js',
            className: 'panel-top-left',
            height: 330
        },
        {
            id: '4',
            title: '加油站排行榜',
            view: 'view/home/construction-project.js',
            className: 'panel-bottom-left panel-title-right',
        },
    ]
});
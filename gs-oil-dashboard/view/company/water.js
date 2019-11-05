
define({
  widget: 'block',
  option: {
    mode: 'tabs',
    params: [
      {
        name: 'current_month',
        value: ''
      }
    ],
    views: [
      {
        id: '1',
        column: 24,
        title: '市政污水',
        view: 'view/company/ton-water.js',
        className: 'panel-height',
        height: 350
      },
      {
        id: '1',
        column: 24,
        title: '市政供水',
        view: 'view/company/service-water.js',
        className: 'panel-height',
        height: 350
      },
      {
        id: '3',
        column: 24,
        title: '工业/园区污水',
        view: 'view/company/factory-water.js',
        className: 'panel-height',
        height: 350
      },
      {
        id: '1',
        column: 24,
        title: '工业/园区供水',
        view: 'view/company/factory-service-water.js',
        className: 'panel-height',
        height: 350
      },
      {
        id: '5',
        column: 24,
        title: '村镇污水',
        view: 'view/company/factory-town-water.js',
        className: 'panel-height',
        height: 350
      },
    ]
  }
});

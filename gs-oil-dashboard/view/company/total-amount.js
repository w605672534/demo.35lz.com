
define({
  widget: 'block',
  option: {
    views: [
      {
        id: '1',
        column: 8,
        xs:24,
        view: 'view/company/design-amount.js',
        className:'panel-height'
      },
      {
        id: '3',
        column: 8,
        xs:24,
        view: 'view/company/asset-amount.js',
        className:'panel-height'
      },
      {
        id: '4',
        column: 8,
        xs:24,
        view: 'view/company/income-amount.js',
        className:'panel-height'
      }
    ]
  }
});

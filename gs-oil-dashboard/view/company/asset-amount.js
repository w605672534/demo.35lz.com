define({
  widget: 'static',
  dataset: {
    items: [
      {
        name: 'total-car'
      }
    ]
  },
  option: {
    gutter: 0,
    column: 24,
    xs: 24,
    component: {
      props: ['data'],
      template: `
      <div class="col-center-top row " v-if="data.length">
        <div class="count-title">
          稽查车辆总数
          <p class="count-num">{{data[0]['car_total']}}<span>辆</span></p>
        </div>
      </div>
      `
    }
  }
});

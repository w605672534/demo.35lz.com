define({
  widget: 'static',
  dataset: {
    items: [
      {
        name: 'total-address'
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
      <div class="col-center-top row" v-if="data.length">
        <div class="count-title">
          站点总数
          <p class="count-num">{{data[0].address_total}}<span>处</span></p>
        </div>
      </div>
      `
    }
  }
});

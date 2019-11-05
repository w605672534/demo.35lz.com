/**
 * Created by xyt-imac-02 on 2018/3/14.
 */
define({
  widget: 'static',
  dataset: {
    items: [
      {
        name: 'company-statistics-manage'
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
          年度成本总量
          <p class="count-num">{{data[0]['cost']}}<span>万元</span></p>
        </div>
      </div>
      `
    }
  }
});

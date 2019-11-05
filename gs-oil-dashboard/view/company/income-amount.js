/**
 * Created by xyt-imac-02 on 2018/3/13.
 */
define({
  widget: 'static',
  dataset: {
    items: [
      {
        name: 'total-money'
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
          发票总金额
          <p class="count-num" style="rgba(255,255,255,.6)">{{data[0]['money_total']}}<span>万元</span></p>
        </div>
      </div>
      `
    }
  }
});

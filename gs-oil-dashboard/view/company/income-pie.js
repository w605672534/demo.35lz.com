define({
    widget: 'static',
    dataset: {
        items: [{
            name: 'company-charges',
            params: [
              {
                name: 'current_month',
                value: ''

              }
            ]
        }]
    },
    option: {
        gutter: 0,
        column: 24,
        component: {
            props: ['data'],
            template: `
          <div class="income" style="margin-top: 28px">
              <el-progress type="circle" :width="200" :stroke-width="12" :percentage="parseFloat((Math.abs(data[0]['real_charges']*100) / Math.abs(data[0]['due_charges'])).toFixed(2))" ></el-progress>
              <p class="el-progress__title" style="position:relative;top:-75px;">实收进度</p>
              <div class="container-fuild">
                <div class="row">
                  <div class="el-progress__title col-md-6 col-xs-6" style="text-align: center">营收：<span class="el-progress__num">{{data[0]['due_charges']}}</span></div>
                  <div class="el-progress__title col-md-6 col-xs-6" style="text-align: center">实收：<span class="el-progress__num">{{data[0]['real_charges']}}</span></div>
                </div>
              </div>
          </div>
          `
        }
    }
});

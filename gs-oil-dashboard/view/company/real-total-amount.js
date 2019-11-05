
   define({
    widget: 'grid',
    dataset: {
      items: [
        {
          name: 'total-oil',
          loop: 10
        }
      ]
    },
    option: {
      gutter: 0,
      column: 24,
      xs: 24,
      component: {
        props: ['data'],
        computed: {
          total(){
            return parseInt(this.data.total);
          }
        },
        data: function () {
          var total = this.data.total;
          return {totalDecimal: (total % 1).toFixed(3) * 1000};
        },
        mounted: function () {
          var _this = this;
        },
        template: `
          <div class="text-center" style="margin-bottom:50px">
          <p class="process-water-title fsize-15" style="margin-bottom:10px;">
            实时稽查油品总量
          </p>
          <h1 class="day-water-num process-water-num">
            <span>{{total}}</span>
            <span>.</span>
            <span>{{totalDecimal}}</span>
            <span class="process-water-company fsize-15">吨</span>
          </h1>
        </div>
      `
      }
    }
  });

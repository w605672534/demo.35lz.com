define({
  widget: 'static',
  option: {
    component: {
      template: `
        <div style="display: flex;justify-content:space-around;cursor:pointer" @click="onClick()">
          <div class="progress-circle" v-for="(item, index) in data" :style="{backgroundColor: colors[index]}">
            <span class="progress-number" style="font-size: 14px;">{{item['factory_num']}}</span>
          </div>
        </div>
      `
    }
  }
});

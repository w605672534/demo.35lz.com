define({
    widget: 'static',
    dataset: {
        items: [{
            name: 'factory-alarm'
        }]
    },
    option: {
        gutter: 0,
        column: 24,
        component: {
            props: ['data'],
            template: `
        <div class="col-center-top row" @click="onClickAlarm()" >
            <div class="count-title col-md-6" data-status="off-track" style="cursor: pointer;">
                <h3 class="text-primary text-center" style="width: 100px;height: 100px;background-color: #722ed1;border-radius: 60%;line-height: 100px;margin: 10px auto;font-size: 24px;" data-role="danger">
                  <span style="color: #fff">{{data[0]['equ']}}</span>
                </h3>
                <h6 clss="text-center" style="font-size:14px">设备异常</h6>
            </div>
            <div class="count-title col-md-6" data-status="off-track" style="cursor: pointer;">
                <h3 class="text-primary text-center" style="width: 100px;height: 100px;background-color: #52c41a;border-radius: 60%;line-height: 100px;margin: 10px auto;font-size: 24px;" data-role="danger">
                    <span style="color: #fff">{{data[0]['param']}}</span>
                </h3>
                <h6 class="text-center" style="font-size:14px">关键参数</h6>
            </div>
            <div class="count-title col-md-6" data-status="off-track" >
                <h3 class="text-primary text-center" style="width: 100px;height: 100px;background-color: #1890ff;border-radius: 60%;line-height: 100px;margin: 10px auto;font-size: 24px;" data-role="danger">
                <span style="color: #fff">{{data[0]['quality']}}</span>
                </h3>
                <h6 class="text-center" style="font-size:14px">在线分析</h6>
            </div>
            <div class="count-title col-md-6" data-status="off-track" >
                <h3 class="text-primary text-center" style="width: 100px;height: 100px;background-color: #13c2c2;border-radius: 60%;line-height: 100px;margin: 10px auto;font-size: 24px;" data-role="danger">
                <span style="color: #fff">{{data[0]['test']}}</span>
                </h3>
                <h6 class="text-center" style="font-size:14px">化验</h6>
            </div>
        </div>`,
            methods: {
                onClickAlarm() {
                    this.$parent.$emit('dialog', {
                            title: '报警',
                            view: 'view/factory/alarm-view',
                            height: 560
                        }
                    )
                }
            }
        }
    }
});
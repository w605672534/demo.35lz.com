/**
 * Created by xyt-imac-02 on 2018/3/16.
 */
define({
    widget: 'static',
    dataset: {
        items: [{
            name: 'factory-type'
        }]
    },
    option: {
        component: {
            props: ['data'],
            data: function() {
                return {
                    colors: [
                        '#1890ff',
                        '#13c2c2',
                        '#6839C9'
                    ]
                }
            },
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
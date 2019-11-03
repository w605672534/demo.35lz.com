<template>
   <div style="background: #eeeeee">
      <!-- <uni-steps :options="[{title:'买家下单',desc:'2018-11-11'},{title:'卖家发货',desc:'2018-11-12'},{title:'买家签收',desc:'2018-11-13'},{title:'交易完成',desc:'2018-11-14'}]" direction="column" :active="2"></uni-steps> -->
   </div>
</template>

<script>
// import {uniSteps} from "uni-ui"
	export default {
    components: {
      // uniSteps
    },
		data() {
			return {
        records: [],
			}
		},
		onLoad(option) {
      
		},
		methods: {
      // recordDetile(item) {
      //   wx.navigateTo({
      //     url: `/pages/record-detail/main?record_id=${this.recordId}&detail_id=${item.detail_id}`
      //   })
      // },
      // infoRecord() {
      //   wx.navigateTo({
      //     url: '/pages/customer/main'
      //   })
      // },
      // 扫一扫
      // toScan() {
      //   wx.scanCode({
      //     success: (res) => {
      //       console.log(res)
      //     }
      //   })
      // }
		}
	}
</script>

<style lang="less" scoped>
@import '../../assets/styles/theme/variables.less';
.no-record{
  background: @bg-white;
  font-size: @icon-font;
  margin: @spacing-big*4 auto;
  text-align: center;
  color: @secondary-color-gray;
}
</style>

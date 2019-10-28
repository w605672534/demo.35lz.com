<template>
   <div style="background: #eeeeee">
      <div class="record-list" v-for="(item, index) in record" :key="index">
         <div class="record-item" @click="recordDetile()">
            <div class="record-item-title">{{item.title}}</div>
            <div class="record-item-content">
               <span>{{item.time}}</span>
               <i class="iconfont icon-you"></i>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
	export default {
    components: {
    },
		data() {
			return {
            record: [
               {id: '01', title: '易燃液化汽油', time: '2019-10-27 10:23'},
               {id: '02', title: '易燃汽油', time: '2019-10-25 11:23'},
               {id: '03', title: '易燃液化汽油', time: '2019-10-27 12:23'},
               {id: '04', title: '易燃汽油', time: '2019-10-28 07:23'},
               {id: '05', title: '易燃液化汽油', time: '2019-10-29 09:23'},
               {id: '06', title: '易燃汽油', time: '2019-10-27 15:43'},
               {id: '07', title: '易燃液化汽油', time: '2019-10-27 16:45'},
               {id: '08', title: '易燃汽油', time: '2019-10-27 13:56'}
            ]
			}
		},
		onLoad() {

		},
		methods: {
         recordDetile() {
            wx.navigateTo({
               url: '/pages/record-detail/main'
            })
         },
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
</style>

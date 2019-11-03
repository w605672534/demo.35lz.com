<template>
   <div style="background: #eeeeee">
      <div class="record-list" v-for="(item, index) in record" :key="index">
         <div class="record-item" @click="recordDetile(item)">
            <div class="record-item-title">{{item.car_numbers}}</div>
            <div class="record-item-content">
               <span>{{item.update_time | dateformat('YYYY-MM-DD HH:mm:ss')}}</span>
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
            record: [],
			}
		},
		onLoad() {
         uni.request({
            url: 'http://train.35lz.com/oms/api/traffic-record?_username=yangxiaoyan&_password=123456',
         }).then((success, error) =>{
            this.record = success[1].data.data.collection;
            console.log(this.record,'ssss')
         });
		},
		methods: {
         recordDetile(item) {
            // wx.navigateTo({
            //    url: `/pages/record-detail/main?record_id=${item.record_id}`
            // })
            wx.navigateTo({
               url: `/pages/car-records/main?record_id=${item.record_id}`
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

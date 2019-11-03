<template>
   <div style="background: #eeeeee">
      <div v-if="records.length==0" class="no-record">暂无车辆明细记录</div>
      <div v-else class="record-list" v-for="(item, index) in records" :key="index">
         <div class="record-item" @click="recordDetile(item)">
            <div class="record-item-title">{{item.way_name}}</div>
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
        records: [],
			}
		},
		onLoad(option) {
      this.recordId = option.record_id;
      uni.request({
        url: `http://train.35lz.com/oms/api/traffic-record/${this.recordId}/detail?_username=yangxiaoyan&_password=123456`,
      }).then((success, error) =>{
        this.records = success[1].data.data.collection ? success[1].data.data.collection : '';
      });
		},
		methods: {
      recordDetile(item) {
        wx.navigateTo({
          url: `/pages/record-detail/main?record_id=${this.recordId}&detail_id=${item.detail_id}`
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
.no-record{
  background: @bg-white;
  font-size: @icon-font;
  margin: @spacing-big*4 auto;
  text-align: center;
  color: @secondary-color-gray;
}
</style>

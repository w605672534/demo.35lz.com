<template>
   <div style="background: #eeeeee">
      <div class="record-list" v-for="(item, index) in recordList" :key="index">
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
import { mapState } from 'vuex'
	export default {
      components: {
      },
		data() {
			return {
           
			}
      },
      computed: {
         ...mapState({
            recordList: 'recordList',
         })
      },
		async onLoad() {
         await this.$store.dispatch('carRecord')
		},
		methods: {
         recordDetile(item) {
            wx.navigateTo({
               url: `/pages/car-records/main?record_id=${item.record_id}`
            })
         },
		}
	}
</script>

<style lang="less" scoped>
@import '../../assets/styles/theme/variables.less';
</style>

<template>
   <div style="background: #eeeeee">
      <div v-if="wayList.length==0" class="no-record">暂无车辆明细记录</div>
      <div v-else class="record-list" v-for="(item, index) in wayList" :key="index">
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
import { mapState } from 'vuex'
	export default {
   components: {
   },
   computed: {
      ...mapState({
         wayList: 'wayList',
      })
   },
   data() {
      return {
         recordId: ''
      }
   },
   async onLoad(option) {
      this.recordId = option.record_id;
      await this.$store.dispatch('carRecordWay', { id: this.recordId})
   },
   async onShow() {
      await this.$store.dispatch('carRecordWay', { id: this.recordId})
   },
   methods: {
      recordDetile(item) {
         wx.navigateTo({
            url: `/pages/record-detail/main?detail_id=${item.detail_id}`
         })
      }
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

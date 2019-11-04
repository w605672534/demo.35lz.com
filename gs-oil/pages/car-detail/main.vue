<template>
  <div style="background: #eeeeee">
    <div class="tab-box">
      <div :class="{'weui-bar__item_on':toView == 'unCheck'}" class="weui-navbar__item tab-box-item" @click="tabClick('unCheck')">
        <div class="weui-navbar__title">未检查</div>
      </div>
      <div :class="{'weui-bar__item_on':toView == 'check'}" class="weui-navbar__item tab-box-item" @click="tabClick('check')">
        <div class="weui-navbar__title">已检查</div>
      </div>
    </div>
    <div class="tabbar-content" v-if="toView == 'unCheck'">
      <div class="record-list" v-for="(item, index) in unCheckRecord" :key="index">
        <div class="record-item" @click="recordDetileUncheck(item)">
          <div class="record-item-title">{{item.car_numbers}}</div>
          <div class="record-item-content">
              <span style="margin-right: 16rpx">{{item.update_time | dateformat('YYYY-MM-DD HH:mm:ss')}}</span>
              <i class="iconfont icon-bianji"></i>
          </div>
        </div>
      </div>
      <div class="no-record" v-if="unCheckRecord.length == 0">
        <i class="iconfont icon-jilu"></i>
        <p>没有车辆登记记录</p>
      </div>
    </div>
    <div class="tabbar-content" v-if="toView == 'check'">
      <div class="record-list" v-for="(item, index) in checkRecord" :key="index">
        <div class="record-item" @click="recordDetileCheck(item)">
          <div class="record-item-title">{{item.car_numbers}}</div>
          <div class="record-item-content">
              <span>{{item.update_time | dateformat('YYYY-MM-DD HH:mm:ss')}}</span>
              <i class="iconfont icon-you"></i>
          </div>
        </div>
      </div>
      <div class="no-record" v-if="checkRecord.length == 0">
        <i class="iconfont icon-jilu"></i>
        <p>没有车辆登记记录</p>
      </div>
    </div>
    <div>
      <div class="footer-btn" @click="creat()">车辆登记</div>
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
        unCheckRecord: 'unCheckRecord',
        checkRecord: 'checkRecord'
      })
    },
		data() {
			return {
        toView: 'unCheck',
			}
    },
    async onShow(){
      await this.$store.dispatch('getUnChek');
      await this.$store.dispatch('getChek')
    },
		async onLoad() {
      await this.$store.dispatch('getUnChek');
      await this.$store.dispatch('getChek')
		},
		methods: {
      tabClick (tabCode) {
        this.toView = tabCode
      },
      recordDetileUncheck(item) {
        wx.navigateTo({
          url: `/pages/car-edit/main?detail_id=${item.detail_id}`
        })
      },
      recordDetileCheck(item) {
        wx.navigateTo({
          url: `/pages/record-detail/main?detail_id=${item.detail_id}`
        })
      },
      creat() {
        wx.navigateTo({
          url: `/pages/car-info/main`
        })
      }
		}
	}
</script>

<style lang="less" scoped>
@import '../../assets/styles/theme/variables.less';
.tab-box {
  display: flex;
  justify-content: space-between;
  background: @bg-white;
  // border-bottom: 2rpx solid @line-color;
  width: 100%;
  white-space:nowrap;
  position:fixed;
  left:0;
  top: 0;
  z-index:999;
}
.tab-box-item {
  width: 50%;
}

.weui-navbar__item {
    display: inline-block;
    margin: 0 32rpx;
}

.weui-navbar__title {
    font-size: 28rpx;
}
.weui-bar__item_on {
  color: @primary-color;
  border-bottom: 4rpx solid @primary-color;
}

.tab-box .weui-navbar__item {
  margin: 0;
}
.tabbar-content {
  margin: @spacing*2 0;
  padding-top: 105rpx;
}
.no-record{
  background: @bg-white;
  font-size: @icon-font;
  padding: @spacing-big*4 0;
  text-align: center;
  color: @secondary-color-gray;
  p {
    font-size: @icon-font;
  }
  i {
    font-size: @number-font;
  }
}
</style>

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
        <!-- <div class="no-record" v-if="unCheckRecord.length== 0">没有车辆登记记录</div> -->
        <div class="record-item" @click="recordDetileUncheck(item)">
          <div class="record-item-title">{{item.car_numbers}}</div>
          <div class="record-item-content">
              <span style="padding-left: 16rpx">{{item.update_time | dateformat('YYYY-MM-DD HH:mm:ss')}}</span>
              <i class="iconfont icon-bianji"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="tabbar-content" v-if="toView == 'check'">
      <div class="record-list" v-for="(item, index) in checkRecord" :key="index">
        <div class="record-item">
          <div class="record-item-title">{{item.car_numbers}}</div>
          <div class="record-item-content">
              <span>{{item.update_time | dateformat('YYYY-MM-DD HH:mm:ss')}}</span>
              <i class="iconfont icon-you"></i>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="footer-btn" @click="creat()">车辆登记</div>
    </div>
   </div>
</template>

<script>
	export default {
    components: {
    },
		data() {
			return {
        unCheckRecord: [],
        checkRecord: [],
        toView: 'unCheck',
			}
		},
		onLoad() {
      uni.request({
        url: 'http://train2.35lz.com/oms/api/traffic-detail?_username=yangxiaoyan&_password=123456&status=未检查',
      }).then((success, error) =>{
        this.unCheckRecord = success[1].data.data.collection;
      });
      uni.request({
        url: 'http://train2.35lz.com/oms/api/traffic-detail?_username=yangxiaoyan&_password=123456&status=已检查',
      }).then((success, error) =>{
        this.checkRecord = success[1].data.data.collection;
      });
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
      creat() {
        wx.navigateTo({
          url: `/pages/car-info/main`
        })
      }
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
.tab-box {
  display: flex;
  justify-content: space-between;
  background: @bg-white;
  border-bottom: 2rpx solid @line-color;
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
</style>

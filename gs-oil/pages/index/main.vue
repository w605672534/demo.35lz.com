<template >
	<div>
    <!-- 轮播图 -->
    <div>
      <swiper
        indicator-dots="true"
        autoplay="true"
        interval="5000"
        duration="1000"
        circular="true"
        indicator-color="rgba(0,0,0,0.3)"
        indicator-active-color="#E36803"
        class="slide-box"
        >
        <block v-for="(item, index) in banners" :key="index">
          <swiper-item>
            <div>
              <image :src="item" mode="scaleToFill" class="banner-image"></image>
            </div>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <!-- 信息栏 -->
    <div class="info" style="background-image: url(http://hp-coffee.hulu.io/gs-oil/bg.png);background-repeat:no-repeat;background-size:100% 100%">
      <div class="info-bar">
        <div style="display: flex">
          <!-- <i class="iconfont icon-renyuan-copy"></i><span class="info-bar-name">登录</span> -->
          <i class="iconfont icon-renyuan-copy"></i><span class="info-bar-name">{{userInfo.name}}</span><span class="info-bar-name">，您好</span>
        </div>
        <div class="info-bar-time">{{currentDate}} {{currentTime}}</div>
      </div>
      <div class="info-message"><i class="iconfont icon-xiaoxi"></i><span class="info-message-content">您有新的车辆消息待查看……</span></div>
    </div>
    <!-- 卡片 -->
    <div class="info-bar" style="padding: 8rpx;">
      <div class="card-info" @click="carInfo()">
        <div class="card-item">
          <img src="http://hp-coffee.hulu.io/gs-oil/file.png">
          <h5>检查登记</h5>
        </div>
      </div>
      <div class="card-info">
        <div class="card-item" @click="infoRecord()">
          <img src="http://hp-coffee.hulu.io/gs-oil/backlog.png">
          <h5>登记查询</h5>
        </div>
      </div>
    </div>
    <div class="info-bar" style="padding: 8rpx;margin-top: -16rpx">
      <div class="card-info" @click="carDashboard()">
        <div class="card-item">
          <img src="http://hp-coffee.hulu.io/gs-oil/dash.png">
          <h5>登记统计</h5>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
import {
  SYSTEM_INFO,
  USER_INFO
} from '@/store/constant'
	export default {
    components: {
    },
		data() {
			return {
        // 轮播图
        banners: [
          'http://hp-coffee.hulu.io/gs-oil/banner.png',
          'http://hp-coffee.hulu.io/gs-oil/banner1.png',
          'http://hp-coffee.hulu.io/gs-oil/banner2.png',
          'http://hp-coffee.hulu.io/gs-oil/banner3.png'
        ],
        currentDate: '',
        currentTime: '',
        userInfo: {}
			}
		},
		onLoad() {
      this.userInfo = wx.getStorageSync('user')
    },
    onShow() {
      const date = new Date();
      const month = date.getMonth() + 1;
      this.currentDate = date.getFullYear() + '-'
        + (month < 10 ? '0' + month : month) + '-'
        + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
      this.currentTime = date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
      },
		methods: {
      carInfo() {
        wx.navigateTo({
          url: '/pages/car-detail/main'
        })
      },
      infoRecord() {
        wx.navigateTo({
          url: '/pages/car-record/main'
        })
      },
      carDashboard() {
        wx.navigateTo({
          url: '/pages/car-dash/main'
        })
      }
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

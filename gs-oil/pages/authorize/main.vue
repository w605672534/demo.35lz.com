<template >
	<div>
    <div class="logo">
      <img src="/static/logo.png">
    </div>
    <div class="info">中国石油天然气股份有限公司甘肃销售公司（以下简称甘肃销售）的前身为甘肃省石油总公司，成立于1953年，主要从事汽油、煤油、柴油、润滑油及特种油品的批发、零售业务，承担着甘肃省工农业生产和人民群众生产、生活用油的供应任务。</div>
    <div class="login">
      <view class="login-label">请完成微信授权以继续使用</view>
      <button hover-class="none" open-type="getUserInfo" type="primary" lang="zh_CN" @getuserinfo="bindGetUserInfo">授权登录</button>
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
        
			}
		},
		onLoad() {
      let userInfo = wx.getStorageSync(USER_INFO)
      if (userInfo) {
        // 判断有没有实名认证过,若实名认证过进入首页，没有认证过进入实名认证页，把openid及姓名等存入到user表中
        wx.redirectTo({
          url: '/pages/index/main'
        })
      }
		},
		methods: {
      async bindGetUserInfo (e) {
      if (e.mp.detail.errMsg === 'getUserInfo:ok') {
        const _this = this
        wx.login({
          async success (res) {
            console.log(res,'123')
            if (res.code) {
              // tip.loading()
              _this.userinfo = e.mp.detail.userInfo
              console.log(e.mp.detail.userInfo,'222')
              let systemInfo = wx.getSystemInfoSync()
              wx.setStorageSync(SYSTEM_INFO, systemInfo)
              // const data = await _this.$api.wxJsCode2Session({
              //   jsCode: res.code,
              //   // userInfo: _this.userinfo
              //   avatarUrl: _this.userinfo.avatarUrl,
              //   gender: _this.userinfo.gender == 1 ? 'male' : 'female',
              //   nickName: _this.userinfo.nickName
              // })
              // if (data.result) {
              //   wx.setStorageSync(USER_INFO, data.user)
              // } else {
              //   // console.log(data)
              //   tip.loaded()
              //   tip.errorTip('授权失败')
              // }
              wx.redirectTo({
                url: '/pages/index/main'
              })
            } else {
              const meg = '124'
              tip.errorTip(meg)
            }
          }
        })
      }
    },
    } 
  }
</script>

<style lang="less" scoped>
@import '../../assets/styles/theme/variables.less';
.logo {
  padding:100rpx 0;
  text-align: center;
  image{
    width:300rpx;
    height: 300rpx;
   
  }
}
.info {
  font-size: @secondary-title;
  color: @head-color;
  padding: @spacing-normal;
}
.login {
  margin: @spacing-normal;
  &-label {
    color: @secondary-color-gray;
    font-size: @explain-title;
    text-align: center;
    padding: @spacing-big 0;
  }
  button {
    background: @primary-color;
  }
}
</style>

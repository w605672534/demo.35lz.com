<template >
	<div>
    <div class="logo">
      <img src="http://hp-coffee.hulu.io/gs-oil/oil-logo.png">
      <div class="logo-title">陇油风暴</div>
    </div>
    <div class="info">中国石油天然气股份有限公司甘肃销售公司（以下简称甘肃销售）的前身为甘肃省石油总公司，成立于1953年，主要从事汽油、煤油、柴油、润滑油及特种油品的批发、零售业务，承担着甘肃省工农业生产和人民群众生产、生活用油的供应任务。</div>
    <div class="login">
      <view class="login-label">请完成微信授权以继续使用</view>
      <button hover-class="none" open-type="getUserInfo" type="primary" lang="zh_CN" @getuserinfo="bindGetUserInfo">授权登录</button>
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
      user: 'user'
    })
  },
		onLoad() {
      // let userInfo = wx.getStorageSync(USER_INFO)
      // if (userInfo) {
      //   wx.redirectTo({
      //     url: '/pages/index/main'
      //   })
      // }
		},
		methods: {
      async bindGetUserInfo (e) {
        if (e.mp.detail.errMsg === 'getUserInfo:ok') {
          const _this = this
          wx.login({
            async success (res) {
              if (res.code) {
                // tip.loading()
                _this.userinfo = e.mp.detail.userInfo
                await _this.$store.dispatch('wechatAcommituth', {code: res.code, userId: '', password: '', page: 'auth'})
                wx.setStorageSync('user', _this.user)
              } else {
                const meg = '授权登录失败'
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
    width: 450rpx;
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
.logo-title {
  text-align: center;
  color: @primary-color;
  font-size: @list-title;
}
</style>

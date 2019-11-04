<template >
	<div>
    <div class="login">
      <div class="input-info" style="border: 0">
        <div class="account">账号</div>
        <input :value="account"  @input="getNameValue" placeholder='请输入账号' style="border: 2rpx solid #eeeeee;padding: 8rpx">
      </div>
      <div class="input-info" style="border: 0">
        <div class="password">密码</div>
        <input :value="password" @input="getPasswordValue" type="password" placeholder='请输入密码' style="border: 2rpx solid #eeeeee;padding: 8rpx">
      </div>
    </div>
    <div class="login-btn">
      <button hover-class="none" open-type="getUserInfo" type="primary" lang="zh_CN" @getuserinfo="bindGetUserInfo">登录</button>
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
        account: '',
        password: '',
			}
    },
    computed: {
      ...mapState({
        user: 'user'
      })
    },
		onLoad() {
      // let userInfo = wx.getStorageSync('user')
      // if (userInfo) {
      //   wx.redirectTo({
      //     url: '/pages/index/main'
      //   })
      // }
		},
		methods: {
      getNameValue: function(e) {
        this.account = e.target.value;
      },
      getPasswordValue: function(e) {
        this.password = e.target.value;
      },
      async bindGetUserInfo (e) {
        if (!this.account || !this.password) {
          wx.showToast({
            title: '请输入账号和密码',
            icon: 'none',
            mask: true,
            duration: 2000
          })
        } else {
          if (e.mp.detail.errMsg === 'getUserInfo:ok') {
            const _this = this
            wx.login({
              async success (res) {
                if (res.code) {
                  // tip.loading()
                  _this.userinfo = e.mp.detail.userInfo
                  await _this.$store.dispatch('wechatAcommituth', {code:res.code, userId: _this.account, password: _this.password, page: 'login'})
                  wx.setStorageSync('user', _this.user)
                  // if(_this.user) {
                  //   console.log(_this.user,'10100100')
                  //   wx.redirectTo({
                  //     url: '/pages/index/main'
                  //   })
                  // } else {
                  //   wx.showToast({
                  //     title: '请输入正确的账号和密码',
                  //     icon: 'none',
                  //     mask: true,
                  //     duration: 2000
                  //   })
                  // }
                } else {
                  const meg = '124'
                  tip.errorTip(meg)
                }
              }
            })
          }
        }
        
      },
    } 
  }
</script>

<style lang="less" scoped>
@import '../../assets/styles/theme/variables.less';
.login {
  margin: @spacing-big*4 auto;
  padding: 0 120rpx;
}
.info {
  font-size: @secondary-title;
  color: @head-color;
  padding: @spacing-normal;
}
.account,.password {
  padding-right: @spacing*2;
}
.login-btn {
  margin: @spacing-normal;
  border-radius: @border-radius-button;
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

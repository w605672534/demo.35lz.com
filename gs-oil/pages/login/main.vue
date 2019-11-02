<template >
	<div>
    <div>
      <input :value="account"  @input="getNameValue" placeholder='请输入账号'>
      <input :value="password" @input="getPasswordValue" type="password" placeholder='请输入密码'>
    </div>
    <div class="login">
      <button hover-class="none" open-type="getUserInfo" type="primary" lang="zh_CN" @getuserinfo="bindGetUserInfo">登录</button>
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
        account: '',
        password: '',
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
      getNameValue: function(e) {
        this.account = e.target.value;
      },
      getPasswordValue: function(e) {
        this.password = e.target.value;
      },
      async bindGetUserInfo (e) {
        if (e.mp.detail.errMsg === 'getUserInfo:ok') {
          const _this = this
          wx.login({
            async success (res) {
              if (res.code) {
                // tip.loading()
                _this.userinfo = e.mp.detail.userInfo
                let systemInfo = wx.getSystemInfoSync()
                wx.setStorageSync(SYSTEM_INFO, systemInfo)
                await _this.$store.dispatch('wechatAcommituth', {code:res.code, userId: _this.account, password: _this.password})
                if(this.user) {
                  wx.redirectTo({
                    url: '/pages/login/main'
                  })
                } else {
                  
                }
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

<script>
	export default {
		onLaunch: function() {
			// const _this = this;
      // uni.login({
      //   provider: 'weixin',
      //   success: async function (res) {
			// 		await _this.$store.dispatch('wechatAcommituth', res.code)
					
      //     _this.$store.state.upCartList = carts;
      //   }
			// });
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="less">
  /*每个页面公共css */
  @import './assets/styles/common/index.less';
</style>

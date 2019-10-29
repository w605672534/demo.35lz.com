<script>
	export default {
		onLaunch: function() {
			const _this = this;
			uni.getProvider({
				service: 'oauth',
				success: function (res) {
						console.log(res.provider,'aaaaa')
						if (~res.provider.indexOf('weixin')) {
								uni.login({
										provider: 'weixin',
										success: function (loginRes) {
											console.log(JSON.stringify(loginRes,'bbbbb'));
										}
								});
						}
				}
			});
			uni.login({
				provider: 'weixin',
				success: function (loginRes) {
					console.log(JSON.stringify(loginRes,'mmm'));
					// 获取用户信息
					uni.getUserInfo({
						provider: 'weixin',
						success: function (infoRes) {
							console.log('用户昵称为：' + infoRes.userInfo.avatarUrl);
						}
					});
				}
			});
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

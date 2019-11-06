<template>
   <div style="background: #eeeeee">
      <web-view :src="viewUrl"></web-view>
   </div>
</template>

<script>
	export default {
    components: {
    },
		data() {
			return {
        viewUrl: this.$store.state.dashboard
			}
		},
		onLoad() {

		},
		methods: {
      
		}
	}
</script>

<style lang="less" scoped>
@import '../../assets/styles/theme/variables.less';
</style>

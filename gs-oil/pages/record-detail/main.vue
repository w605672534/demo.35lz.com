<template>
   <div style="background: #eeeeee">
      <div class="record-list">
         <div class="record-list-title">基础信息</div>
         <div class="record-item">
            <div class="record-item-title">车号</div>
            <div class="record-item-content">
               <span>SY-001</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">危险化学品名称</div>
            <div class="record-item-content">
               <span>易燃液化气</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">数量（吨）</div>
            <div class="record-item-content">
               <span>100</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">进站检查时间</div>
            <div class="record-item-content">
               <span>2019-10-28 10:36</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">离站时间</div>
            <div class="record-item-content">
               <span>2019-10-28 12:36</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">运/提货单号</div>
            <div class="record-item-content">
               <span>TH-002</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">运输单位</div>
            <div class="record-item-content">
               <span>吨/千克</span>
            </div>
         </div>
      </div>
      <div class="record-list">
         <div class="record-list-title">运输区间</div>
         <div class="record-item">
            <div class="record-item-title">出发地</div>
            <div class="record-item-content">
               <span>兰州</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">目的地</div>
            <div class="record-item-content">
               <span>武威</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">途径地</div>
            <div class="record-item-content">
               <span>古浪</span>
            </div>
         </div>
      </div>
      <div class="record-list">
         <div class="record-list-title">公安检查</div>
         <div class="record-item">
            <div class="record-item-title">是否驾驶证</div>
            <div class="record-item-content">
               <span>是</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">是否行驶证</div>
            <div class="record-item-content">
               <span>是</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">是否具有质检部分核发槽罐质量检测证</div>
            <div class="record-item-content">
               <span>是</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">是否具有道路危险化学品运输许可证</div>
            <div class="record-item-content">
               <span>是</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">是否具有剧毒化学品运输通行证</div>
            <div class="record-item-content">
               <span>是</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">是否配备押运员</div>
            <div class="record-item-content">
               <span>是</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">是否配备押运员</div>
            <div class="record-item-content">
               <span>否</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">是否具有质检部分核发槽罐质量检测证</div>
            <div class="record-item-content">
               <span>是</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">是否具有驾驶员、押运员从业资格证</div>
            <div class="record-item-content">
               <span>否</span>
            </div>
         </div>
      </div>
      <div class="record-list">
         <div class="record-list-title">市场稽查人员</div>
         <div class="record-item">
            <div class="record-item-title">油品种类</div>
            <div class="record-item-content">
               <span>汽油</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">是否提供油品发票</div>
            <div class="record-item-content">
               <span>是</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">目测油品是否合格</div>
            <div class="record-item-content">
               <span>是</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">是否需要申请其它部门进行查处</div>
            <div class="record-item-content">
               <span>是</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">运输车辆是否迟滞</div>
            <div class="record-item-content">
               <span>是</span>
            </div>
         </div>
         <!-- 车辆照片 -->
         <div class="content">
            <div class="photo" style="margin-top: 0">
               <div class="photo-title">车辆正面照片</div>
               <div class="photo-content">
                  <div class="photo-image-upload" style="margin-left: 32rpx">
                     <image :src="facadeTempFilePaths" style="width: 100%;height: 100%;" @click="facadeChangeImage()" mode="aspectFill"/>
                  </div>
               </div>
            </div>
            <div class="photo" style="margin: 0 32rpx">
               <div class="photo-title">车辆反面照片</div>
               <div class="photo-content">
                  <div class="photo-image-upload" style="margin-left: 32rpx">
                     <image :src="obverseTempFilePaths" style="width: 100%;height: 100%;" @click="obverseChangeImage()" mode="aspectFill"/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
	export default {
      components: {
      },
		data() {
			return {
            facadeTempFilePaths: '/static/banner3.png',
            obverseTempFilePaths: '/static/banner2.png',
            record: [
               {id: '01', title: '易燃液化汽油', time: '2019-10-27 10:23'},
               {id: '02', title: '易燃汽油', time: '2019-10-25 11:23'},
               {id: '03', title: '易燃液化汽油', time: '2019-10-27 12:23'},
               {id: '04', title: '易燃汽油', time: '2019-10-28 07:23'},
               {id: '05', title: '易燃液化汽油', time: '2019-10-29 09:23'},
               {id: '06', title: '易燃汽油', time: '2019-10-27 15:43'},
               {id: '07', title: '易燃液化汽油', time: '2019-10-27 16:45'},
               {id: '08', title: '易燃汽油', time: '2019-10-27 13:56'}
            ]
			}
		},
		onLoad() {

		},
		methods: {
         // 点击放大正面图片
         facadeChangeImage() {
            wx.predivImage({
               current: 'tempFilePaths', // 当前显示图片的http链接
               urls: [this.facadeTempFilePaths] // 需要预览的图片http链接列表
            })
         },
         // 点击放大反面图片
         obverseChangeImage() {
            wx.predivImage({
               current: 'tempFilePaths', // 当前显示图片的http链接
               urls: [this.obverseTempFilePaths] // 需要预览的图片http链接列表
            })
         },
         // recordDetile() {
         //    wx.navigateTo({
         //       url: '/pages/record-detail/main'
         //    })
         // },
		}
	}
</script>

<style lang="less" scoped>
@import '../../assets/styles/theme/variables.less';
</style>

<template>
   <div style="background: #eeeeee">
      <div class="record-list">
         <div class="record-list-title">基础信息</div>
         <div class="record-item">
            <div class="record-item-title">车号</div>
            <div class="record-item-content">
               <span>{{record.car_numbers}}</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">危险化学品名称</div>
            <div class="record-item-content">
               <span>{{record.material_name}}</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">数量（吨）</div>
            <div class="record-item-content">
               <span>{{record.load}}</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">进站检查时间</div>
            <div class="record-item-content">
               <span v-if="record.status == '未检查'"></span>
               <span v-else>{{record.arrive_time | dateformat('YYYY-MM-DD HH:mm:ss')}}</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">离站时间</div>
            <div class="record-item-content">
               <span v-if="record.status == '未检查'"></span>
               <span v-else>{{record.leave_time | dateformat('YYYY-MM-DD HH:mm:ss')}}</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">运/提货单号</div>
            <div class="record-item-content">
               <span>{{record.Invoice_no}}</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">运输单位</div>
            <div class="record-item-content">
               <span>{{record.traffic_org}}</span>
            </div>
         </div>
      </div>
      <div class="record-list">
         <div class="record-list-title">运输区间</div>
         <div class="record-item">
            <div class="record-item-title">出发地</div>
            <div class="record-item-content">
               <span>{{record.starting}}</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">目的地</div>
            <div class="record-item-content">
               <span>{{record.destination}}</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">途径地</div>
            <div class="record-item-content">
               <span>{{record.way_name}}</span>
            </div>
         </div>
      </div>
      <div class="record-list">
         <div class="record-list-title">公安检查</div>
         <div class="record-item">
            <div class="record-item-title">是否驾驶证</div>
            <div class="record-item-content">
               <span>{{record.is_driving_licence}}</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">是否行驶证</div>
            <div class="record-item-content">
               <span>{{record.is_driving_permit}}</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">是否具有质检部门核发槽罐质量检测证</div>
            <div class="record-item-content">
               <span>{{record.have_inspection}}</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">是否具有道路危险化学品运输许可证</div>
            <div class="record-item-content">
               <span>{{record.have_danger_license}}</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">是否具有剧毒化学品运输通行证</div>
            <div class="record-item-content">
               <span>{{record.have_toxic_license}}</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">是否配备押运员</div>
            <div class="record-item-content">
               <span>{{record.have_supercargo}}</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">是否具有驾驶员、押运员从业资格证</div>
            <div class="record-item-content">
               <span>{{record.have_certification}}</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">是否具有车辆警示标志灯、牌、喷涂</div>
            <div class="record-item-content">
               <span>{{record.have_identification_light}}</span>
            </div>
         </div>
      </div>
      <div class="record-list">
         <div class="record-list-title">市场稽查人员</div>
         <div class="record-item">
            <div class="record-item-title">油品种类</div>
            <div class="record-item-content">
               <span>{{record.oils_type}}</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">是否提供油品发票</div>
            <div class="record-item-content">
               <span>{{record.oils_invoice}}</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">目测油品是否合格</div>
            <div class="record-item-content">
               <span>{{record.is_qualified}}</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">是否需要申请其它部门进行查处</div>
            <div class="record-item-content">
               <span>{{record.is_assist}}</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">运输车辆是否迟滞</div>
            <div class="record-item-content">
               <span>{{record.is_late}}</span>
            </div>
         </div>
         <div class="record-item">
            <div class="record-item-title">状态</div>
            <div class="record-item-content">
               <span>{{record.status}}</span>
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
            <!-- <div class="photo" style="margin: 0 32rpx">
               <div class="photo-title">车尾照片</div>
               <div class="photo-content">
                  <div class="photo-image-upload" style="margin-left: 32rpx">
                     <image :src="record.voucher_photo" style="width: 100%;height: 100%;" @click="obverseChangeImage()" mode="aspectFill"/>
                  </div>
               </div>
            </div> -->
            <div class="photo" style="margin: 0 32rpx">
               <div class="photo-title">运输单据照片</div>
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
            recordId: '',
            facadeTempFilePaths: '/static/banner3.png',
            obverseTempFilePaths: '/static/banner2.png',
            record: {}
			}
		},
		onLoad(option) {
         this.detailId = option.detail_id;
         this.recordId = option.record_id;
         uni.request({
            url: `http://train.35lz.com/oms/api/traffic-record/${this.recordId}/detail/${this.detailId}?_username=yangxiaoyan&_password=123456`,
         }).then((success, error) =>{
            this.record = success[1].data.data.model;
         });
         uni.request({
            url: `http://train.35lz.com/oms/api/traffic-detail/${this.detailId}?_username=yangxiaoyan&_password=123456`,
         }).then((success, error) =>{
            this.record = success[1].data.data.model;
            console.log(this.record,'ssss')
         });
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

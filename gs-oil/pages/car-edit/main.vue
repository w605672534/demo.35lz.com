<template >
	<div style="padding-bottom:120px;background: #eeeeee">
    <!-- 基本信息 -->
    <div class="title">基本信息</div>
    <div class="content">
      <div class="input-info" v-if="detailId">
        <div class="input-info-title">车牌号<span class="radio-info-flag">*</span></div>
        <div class="record-item-content">
          <span>{{detail.car_numbers}}</span>
        </div>
      </div>
      <div class="input-info" v-if="detailId">
        <div class="input-info-title">危险化学品名称<span class="radio-info-flag">*</span></div>
        <div class="record-item-content">
          <span>{{detail.material_name}}</span>
        </div>
      </div>
      <div class="input-info" v-if="detailId">
        <div class="input-info-title">数量（吨）<span class="radio-info-flag">*</span></div>
        <div class="record-item-content">
          <span>{{detail.load}}</span>
        </div>
      </div>
      <div class="input-info" v-if="detailId">
        <div class="input-info-title">运输单位</div>
        <div class="record-item-content">
          <span>{{detail.traffic_org}}</span>
        </div>
      </div>
      <div class="input-info" v-if="detailId">
        <div class="input-info-title">运/提货单号</div>
        <div class="record-item-content">
          <span>{{detail.Invoice_no}}</span>
        </div>
      </div>
      <div class="input-info">
        <div class="input-info-title">进站检查时间<span class="radio-info-flag">*</span></div>
        <div class="uni-list-cell-db">
          <picker  mode="date" :value="inDate" :start="2010" :end="2050" @change="bindInDateChange">
            <div class="uni-input picker-info-content">{{inDate}}</div>
          </picker>
        </div>
        <div class="uni-list-cell-db">
          <picker  mode="time" :value="inTime" start="00:00" end="23:59" @change="bindInTimeChange">
            <div class="uni-input picker-info-content">{{inTime}}</div>
          </picker>
        </div>
      </div>
      <div class="input-info">
        <div class="input-info-title">离站时间<span class="radio-info-flag">*</span></div>
        <div class="uni-list-cell-db">
          <picker  mode="date" :value="outDate" :start="2010" :end="2050" @change="bindOutDateChange">
            <div class="uni-input picker-info-content">{{outDate}}</div>
          </picker>
        </div>
        <div class="uni-list-cell-db">
          <picker  mode="time" :value="outTime" start="00:00" end="23:59" @change="bindOutTimeChange">
            <div class="uni-input picker-info-content">{{outTime}}</div>
          </picker>
        </div>
      </div>
    </div>
    <!-- 运输区间 -->
    <div class="title" v-if="detailId">运输区间</div>
    <div class="content" v-if="detailId">
      <div class="input-info">
        <div class="input-info-title">出发地</div>
        <div class="record-item-content">
          <span>{{detail.starting}}</span>
        </div>
      </div>
      <div class="input-info">
        <div class="input-info-title">目的地<span class="radio-info-flag">*</span></div>
        <div class="record-item-content">
          <span>{{detail.destination}}</span>
        </div>
      </div>
      <div class="check-info">
        <div class="check-info-title">完整途径地</div>
        <div class="check-info-content" 
          :class="{'checked' : detail.record_way.indexOf(item.address_id) !== -1}"
          v-for="item in passWay"
          :key="item.address_id"
        >
        {{item.address_name_cn}}
        </div>
      </div>
    </div>
    <!-- 公安检查 -->
    <div class="title">公安检查</div>
    <div class="content">
      <div class="radio-info">
        <div class="radio-info-title">是否具有驾驶证<span class="radio-info-flag">*</span></div>
        <div class="radio-info-content" 
          :class="{'checked' : index == driving}" 
          @click="bindDrivingChange(index)"
          v-for="(item,index) in isDriving" 
          :key="index" 
        >
        {{item}}
        </div>
      </div>
      <div class="radio-info">
        <div class="radio-info-title">是否具有行驶证<span class="radio-info-flag">*</span></div>
        <div class="radio-info-content" 
          :class="{'checked' : index == drivingPermit}" 
          @click="bindDrivingPermitChange(index)"
          v-for="(item,index) in isDrivingPermit" 
          :key="index" 
        >
        {{item}}
        </div>
      </div>
      <div class="radio-info">
        <div class="radio-info-title">是否具有质检部门核发槽罐质量检测证<span class="radio-info-flag">*</span></div>
        <div class="radio-info-content" 
          :class="{'checked' : index == qualityInspection}" 
          @click="bindQualityInspectionChange(index)"
          v-for="(item,index) in isQualityInspection" 
          :key="index" 
        >
        {{item}}
        </div>
      </div>
      <div class="radio-info">
        <div class="radio-info-title">是否具有道路危险化学品运输许可证<span class="radio-info-flag">*</span></div>
        <div class="radio-info-content" 
          :class="{'checked' : index == transportationPermit}" 
          @click="bindTransportationPermitChange(index)"
          v-for="(item,index) in isTransportationPermit" 
          :key="index" 
        >
        {{item}}
        </div>
      </div>
      <div class="radio-info">
        <div class="radio-info-title">是否具有剧毒化学品运输通行证<span class="radio-info-flag">*</span></div>
        <div class="radio-info-content" 
          :class="{'checked' : index == transportPass}" 
          @click="bindTransportPassChange(index)"
          v-for="(item,index) in isTransportPass" 
          :key="index" 
        >
        {{item}}
        </div>
      </div>
      <div class="radio-info">
        <div class="radio-info-title">是否配备押运员<span class="radio-info-flag">*</span></div>
        <div class="radio-info-content" 
          :class="{'checked' : index == supercargo}" 
          @click="bindSupercargoChange(index)"
          v-for="(item,index) in isSupercargo" 
          :key="index" 
        >
        {{item}}
        </div>
      </div>
      <div class="radio-info">
        <div class="radio-info-title">是否具有驾驶员、押运员从业资格证</div>
        <div class="radio-info-content" 
          :class="{'checked' : index == driverLicense}" 
          @click="bindDriverLicenseChange(index)"
          v-for="(item,index) in isDriverLicense" 
          :key="index" 
        >
        {{item}}
        </div>
      </div>
      <div class="radio-info">
        <div class="radio-info-title">是否具有车辆警示标志灯、牌、喷涂</div>
        <div class="radio-info-content" 
          :class="{'checked' : index == warningSign}" 
          @click="bindWarningSignChange(index)"
          v-for="(item,index) in isWarningSign" 
          :key="index" 
        >
        {{item}}
        </div>
      </div>
      <div class="radio-info">
        <div class="radio-info-title">是否存在违规事项</div>
        <div class="radio-info-content" 
          :class="{'checked' : index == violation}" 
          @click="bindViolationChange(index)"
          v-for="(item,index) in isViolation" 
          :key="index" 
        >
        {{item}}
        </div>
      </div>
    </div>
    <!-- 市场稽查人员 -->
    <div class="title">市场稽查人员</div>
    <div class="content">
      <div class="uni-list-cell picker-info">
        <div class="uni-list-cell-left">油品种类<span class="radio-info-flag">*</span></div>
        <div class="uni-list-cell-db">
          <picker @change="bindOilTypeChange" :value="type" :range="oilType">
            <div class="uni-input picker-info-content">{{oilType[type]}}</div>
          </picker>
        </div>
      </div>
      <div class="uni-list-cell picker-info">
        <div class="uni-list-cell-left">是否提供油品发票<span class="radio-info-flag">*</span></div>
        <div class="uni-list-cell-db">
          <picker @change="bindInvoiceChange" :value="invoice" :range="isInvoice">
            <div class="uni-input picker-info-content">{{isInvoice[invoice]}}</div>
          </picker>
        </div>
      </div>
      <div class="input-info">
        <div class="input-info-title">发票金额</div>
        <input type="text" @input="getMoney" :value="money" placeholder="请填写发票金额">
      </div>
      <div class="uni-list-cell picker-info">
        <div class="uni-list-cell-left">目测油品是否合格<span class="radio-info-flag">*</span></div>
        <div class="uni-list-cell-db">
          <picker @change="bindQualifiedChange" :value="qualified" :range="isQualified">
            <div class="uni-input picker-info-content">{{isQualified[qualified]}}</div>
          </picker>
        </div>
      </div>
      <div class="uni-list-cell picker-info">
        <div class="uni-list-cell-left">是否需要申请其它部门进行查处</div>
        <div class="uni-list-cell-db">
          <picker @change="bindApplyChange" :value="apply" :range="isApply">
            <div class="uni-input picker-info-content">{{isApply[apply]}}</div>
          </picker>
        </div>
      </div>
      <div class="uni-list-cell picker-info">
        <div class="uni-list-cell-left">运输车辆是否迟滞</div>
        <div class="uni-list-cell-db">
          <picker @change="bindSluggishChange" :value="sluggish" :range="isSluggish">
            <div class="uni-input picker-info-content">{{isSluggish[sluggish]}}</div>
          </picker>
        </div>
      </div>
    </div>
    <!-- 车辆照片 -->
    <div class="content">
      <div class="photo">
        <div class="photo-title">上传车辆正面照片<span class="photo-title-flag">*</span></div>
        <div class="photo-content">
          <div class="photo-image-upload" @click="takePhotoFacade()">
            <i class="iconfont icon-paizhao" style="font-size: 50rpx"></i>
          </div>
          <div class="photo-image-upload" style="margin-left: 32rpx" v-if="facadeTempFilePaths">
            <image :src="facadeTempFilePaths" style="width: 100%;height: 100%;" @click="facadeChangeImage()" mode="aspectFill"/>
          </div>
        </div>
      </div>
      <div class="photo" style="margin: 0 32rpx">
        <div class="photo-title">上传运输单据照片<span class="photo-title-flag">*</span></div>
        <div class="photo-content">
          <div class="photo-image-upload" @click="takePhotoInvoice()">
            <i class="iconfont icon-paizhao" style="font-size: 50rpx"></i>
          </div>
          <div class="photo-image-upload" style="margin-left: 32rpx" v-if="invoiceTempFilePaths">
            <image :src="invoiceTempFilePaths" style="width: 100%;height: 100%;" @click="invoiceChangeImage()" mode="aspectFill"/>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-btn" @click="submit()">提交</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
	export default {
    components: {
    },
    computed: {
      ...mapState({
        detail: 'detail',
        passWay: 'passWay',
      })
    },
		data() {
			return { 
        inTime: '', // 进站检查时间
        outTime: '', // 离站时间
        transUnit: '', // 运输单位
        cargoNumber: '', // 运/提货单号
        inDate: '', // 进站日期
        inTime: '', // 进站时间
        outDate: '', // 出站日期
        outTime: '', // 出站时间
        departure: '', // 出发地
        destination: '', // 目的地
        driving: 0, //驾驶证
        isDriving: ['是', '否'], // 是否具有驾驶证
        drivingPermit: 0, // 行驶证
        isDrivingPermit: ['是', '否'], // 是否具有行驶证
        qualityInspection: 0, // 质量检测证
        isQualityInspection: ['是', '否'], // 是否有质量检测证
        transportationPermit: 0, // 危险化学品运输许可证
        isTransportationPermit: ['是', '否'], // 是否有危险化学品运输许可证
        transportPass: 0, // 剧毒化学品运输通行证
        isTransportPass: ['是', '否'], // 是否有剧毒化学品运输通行证
        supercargo: 0, // 配备押运员
        isSupercargo: ['是', '否'], // 是否配备押运员
        driverLicense: 0, // 驾驶员、押运员从业资格证
        isDriverLicense: ['是', '否'], // 是否有驾驶员、押运员从业资格证
        warningSign: 0, // 车辆警示标志灯、牌、喷涂
        isWarningSign: ['是', '否'], // 是否有车辆警示标志灯、牌、喷涂
        violation: 0, // 违规事项
        isViolation: ['是', '否'], // 是否存在违规事项
        oilType: ['汽油', '柴油', '煤油', '其它化工产品'], // 油品类型
        type: 0, // 油品类型标识
        isInvoice: ['是', '否'], // 是否提供油品发票
        invoice: 0, // 发票标识
        money: '',
        isQualified: ['是', '否'], // 目测油品是否合格
        qualified: 0, // 合格标识
        isApply: ['是', '否'], // 是否需要申请其它部门进行查处
        apply: 0, //申请
        isSluggish: ['是', '否'], // 运输车辆是否迟滞
        sluggish: 0, // 迟滞标识
        facadeTempFilePaths: '', // 车辆正面照片
        invoiceTempFilePaths: '',// 运输单据照片
        full_face_photo: '',
        voucher_photo: '',
        detailId: ''
			}
		},
		async onLoad(option) {
      this.detailId = option.detail_id
      await this.$store.dispatch('editRecordDetail', { id: this.detailId})
      await this.$store.dispatch('getArea')
    },
    onShow() {
      const date = new Date();
      const month = date.getMonth() + 1;
      this.inDate = date.getFullYear() + '-'
        + (month < 10 ? '0' + month : month) + '-'
        + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
      this.inTime = date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
      this.outDate = date.getFullYear() + '-'
        + (month < 10 ? '0' + month : month) + '-'
        + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
      this.outTime = date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    },
		methods: {
      // 进站日期
      bindInDateChange: function(e) {
        this.inDate = e.target.value;
      },
      // 进站时间
      bindInTimeChange: function(e) {
        this.inTime = e.target.value;
      },
      // 离站日期
      bindOutDateChange: function(e) {
        this.outDate = e.target.value;
      },
      // 离站时间
      bindOutTimeChange: function(e) {
        this.outTime = e.target.value;
      },
      // 出发地
      getDepartureValue: function(e) {
        this.departure = e.target.value;
      },
      // 目的地
      getDestinationValue: function(e) {
        this.destination = e.target.value;
      },
      // 途径地
      getPassValue: function(item) {
        if (this.pass.indexOf(item.address_id) !== -1) {
          this.pass.splice(this.pass.indexOf(item.address_id));
        } else {
          this.pass.push(item.address_id);
        }
      },
      // 发票
      getMoney: function(e) {
        this.money = e.target.value;
      },
      // 是否具有驾驶证
      bindDrivingChange(index) {
        this.driving = index;
      },
      // 是否具有行驶证
      bindDrivingPermitChange(index) {
        this.drivingPermit = index;
      },
      // 是否有质量检查证
      bindQualityInspectionChange(index) {
        this.qualityInspection = index;
      },
      // 是否有危险化学品运输许可证
      bindTransportationPermitChange(index) {
        this.transportationPermit = index;
      },
      // 是否有剧毒化学品运输通行证
      bindTransportPassChange(index) {
        this.transportPass = index;
      },
      // 是否配备押运员
      bindSupercargoChange(index) {
        this.supercargo = index;
      },
      // 是否有驾驶员、押运员从业资格证
      bindDriverLicenseChange(index) {
        this.driverLicense = index;
      },
      // 是否有车辆警示标志灯、牌、喷涂
      bindWarningSignChange(index) {
        this.warningSign = index;
      },
      // 是否存在违规事项
      bindViolationChange(index) {
        this.violation = index;
      },
      // 油品类型
      bindOilTypeChange: function(e) {
        this.type = e.target.value;
      },
      // 是否提供油品发票
      bindInvoiceChange: function(e) {
        this.invoice = e.target.value;
      },
      // 目测油品是否合格
      bindQualifiedChange: function(e) {
        this.qualified = e.target.value;
      },
      // 是否需要申请其它部门进行查处
      bindApplyChange: function(e) {
        this.apply = e.target.value;
      },
      // 运输车辆是否迟滞
      bindSluggishChange: function(e) {
        this.sluggish = e.target.value;
      },
      // 车辆正面拍照
      takePhotoFacade() {
        const _this = this;
        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          async success(res) {
            // tempFilePath可以作为img标签的src属性显示图片
            _this.facadeTempFilePaths = res.tempFilePaths[0]
            _this.full_face_photo = await _this.$store.dispatch('fileUpload', {file: _this.facadeTempFilePaths})
          }
        })
      },
      // 运输单据照片
      takePhotoInvoice() {
        const _this = this;
        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          async success(res) {
            // tempFilePath可以作为img标签的src属性显示图片
            _this.invoiceTempFilePaths = res.tempFilePaths[0]
            _this.voucher_photo = await _this.$store.dispatch('fileUpload', {file: _this.invoiceTempFilePaths})
          }
        })
      },
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
      // 点击放大运输单据照片
      invoiceChangeImage() {
        wx.predivImage({
          current: 'tempFilePaths', // 当前显示图片的http链接
          urls: [this.invoiceTempFilePaths] // 需要预览的图片http链接列表
        })
      },
      // 提交
      async submit() {
        const arriveTime = this.inDate + ' ' + this.inTime;
        const leaveTime = this.outDate + ' ' + this.outTime;
        let data = { 
            car_numbers: this.detail.car_numbers,
            material_id: this.detail.material_id,
            material_name: this.detail.material_name,
            arrive_time: arriveTime,
            leave_time: leaveTime,
            traffic_org: this.detail.traffic_org,
            Invoice_no: this.detail.Invoice_no,
            starting: this.detail.starting,
            destination: this.detail.destination,
            detail_id: this.detailId,
            load: this.detail.load,
            status: this.detail.status,
            is_driving_licence: this.driving == '0' ? '是' : '否',
            is_driving_permit: this.drivingPermit == '0' ? '是' : '否',
            have_inspection: this.qualityInspection == '0' ? '是' : '否',
            have_danger_license: this.transportationPermit == '0' ? '是' : '否',
            have_toxic_license: this.transportPass == '0' ? '是' : '否',
            have_supercargo: this.supercargo == '0' ? '是' : '否',
            have_certification: this.driverLicense == '0' ? '是' : '否',
            have_identification_light: this.warningSign == '0' ? '是' : '否',
            have_illegal: this.violation == '0' ? '是' : '否',
            record_id: this.detail.record_id,
            invoice_money: this.money,
            record_way: this.detail.record_way,
            oils_type: this.type == '0' ? '汽油' : this.type == '1' ? '柴油' : this.type == '2' ? '煤油' : '其它化工产品',
            oils_invoice: this.invoice == '0' ? '是' : '否',
            is_qualified: this.qualified == '0' ? '是' : '否',
            is_assist: this.apply == '0' ? '是' : '否',
            is_late: this.sluggish == '0' ? '是' : '否',
            update_time: this.detail.update_time,
            full_face_photo: this.full_face_photo ? [this.full_face_photo] : [],
            voucher_photo: this.voucher_photo ? [this.voucher_photo] : []
          }
          await this.$store.dispatch('carRecordEdit', data)
          uni.showToast({
            icon: 'none',
            title: '登记成功',
            duration: 2000
          })
          wx.navigateTo({
            url: '/pages/car-detail/main'
          })
      }
		}
	}
</script>

<style lang="less" scoped>
@import '../../assets/styles/theme/variables.less';

</style>

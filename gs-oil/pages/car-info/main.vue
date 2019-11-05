<template >
	<div style="padding-bottom:120px;background: #eeeeee">
    <!-- 基本信息 -->
    <div class="title">基本信息</div>
    <div class="content">
      <div class="input-info LicensePlateNumber" @click='LicensePlateNumber_ok'>
        <div class="input-info-title">车号<span class="radio-info-flag">*</span></div>
        <input :value='LicensePlateNumber' disabled='true' placeholder='请选择车牌号'>
      </div>
      <div class="radio-info">
        <div class="radio-info-title">危险化学品名称</div>
        <div class="radio-info-content"
          :class="{'checked' : item.material_id == name}"
          @click="getNameValue(item)"
          v-for="(item,index) in material"
          :key="index" 
        >
        {{item.material_name}}
        </div>
      </div>
      <div class="input-info">
        <div class="input-info-title">数量（吨）<span class="radio-info-flag">*</span></div>
        <input type="text" @input="getNumValue" :value="number" placeholder="请填写数量（吨）">
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
      <div class="input-info">
        <div class="input-info-title">运输单位</div>
        <input type="text" :value="transUnit" @input="getTransUnitValue" placeholder="请填写运输单位">
      </div>
      <div class="input-info">
        <div class="input-info-title">运/提货单号</div>
        <input type="text" :value="cargoNumber" @input="getCargoNumValue" placeholder="请填写运/提货单号">
      </div>
    </div>
    <!-- 运输区间 -->
    <div class="title">运输区间</div>
    <div class="content">
      <div class="input-info">
        <div class="input-info-title">出发地</div>
        <input type="text" @input="getDepartureValue" :value="departure" placeholder="请填写出发地">
      </div>
      <div class="input-info">
        <div class="input-info-title">目的地<span class="radio-info-flag">*</span></div>
        <input type="text" @input="getDestinationValue" :value="destination" placeholder="请填写目的地">
      </div>
      <!-- <div class="check-info">
        <div class="check-info-title">途径地</div>
        <div class="check-info-content" 
          :class="{'checked' : index == pass}" 
          @click="getPassValue(index)"
          v-for="(item,index) in passWay"
          :key="item.address_id" 
        >
        {{item.address_name_cn}}
        </div>
      </div> -->
      <div class="check-info">
        <div class="check-info-title">完整途径地</div>
        <div class="check-info-content" 
          :class="{'checked' : pass.indexOf(item.address_id) !== -1}" 
          @click="getPassValue(item)"
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
      <!-- <div class="photo" style="margin: 0 32rpx">
        <div class="photo-title">上传车尾照片<span class="photo-title-flag">*</span></div>
        <div class="photo-content">
          <div class="photo-image-upload" @click="takePhotoObverse()">
            <i class="iconfont icon-paizhao" style="font-size: 50rpx"></i>
          </div>
          <div class="photo-image-upload" style="margin-left: 32rpx" v-if="obverseTempFilePaths">
            <image :src="obverseTempFilePaths" style="width: 100%;height: 100%;" @click="obverseChangeImage()" mode="aspectFill"/>
          </div>
        </div>
      </div> -->
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
    <!-- 车牌号输入键盘 -->
    <view class='licensePlateShow' v-if='licensePlateShowHidden'>
      <view class='licensePlate_Bg' @click='licensePlate_close'></view>
      <!-- 省份 -->
      <view class='licensePlate_provinces_Box' v-if='licensePlate_provinces_Box'>
        <view class='licensePlate_provincesTist' v-for="(item,index) in licensePlate_provinces" :key="index" @click='licensePlate_provinces_ok(item)'>{{item}}</view>
        <view class='licensePlate_but' @click='licensePlate_close'>关闭</view>
      </view>
      <!-- 字母 -->
      <view class='licensePlate_letter_Box' v-if='licensePlate_letter_Box'>
        <view class='licensePlate_letterTist' v-for="(item, index) in licensePlate_letter" :key="index" @click='licensePlate_letter_ok(item)'>{{item}}</view>
        <view class='licensePlate_letterTist_but'>
          <view class='licensePlate_but' @click='licensePlate_switchDigital'>数字</view>
          <view class='licensePlate_but' @click='licensePlate_delete()'>删除</view>
          <view class='licensePlate_but' @click='licensePlate_empty()'>清空</view>
          <view class='licensePlate_but' @click='licensePlate_close()'>关闭</view>
        </view>
      </view>
      <!-- 数字 -->
      <view class='licensePlate_digital_Box' v-if='licensePlate_digital_Box'>
        <view class='licensePlate_digitalTist' v-for="(item, index) in licensePlate_digital" :key="index" @click='licensePlate_digital_ok(item)'>{{item}}</view>
        <view class='licensePlate_digital_but'>
          <view class='licensePlate_but' @click='licensePlate_switchLetter()'>字母</view>
          <view class='licensePlate_but' @click='licensePlate_delete()'>删除</view>
          <view class='licensePlate_but' @click='licensePlate_empty()'>清空</view>
          <view class='licensePlate_but' @click='licensePlate_close()'>关闭</view>
        </view>
      </view>
    </view>
	</div>
</template>

<script>
// import { mapState } from 'vuex'
	export default {
    components: {
    },
    // computed: {
    //   ...mapState({
    //     passWay: 'passWay'
    //   })
    // },
		data() {
			return {
        carNum: '', // 车号
        name: '', // 危险化学品名称
        number: '', // 数量（吨） 
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
        pass: [], // 途径地
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
        isQualified: ['是', '否'], // 目测油品是否合格
        qualified: 0, // 合格标识
        isApply: ['是', '否'], // 是否需要申请其它部门进行查处
        apply: 0, //申请
        isSluggish: ['是', '否'], // 运输车辆是否迟滞
        sluggish: 0, // 迟滞标识
        facadeTempFilePaths: '', // 车辆正面照片
        obverseTempFilePaths: '', // 车辆尾部照片
        invoiceTempFilePaths: '',// 运输单据照片
        passWay: [],
        material: [],
        licensePlateShowHidden: false,
        licensePlate_provinces_Box: false,
        licensePlate_letter_Box: false, 
        licensePlate_digital_Box: false,
        licensePlate_provinces: [
          "京", "沪", "浙", "苏", "粤", "鲁", 
          "晋", "冀", "豫", "川", "渝", "辽", 
          "吉", "黑", "皖", "鄂", "津", "贵", 
          "云", "桂", "琼", "青", "新", "藏",
          "蒙", "宁", "甘", "陕", "闽", "赣", 
          "湘"
        ],
        licensePlate_letter: [
          "A", "B", "C", "D", "E", "F",
          "G", "H", "L", "J", "K", "L",
          "M", "N", "O", "P", "Q", "R",
          "S", "T", "U", "V", "W", "X",
          "Y", "Z"
        ],
        licensePlate_digital: [
          "1", "2", "3", 
          "4", "5", "6",
          "7", "8", "9", 
          "0"
        ],
        LicensePlateNumber:'',
			}
		},
		async onLoad() {},
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
      // 显示模拟键盘
      LicensePlateNumber_ok:function(){
        var LicensePlateNumber = this.LicensePlateNumber;
        console.log(LicensePlateNumber,'9999')
        var LicensePlateNumberLen = LicensePlateNumber.length;
        if (LicensePlateNumberLen == 0){
          this.licensePlateShowHidden = true
          this.licensePlate_provinces_Box = true
        } else if (LicensePlateNumberLen == 1){
          this.licensePlateShowHidden = true
          this.licensePlate_letter_Box = true
        } else{
          this.licensePlateShowHidden = true
          this.licensePlate_digital_Box = true
        }
      },
      // 切换成字母
      licensePlate_switchLetter:function(){
          this.licensePlate_provinces_Box = false
          this.licensePlate_letter_Box = true
          this.licensePlate_digital_Box = false
      },
      // 切换成数字
      licensePlate_switchDigital: function () {
        var LicensePlateNumberLen = this.LicensePlateNumber.length;
        if (LicensePlateNumberLen == 1){
          wx.showToast({
            title: '车牌号码第二位必须是字母',
            icon: 'none',
            duration: 1500,
          })
        }else{
          this.licensePlate_provinces_Box = false
          this.licensePlate_letter_Box = false
          this.licensePlate_digital_Box = true
        }
      },
      // 删除
      licensePlate_delete: function (e) {
        var LicensePlateNumberLen = this.LicensePlateNumber.length;
        var LicensePlateNumberDelete = this.LicensePlateNumber.split('');
        var NewLicensePlateNumber = LicensePlateNumberDelete.join('').slice(0,-1)
        if (LicensePlateNumberDelete.slice(0,-1).length == 1){
          this.licensePlate_provinces_Box = false
          this.licensePlate_letter_Box = true
          this.licensePlate_digital_Box = false
        } else if (LicensePlateNumberLen == 0 || this.LicensePlateNumber == '' || LicensePlateNumberDelete.slice(0, -1).length == 0){
          this.licensePlate_provinces_Box = true
          this.licensePlate_letter_Box = false
          this.licensePlate_digital_Box = false
        }
        this.LicensePlateNumber = NewLicensePlateNumber
      },
      // 清空
      licensePlate_empty: function (e) {
        this.LicensePlateNumber = '',
        this.licensePlate_provinces_Box = true
        this.licensePlate_letter_Box = false
        this.licensePlate_digital_Box = false
      },
      // 关闭模拟键盘
      licensePlate_close:function(){
        this.licensePlateShowHidden = false
      },
      // 点击获取省份
      licensePlate_provinces_ok: function (e) {
        this.LicensePlateNumber = e
        this.licensePlate_letter_Box = true
        this.licensePlate_digital_Box = false
        console.log('sssss', e)
      },
      // 点击获取字母
      licensePlate_letter_ok: function (e) {
        var LicensePlateNumberLen = this.LicensePlateNumber.length
        if (LicensePlateNumberLen != 8) {
          this.LicensePlateNumber = this.LicensePlateNumber + e
          console.log(e)
        } else {
          wx.showToast({
            title: '车牌号码最多不能超过8位',
            icon: 'none',
            duration: 1500,
          })
        }
      },
      // 点击获取数字
      licensePlate_digital_ok: function (e) {
        var LicensePlateNumberLen = this.LicensePlateNumber.length;
        if (LicensePlateNumberLen != 8){
          this.LicensePlateNumber = this.LicensePlateNumber + e
          console.log(e)
        }else{
          wx.showToast({
            title: '车牌号码最多不能超过8位',
            icon:'none',
            duration:1500,
          })
        }
      },
      // 车号
      getCarnumValue: function(e) {
        this.carNum = e.target.value;
      },
      // 危险化学品名称
      getNameValue: function(item) {
        this.name = item.material_id;
        // if (this.name.indexOf(item.material_id) !== -1) {
        //   this.name.splice(this.name.indexOf(item.material_id));
        // } else {
        //   this.name.push(item.material_id);
        // }
      },
      // 数量（吨） 
      getNumValue: function(e) {
        this.number = e.target.value;
      },
      // 运输单位
      getTransUnitValue: function(e) {
        this.transUnit = e.target.value;
      },
      // 运/提货单号
      getCargoNumValue: function(e) {
        this.cargoNumber = e.target.value;
      },
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
      // 是否具有驾驶证
      bindDrivingChange(index) {
        console.log(333, index)
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
          success(res) {
            // tempFilePath可以作为img标签的src属性显示图片
            _this.facadeTempFilePaths = res.tempFilePaths[0]
          }
        })
      },
      // 车辆尾部照片
      takePhotoObverse() {
        const _this = this;
        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success(res) {
            // tempFilePath可以作为img标签的src属性显示图片
            _this.obverseTempFilePaths = res.tempFilePaths[0]
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
          success(res) {
            // tempFilePath可以作为img标签的src属性显示图片
            _this.invoiceTempFilePaths = res.tempFilePaths[0]
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
      submit() {
        // const name = this.name.join(',');
        const pass = this.pass.join(',');
        const arriveTime = this.inDate + ' ' + this.inTime;
        const leaveTime = this.outDate + ' ' + this.outTime;
        const requestTask3 = uni.request({
          url: this.$store.state.server + '/api/traffic-detail',
          data: { 
            car_numbers: this.LicensePlateNumber,
            material_id: this.name,
            arrive_time: arriveTime,
            leave_time: leaveTime,
            traffic_org: this.transUnit,
            Invoice_no: this.cargoNumber,
            starting: this.departure,
            destination: this.destination,
            load: this.number,
            record_way: pass,
            is_driving_licence: this.driving == 0 ? '是' : '否',
            is_driving_permit: this.drivingPermit == 0 ? '是' : '否',
            have_inspection: this.qualityInspection == 0 ? '是' : '否',
            have_danger_license: this.transportationPermit == '0' ? '是' : '否',
            have_toxic_license: this.transportPass == '0' ? '是' : '否',
            have_supercargo: this.supercargo == '0' ? '是' : '否',
            have_certification: this.driverLicense == '0' ? '是' : '否',
            have_identification_light: this.warningSign == '0' ? '是' : '否',
            have_illegal: this.violation == '0' ? '是' : '否',
            oils_type: this.type == '0' ? '汽油' : this.type == '1' ? '柴油' : this.type == '2' ? '煤油' : '其它化工产品',
            oils_invoice: this.invoice == '0' ? '是' : '否',
            is_qualified: this.qualified == '0' ? '是' : '否',
            is_assist: this.apply == '0' ? '是' : '否',
            is_late: this.sluggish == '0' ? '是' : '否',
            // full_face_photo: this.facadeTempFilePaths,
            // voucher_photo: this.invoiceTempFilePaths,
          },
          method:"POST",
          header : {'content-type':'application/json'},
          success: function (res) {
            // if (res.data.code == 200) {
              wx.navigateBack({
                delta: 1
              })
            // }
            console.log(res.data);
          }
        });
      }
		}
	}
</script>

<style lang="less" scoped>
@import '../../assets/styles/theme/variables.less';
.licensePlateShow{
  min-height: 100%;
  position: absolute;
  bottom: 0;
}

.licensePlate_Bg{
  min-height: 100%;
  width: 750rpx;
  position: absolute;
  z-index: 40;
  overflow: hidden;
}

.licensePlate_provinces_Box{
  background-color: #d0d4da;
  margin: 0 auto;
  display: -webkit-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  z-index: 55;
  display: flex;
  position: fixed;
  height: 100rpx;
  line-height: 100rpx;
  bottom: 510rpx;
  width: 100%;
  color: @head-color;
  background: @primary-color;
  font-size: 38rpx;
  text-align: center;
  left: 0;
}

.licensePlate_provincesTist{
  flex:15%;
  height: 100rpx;
  line-height: 100rpx;
  margin: 0 auto;
  text-align: center;
  background-color:#ffffff; 
  border-top: 1px solid #abb2bd;
  border-left: 1px solid #abb2bd;
}

.licensePlate_provincesTist:nth-child(6n){
  border-right: 1px solid #abb2bd;
}

.licensePlate_letter_Box{
  background-color: #d0d4da;
  margin: 0 auto;
  display: -webkit-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  z-index: 55;
  display: flex;
  position: fixed;
  height: 100rpx;
  line-height: 100rpx;
  bottom: 510rpx;
  width: 100%;
  color: @head-color;
  background: @primary-color;
  font-size: 38rpx;
  text-align: center;
  left: 0;
}

.licensePlate_letterTist{
  flex:15%;
  height: 100rpx;
  line-height: 100rpx;
  margin: 0 auto;
  text-align: center;
  background-color:#ffffff; 
  border-top: 1px solid #abb2bd;
  border-left: 1px solid #abb2bd;
}

.licensePlate_letterTist:nth-child(6n){
  border-right: 1px solid #abb2bd;
} 

.licensePlate_letterTist:nth-child(26){
  border-right: 1px solid #abb2bd;
}

.licensePlate_letterTist_but{
  position: fixed;
  height: 100rpx;
  line-height: 100rpx;
  bottom: 0;
  width: 100%;
  color: @bg-white;
  background: @primary-color;
  font-size: 38rpx;
  text-align: center;
  left: 0;
}

.licensePlate_digital_Box{
  background-color: #d0d4da;
  margin: 0 auto;
  display: -webkit-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  z-index: 55;
  display: flex;
  position: fixed;
  height: 100rpx;
  line-height: 100rpx;
  bottom: 420rpx;
  width: 100%;
  color: @head-color;
  background: @primary-color;
  font-size: 38rpx;
  text-align: center;
  left: 0;
}

.licensePlate_digitalTist{
  flex:25%;
  height: 105rpx;
  line-height: 105rpx;
  margin: 0 auto;
  text-align: center;
  background-color: @bg-white; 
  border-top: 1px solid @line-color;
  border-left: 1px solid @line-color;
}

.licensePlate_digital_but{
  // width: 750rpx;
  display: flex;
  // display: -webkit-flex;
  // flex-wrap: wrap;
  // justify-content: flex-start;
  position: fixed;
  height: 100rpx;
  line-height: 100rpx;
  bottom: 0;
  width: 100%;
  color: @bg-white;
  background: @primary-color;
  font-size: 38rpx;
  text-align: center;
  left: 0;
}

.licensePlate_but{
  flex: 1;
  height: 100rpx;
  line-height: 100rpx;
  text-align: center;
  color: @bg-white;
  background-color: @primary-color; 
  border-top: 2rpx solid @line-color;
  border-left: 2rpx solid @line-color;
}

.licensePlate_but:last-child{
  border-right: 1px solid #abb2bd;
}

.LicensePlateNumber{
  // width: 750rpx;
  // height: 200rpx;
  // border-bottom: 1rpx solid #abb2bd
}

</style>

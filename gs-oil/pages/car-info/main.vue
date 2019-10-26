<template >
	<div style="padding-bottom:120px;background: #eeeeee">
    <!-- 基本信息 -->
    <div class="title">基本信息</div>
    <div class="content">
      <div class="input-info">
        <div class="input-info-title">车号<span class="radio-info-flag">*</span></div>
        <input type="text" placeholder="请填写车号">
      </div>
      <div class="input-info">
        <div class="input-info-title">危险化学品名称</div>
        <input type="text" placeholder="请填写危险化学品名称">
      </div>
      <div class="input-info">
        <div class="input-info-title">数量（吨）<span class="radio-info-flag">*</span></div>
        <input type="text" placeholder="请填写数量（吨）">
      </div>
      <div class="input-info">
        <div class="input-info-title">进站检查时间</div>
        <input type="text" placeholder="请填写进站检查时间">
      </div>
      <div class="input-info">
        <div class="input-info-title">离站时间</div>
        <input type="text" placeholder="请填写离站时间">
      </div>
      <div class="input-info">
        <div class="input-info-title">运输单位</div>
        <input type="text" placeholder="请填写运输单位">
      </div>
      <div class="input-info">
        <div class="input-info-title">运/提货单号</div>
        <input type="text" placeholder="请填写运/提货单号">
      </div>
    </div>
    <!-- 运输区间 -->
    <div class="title">运输区间</div>
    <div class="content">
      <div class="input-info">
        <div class="input-info-title">出发地</div>
        <input type="text" placeholder="请填写出发地">
      </div>
      <div class="input-info">
        <div class="input-info-title">目的地<span class="radio-info-flag">*</span></div>
        <input type="text" placeholder="请填写目的地">
      </div>
      <div class="input-info">
        <div class="input-info-title">途径地</div>
        <input type="text" placeholder="请填写途径地">
      </div>
    </div>
    <!-- 公安检查 -->
    <div class="title">公安检查</div>
    <div class="content">
      <div class="uni-padding-wrap radio-info">
        <div class="uni-title radio-info-title">是否具有质检部分核发槽罐质量检测证</div>
        <div>
          <label class="radio"><radio value="r1" checked="true" color="#E36803"/>是</label>
          <label class="radio radio-info-radio"><radio value="r2" color="#E36803" />否</label>
        </div>
      </div>
      <div class="uni-padding-wrap radio-info">
        <div class="uni-title radio-info-title">是否具有道路危险化学品运输许可证<span class="radio-info-flag">*</span></div>
        <div>
          <label class="radio"><radio value="r1" checked="true" color="#E36803"/>是</label>
          <label class="radio radio-info-radio"><radio value="r2" color="#E36803" />否</label>
        </div>
      </div>
      <div class="uni-padding-wrap radio-info">
        <div class="uni-title radio-info-title">是否具有剧毒化学品运输通行证<span class="radio-info-flag">*</span></div>
        <div>
          <label class="radio"><radio value="r1" checked="true" color="#E36803"/>是</label>
          <label class="radio radio-info-radio"><radio value="r2" color="#E36803" />否</label>
        </div>
      </div>
      <div class="uni-padding-wrap radio-info">
        <div class="uni-title radio-info-title">是否具有驾驶员、押运员从业资格证</div>
        <div>
          <label class="radio"><radio value="r1" checked="true" color="#E36803"/>是</label>
          <label class="radio radio-info-radio"><radio value="r2" color="#E36803" />否</label>
        </div>
      </div>
      <div class="uni-list-cell picker-info">
        <div class="uni-list-cell-left">是否具有车辆警示标志灯、牌、喷涂</div>
        <div class="uni-list-cell-db">
          <picker @change="bindPickerChange" :value="index" :range="isCar">
            <div class="uni-input picker-info-content">{{isCar[index]}}</div>
          </picker>
        </div>
      </div>
      <div class="uni-list-cell picker-info">
        <div class="uni-list-cell-left">是否存在违规事项<span class="radio-info-flag">*</span></div>
        <div class="uni-list-cell-db">
          <picker @change="bindPickerChange" :value="index" :range="isViolation">
            <div class="uni-input picker-info-content">{{isViolation[index]}}</div>
          </picker>
        </div>
      </div>
    </div>
    <!-- 市场稽查人员 -->
    <div class="title">市场稽查人员</div>
    <div class="content">
      <div class="uni-list-cell picker-info">
        <div class="uni-list-cell-left">油品种类<span class="radio-info-flag">*</span></div>
        <div class="uni-list-cell-db">
          <picker @change="bindPickerChange" :value="index" :range="oilType">
            <div class="uni-input picker-info-content">{{oilType[index]}}</div>
          </picker>
        </div>
      </div>
      <div class="uni-list-cell picker-info">
        <div class="uni-list-cell-left">是否提供油品发票<span class="radio-info-flag">*</span></div>
        <div class="uni-list-cell-db">
          <picker @change="bindPickerChange" :value="index" :range="isInvoice">
            <div class="uni-input picker-info-content">{{isInvoice[index]}}</div>
          </picker>
        </div>
      </div>
      <div class="uni-list-cell picker-info">
        <div class="uni-list-cell-left">目测油品是否合格<span class="radio-info-flag">*</span></div>
        <div class="uni-list-cell-db">
          <picker @change="bindPickerChange" :value="index" :range="isQualified">
            <div class="uni-input picker-info-content">{{isQualified[index]}}</div>
          </picker>
        </div>
      </div>
      <div class="uni-list-cell picker-info">
        <div class="uni-list-cell-left">是否需要申请其它部门进行查处</div>
        <div class="uni-list-cell-db">
          <picker @change="bindPickerChange" :value="index" :range="isApply">
            <div class="uni-input picker-info-content">{{isApply[index]}}</div>
          </picker>
        </div>
      </div>
      <div class="uni-list-cell picker-info">
        <div class="uni-list-cell-left">运输车辆是否迟滞</div>
        <div class="uni-list-cell-db">
          <picker @change="bindPickerChange" :value="index" :range="isSluggish">
            <div class="uni-input picker-info-content">{{isSluggish[index]}}</div>
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
        <div class="photo-title">上传车辆反面照片<span class="photo-title-flag">*</span></div>
        <div class="photo-content">
          <div class="photo-image-upload" @click="takePhotoObverse()">
            <i class="iconfont icon-paizhao" style="font-size: 50rpx"></i>
          </div>
          <div class="photo-image-upload" style="margin-left: 32rpx" v-if="obverseTempFilePaths">
            <image :src="obverseTempFilePaths" style="width: 100%;height: 100%;" @click="obverseChangeImage()" mode="aspectFill"/>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-btn" @click="submit()">提交</div>
	</div>
</template>

<script>
	export default {
    components: {
    },
		data() {
			return {
        isCar: ['是', '否'],
        isViolation: ['是', '否'],
        oilType: ['汽油', '柴油', '机油', '液化气'],
        isInvoice: ['是', '否'],
        isQualified: ['是', '否'],
        isApply: ['是', '否'],
        isSluggish: ['是', '否'],
        index: 0,
        facadeTempFilePaths: '',
        obverseTempFilePaths: ''
			}
		},
		onLoad() {

		},
		methods: {
      bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.target.value)
        this.index = e.target.value
      },
      // 正面拍照
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
      // 反面照片
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
      // 提交
      submit() {

      }
      // carInfo() {
      //    wx.navigateTo({
      //     url: '/pages/goods/main'
      //   })
      // },
		}
	}
</script>

<style lang="less" scoped>
@import '../../assets/styles/theme/variables.less';
</style>

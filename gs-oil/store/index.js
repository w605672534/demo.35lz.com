import Vue from 'vue'
import Vuex from 'vuex'
import http from './http'
import api from './api' // 此处，引入存放对promise处理的文件

Vue.use(Vuex, http)
const getRequest = api.httpsPromisify(uni.request)
const request = (method, url, data = {}, isUpload = false) => { // method为请求方法，url为接口路径，data为传参
  //  #ifdef H5
  return getRequest({
    url: url,
    data: data,
    method: method,
    header: {
      'content-type': 'application/json'
    }
  })
  //  #endif

  //  #ifdef MP-WEIXIN
  return getRequest({
    url: url,
    data: data,
    method: method,
    header: {
      'content-type': 'application/json',
      'Cookie': uni.getStorageSync('SET_COOKIE')
    }
  })
  //  #endif
}
const fail = (res, dispatch) => {
  if(res.status == 401){
    //  #ifdef MP-WEIXIN
    uni.login({
      provider: 'weixin',
      success: function (res) {
        dispatch('wechatAuth', res.code)
        uni.showToast({
          title: '网络开了小差，请您重试',
          duration: 2000,
          icon: 'none'
        });
      }
    });
      //  #endif
  }else{
    uni.showToast({
      title: res.msg,
      duration: 2000,
      icon: 'none'
    });
  }
}
const store = new Vuex.Store({

  state: {
    server: 'https://train.35lz.com/oms',
    imgURL: 'https://train.35lz.com/oms',
    dashboard: 'https://demo.35lz.com/dash/index.html',
    //server: 'http://192.168.1.2:8080/oms',
    //imgURL: 'http://192.168.1.2:8080/oms',
    site: '10000',
    store: [],
    user: {},
    passWay: [],
    unCheckRecord: [],
    checkRecord: [],
    detail: {},
    record: {},
    recordList: [],
    wayList: [],
    material: []
  },
  mutations: {
    wechatInfo (state, payload) {
      state.user = payload;
    },
    setArea (state, payload) {
      state.passWay = payload
    },
    setUnCheck (state, payload) {
      state.unCheckRecord = payload
    },
    setCheck (state, payload) {
      state.checkRecord = payload
    },
    seteditRecordDetail(state, payload) {
      state.detail = payload
    },
    setCarRecordDetail(state, payload) {
      state.record = payload
    },
    setCarRecord(state, payload) {
      state.recordList = payload
    },
    setCarRecordWay(state, payload) {
      state.wayList = payload
    },
    setMaterial(state, payload) {
      state.material = payload
    }
  },
  actions: {
    // 授权登录
    async wechatAcommituth ({ dispatch, commit }, params) {
      const url = this.state.server +  '/weixin/login';
      const result =  await request('POST', url, {code: params.code, userId: params.userId, password: params.password});
      if (result) {
        if (params.page == 'auth' && result.code == 401) {
          wx.redirectTo({
            url: '/pages/login/main'
          })
        } else if(result.code == 200) {
          commit('wechatInfo', result.data)
          wx.redirectTo({
            url: '/pages/index/main'
          })
        } else {
          wx.showToast({
            title: '请输入正确的账号和密码',
            icon: 'none',
            mask: true,
            duration: 5000
          })
        }
      } else {
        console.log('微信认证失败',result)
      };
    },
    // 获取途径地
    async getArea ({ dispatch, commit }) {
      const url = this.state.server + '/api/sys-area';
      let result = await request('GET', url, {});
      if(result) {
        commit('setArea', result.data.collection)
      }
    },
    // 获取途径地
    async getMaterial ({ dispatch, commit }) {
      const url = this.state.server + '/api/sys-chemical';
      let result = await request('GET', url, {});
      if(result) {
        commit('setMaterial', result.data.collection)
      }
    },
    // 未检查记录
    async getUnChek ({ dispatch, commit }) {
      const url = this.state.server + '/api/traffic-detail';
      let result = await request('GET', url, {status: '未检查'});
      if(result) {
        commit('setUnCheck', result.data.collection)
      }
    },
    // 已检查记录
    async getChek ({ dispatch, commit }) {
      const url = this.state.server + '/api/traffic-detail';
      let result = await request('GET', url, {status: '已检查'});
      if(result) {
        commit('setCheck', result.data.collection)
      }
    },
    // 记录详情
    async editRecordDetail ({ dispatch, commit },params) {
      const url = this.state.server + '/api/traffic-detail/' + params.id;
      let result = await request('GET', url, {});
      if(result) {
        commit('seteditRecordDetail', result.data.model)
      }
    },
    // 车辆信息详情
    async carRecordDetail ({ dispatch, commit },params) {
      const url = this.state.server + '/api/traffic-detail/' + params.id;
      let result = await request('GET', url, {});
      if(result) {
        commit('setCarRecordDetail', result.data.model)
      }
    },

    // 车辆信息记录
    async carRecord ({ dispatch, commit },params) {
      const url = this.state.server + '/api/traffic-detail/';
      let result = await request('GET', url, {size: 1000});
      if(result) {
        commit('setCarRecord', result.data.collection)
      }
    },

    // 车辆信息记录途径地
    async carRecordWay ({ dispatch, commit },params) {
      const url = this.state.server + '/api/traffic-record/' + params.id + '/detail';
      let result = await request('GET', url);
      if(result) {
        commit('setCarRecordWay', result.data.collection)
      }
    },

    // 车辆信息记录途径地详情
    async carRecordWayDetail ({ dispatch, commit },params) {
      const url = this.state.server + '/api/traffic-record/' + params.recordId + '/detail/' + params.detailId;
      let result = await request('GET', url);
      if(result) {
        commit('setCarRecordWay', result.data.collection)
      }
    },

    // 车辆信息记录途径地详情
    async carRecordCreate ({ dispatch, commit },params) {
      const url = this.state.server + '/api/traffic-detail';
      await request('POST', url, params);
    },

    // 车辆信息记录途径地详情
    async carRecordEdit ({ dispatch, commit },params) {
      const url = this.state.server + '/api/traffic-detail/check/' + params['detail_id'];
      await request('PUT', url, params);
    },

    // 文件上传
    async fileUpload ({ dispatch, commit },params) {
      const url = this.state.server + '/api/sys-file/upload';
      const [err, result] = await uni.uploadFile({
        url: url,
        filePath: params.file,
        name: 'file',
        header: {'Content-Type': 'multipart/form-data', 'Cookie': uni.getStorageSync('SET_COOKIE')},
        formData: {}
      })
      return JSON.parse(result.data).data
    },
  }
})

export default store

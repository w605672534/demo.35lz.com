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
    server: 'http://train.35lz.com/oms',
    // server: 'http://192.168.2.30:8080/oms',
    imgURL: 'http://train2.35lz.com/oms',
    site: '10000',
    store: [],
    user: {},
    passWay: [],
    unCheckRecord: [],
    checkRecord: [],
    detail: {}
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
  },
  actions: {
    // 授权登录
    async wechatAcommituth ({ dispatch, commit }, params) {
      const url = this.state.server +  '/weixin/login';
      const result =  await request('POST', url, {code: params.code, userId: params.userId, password: params.password});
      const pageName = params.page
      if (result) {
        if(result.code == 200) {
          commit('wechatInfo', result.data)
          wx.redirectTo({
            url: '/pages/index/main'
          })
        } else if (params.page == 'auth' && result.code == 401) {
          wx.redirectTo({
            url: '/pages/login/main'
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
      console.log(123,result)
      if(result) {
        commit('setArea', result.data)
      }
    },
    // 未检查记录
    async getUnChek ({ dispatch, commit }) {
      const url = this.state.server + '/api/traffic-detail';
      let result = await request('GET', url, {status: '未检查'});
      console.log(result,'0000')
      if(result) {
        commit('setUnCheck', result.data.collection)
      }
    },
    // 已检查记录
    async getChek ({ dispatch, commit }) {
      const url = this.state.server + '/api/traffic-detail';
      let result = await request('GET', url, {status: '已检查'});
      console.log(result,'111')
      if(result) {
        commit('setCheck', result.data.collection)
      }
    },
    // 记录详情
    async editRecordDetail ({ dispatch, commit }) {
      const url = this.state.server + '/api/traffic-detail/' + params.id;
      let result = await request('GET', url, {});
      console.log(result,'222')
      if(result) {
        commit('seteditRecordDetail', result.data)
      }
    },
  }
})

export default store

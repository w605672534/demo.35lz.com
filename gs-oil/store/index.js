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
    // server: 'http://train.35lz.com/oms',
    server: 'http://192.168.2.30:8080/oms',
    imgURL: 'http://train.35lz.com/oms',
    user: {},
    site: '10000',
    store: [],
  },
  mutations: {
    wechatInfo (state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async wechatAcommituth ({ dispatch, commit }, params) {
      const url = this.state.server +  '/weixin/login';
      const result =  await request('POST', url, {code: params.code, userId: params.userId, password: params.password});
      if(result) {
        console.log(444, result)
        commit('wechatInfo', result.user)
      } else {
        console.log('微信认证失败',result)
      };
    },
  }
})

export default store

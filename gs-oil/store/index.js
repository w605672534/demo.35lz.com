import Vue from 'vue'
import Vuex from 'vuex'
import http from './http'
import data from './data'
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
    server: 'http://127.0.0.1:7001',
    imgURL: 'http://xyq-qn-cdn.35lz.com/',
    products: [],
    postItem: [],
    addressList: [],
    couponList: [],
    index:{},
    find: [],
    orderList: [],
    userData: [],
    cartList: [],
    upCartList: [],
    user: {},
    site: '10000',
    codeStatus: 'noExistent',
    post: [],
    postDetail: null,
    mall: {},
    orderPayment: null,
    prepayInfo: null,
    orderDetail: {},
    orderAddress: null,
    isLoading: false,
    store: []
  },
  mutations: {
    setOrderaddress (state, payload) {
      state.orderAddress = payload;
    },
    setPostItem (state, payload) {
      state.postItem = payload
    },
    setAddress (state, payload) {
      state.addressList = payload
    },
    setCoupon (state, payload) {
      state.couponList = payload
    },
    setIndex (state, payload) {
      state.index = payload
    },
    setFind (state, payload) {
      state.find = payload
    },
    setOrder (state, payload) {
      state.orderList = payload
    },
    setOrderInfo (state, payload) {
      state.orderDetail = payload
    },
    setUser (state, payload) {
      state.userData = payload
    },
    setCartList (state, payload) {
      state.cartList = payload
    },
    editUser (state, payload) {
      state.userData = payload
    },
    editAddr (state, payload) {
      state.addressList.forEach((address,index) => {
        if(address.address_id == payload.address_id){
          state.addressList[index] = payload
        }
      })
    },
    addAddr (state, payload) {
      state.addressList.push(payload)
    },
    changeOrderStatus (state, payload) {
      state.orderList.forEach((order,index) => {
        if(order.orderId == payload){
          state.orderList[index].status = '已取消'
        }
      })
    },
    addProduct (state, payload) {
      // payload { mall_id, post_id, row:{ post_id, quantity, is_select...}} row对象只在购物车页面操作时传入
      let mall = state.upCartList.find(up => {
        return payload.mall_id == up.mall_id
      })
      if (mall) {
        // 遍历mall.rows 通过post_id find post对象
        // post为空则 mall.rows.unshift( row ？ row : {post_id , quantity:1, is_select:true ...} )
        // post不为空则 row ？ 使用row对象替换当前循环对象post : post.quantity ++
        let post = mall.rows.find(row => {
          return payload.post_id == row.post_id
        })
        if (post) {
          if (payload.row) {
            mall.rows.forEach(element => {
              if(element.post_id == post.post_id) {
                element = post
              }
            });
          } else {
            mall.rows.forEach(element => {
              if(element.post_id == post.post_id) {
                const quantity = payload.quantity ? payload.quantity : 1
                element.quantity = element.quantity + quantity;
                element.is_select = true;
              }
            });
          }
        } else {
          if(payload.row) {
            mall.rows.unshift(row)
          } else {
            mall.rows.unshift({
              post_id: payload.post_id,
              price: payload.price,
              quantity: payload.quantity,
              is_select: true
            })
          }
        }
      } else {
        state.upCartList.unshift({
          mall_id: payload.mall_id,
          rows: payload.row && payload.row.length > 0 ? payload.row : [{post_id: payload.post_id, price: payload.price, quantity: payload.quantity, is_select:true}]
        })
      }
    },
    // addOrder (state, payload) {
    //   payload.forEach(order => {
    //     state.orderList.unshift(order)
    //   });
    // },
    wechatInfo (state, payload) {
      state.user = payload
    },
    postsInfo (state, payload) {
      state.post = payload
    },
    Postdetail (state, payload) {
      state.postDetail = payload
    },
    mallInfo (state, payload) {
      state.mall = payload
    },
    setStore (state, payload) {
      state.store = payload
    },
    payment (state, payload) {
      state.orderPayment = payload
    },
    prepay (state, payload) {
      state.prepayInfo = payload;
    },
    setLoading (state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    async baseRequest({ dispatch, commit }, params){
        commit('setLoading', true)
        const result =  await request(params.method, params.url, params.data);
        commit('setLoading', false)
        if(result.ret){
          return result
        }else{
          fail(result, dispatch);
          return null
        }
    },
    async getPostItem ({ dispatch, commit }) {
      commit('setPostItem', data.postItem)
    },
    async getCoupon ({ dispatch, commit }) {
      commit('setCoupon', data.couponList)
    },
    async getIndex ({ dispatch, commit }, params) {
      commit('setIndex', data.index)
    },
    async getFind ({ dispatch, commit }, params) {
      commit('setFind', data.find)
    },
    async getOrders ({ dispatch, commit }) {
      const url = this.state.server +  '/' + this.state.site + '/order/order';
      let result = await dispatch('baseRequest',{ method:'GET', url, data:{}});
      if(result) {
        commit('setOrder', result.orders.rows)
      }
    },
    async getOrder ({ dispatch, commit }, params) {
      const url = this.state.server +  '/' + this.state.site + '/order/order/'+ params;
      let result = await dispatch('baseRequest',{ method:'GET', url, data:{}});
      if(result) {
        commit('setOrderInfo', result.order)
      }
    },
    async getUser ({ dispatch, commit }) {
      commit('setUser', data.userData)
    },
    async getCartList ({ dispatch, commit }, params) {
      const url = this.state.server +  '/' + this.state.site + '/order/cart';
      let result = null;
      if(params) {
        result = await dispatch('baseRequest',{ method:'GET', url, data:{post_id: params}});
      } else {
        result = await dispatch('baseRequest',{ method:'GET', url, data:{}});
      }
      if(result) {
        commit('setCartList', result.malls)
      }
    },
    async editUserData ({ dispatch, commit }) {
      commit('editUser', data.userData)
    },
       //查询收货地址
    async getAddress ({ dispatch, commit }) {
      const url = this.state.server + '/member/address';
      let result = await dispatch('baseRequest',{ method:'GET', url, data:{}});
      if(result) {
          commit('setAddress', result.addresses.rows)
      }
    },
    //编辑地址
    async editAddress ({ dispatch, commit },params) {
      const url = this.state.server + '/member/address/' + params.address_id;
      let result = await dispatch('baseRequest',{ method:'PUT', url, data:{address:params}});            
      if(result) {
        commit('editAddr', params)
      }
    },
    // 新增地址
    async addAddress ({ dispatch, commit },params) {
      const url = this.state.server + '/member/address';
      let result = await dispatch('baseRequest',{ method:'POST', url, data:{address:params}});            
      if(result) {
        commit('addAddr', result.address)
      }
    },
    //删除地址
    async deleteAddress ({ dispatch, commit },params) {
      const url = this.state.server + '/member/address/' + params;
      let result =  await request('DELETE', url, {});
      if(result.ret) {
      } else {
        fail(result, dispatch);
      }
    },
    async cancleOrder ({ dispatch, commit },params) {
      commit('changeOrderStatus', params)
    },
    async addGoods ({ dispatch, commit },params) {
      commit('addProduct', params)
    },
    async deleteOrder ({ dispatch, commit },params) {
      commit('setOrder', data.orderList)
      data.orderList.splice(params, 1)
    },
    async wechatAuth ({ dispatch, commit }, params) {
      const url = this.state.server +  '/' + this.state.site + '/user/wechat';
      const result =  await request('POST', url, {code: params});
      if(result.ret) {
        commit('wechatInfo', result.user)
      } else {
        console.log('微信认证失败',result)
      };
    },
    async getCode ({ dispatch, commit }, params) {
      const url = this.state.server + '/' + this.state.site +'/message/sms/send';     
      const result = await request('POST', url, {phone: params})
      if(result.ret) {
        this.state.codeStatus = 'existent';
      } else {
        fail(result, dispatch);
      };
    },
    async bind ({ dispatch, commit }, params) {
      const url = this.state.server +  '/' + this.state.site + '/user/bind';
      let result = await dispatch('baseRequest',{ method:'PUT', url, data:{type: 'phone',identity:params.phone, code:params.code}});      
      this.state.codeStatus = 'noExistent';
      if(result) {
        this.state.user.ids.push({
          identity: params.phone,
          id_type: 'phone'
        })
        wx.redirectTo({
          url: `/pages/settlement/main?postId=` + params.postId
        })
        uni.showToast({
          title: '绑定成功',
          duration: 2000,
          icon: 'none'
        });
      }
    },
    async updateUserinfo ({ dispatch, commit }, params) {
      const url = this.state.server +  '/user';
      this.state.user.user_name = params.nickName
      this.state.user.gender = params.gender == 1 ? 'male' : 'female'
      this.state.user.face = params.avatarUrl
      await dispatch('baseRequest',{ method:'PUT', url, data:{user: this.state.user}});
    },
    async getPost  ({ dispatch, commit }, params) {
      const url = this.state.server +  '/' + this.state.site + '/post';
      let result = [];
      if(params&&params.size) {
        result = await dispatch('baseRequest',{ method:'GET', url, data:{size: params.size}});
      } else if (params&&params.post_title) {
        result = await dispatch('baseRequest',{ method:'GET', url, data:{post_title: params.post_title}});
      } else {
        result = await dispatch('baseRequest',{ method:'GET', url, data:{}});
      }
      if(result) {
        commit('postsInfo', result.posts)
      }
    },
    async getPostdetail  ({ dispatch, commit }, params) {
      const url = this.state.server +  '/' + this.state.site + '/post/' + params.id;
      let result = await dispatch('baseRequest',{ method:'GET', url, data:{}});
      if(result) {
        commit('Postdetail', result.post)
      }
    },
    async getMall  ({ dispatch, commit }, params) {
      const url = this.state.server + '/merchant/mall/' + params.id;
      let result = await dispatch('baseRequest',{ method:'GET', url, data:{}});
      if(result) {
        commit('mallInfo', result.mall)
      }
    },
    async getStore ({ dispatch, commit }, params) {
      const url = this.state.server +  '/merchant/store';
      let result = await dispatch('baseRequest',{ method:'GET', url, data:{mall_id: params}});
      if(result) {
        commit('setStore', result.stores)
      }
    },
    async createOrder  ({ dispatch, commit }, params) {
      const url = this.state.server +  '/' + this.state.site + '/order/order';
      let result = await dispatch('baseRequest',{ method:'POST', url, data:{address_id:params.address_id, post_id:params.post_id, delivery_type:params.delivery_type, malls:params.malls}});
      if(result) {
        commit('payment', result.payment)
      }
    },
    async upCart  ({ dispatch, commit }, params) {
      const url = this.state.server +  '/' + this.state.site + '/order/cart';
      let result = await request('PUT', url, {cart: this.state.upCartList})
      if(result.ret) {
        // console.log(carts.ret)
      } else {
        fail(result, dispatch);
      }
    },
    async resetCart ({dispatch, commit }, params) {
      let carts = []
      params.forEach(c => {
        let cart = {
          mall_id: c.mall.mall_id,
          rows: []
        }
        c.posts.forEach(p => {
          cart.rows.push({
            post_id: p.post_id,
            price: p.price,
            quantity: p.quantity,
            is_select: p.is_select
          })
        });
        if(cart.rows.length > 0){
          carts.push(cart)
        }else{
          console.log('购物车异常更新', params)
        }
      });
      this.state.upCartList = carts;
      await dispatch('upCart');
    },
    async synchCart ({dispatch, commit }) {
      let carts = []
      this.state.cartList.forEach(c => {
        let cart = {
          mall_id: c.mall.mall_id,
          rows: []
        }
        c.posts.forEach(p => {
          if(!p.is_select) {
            cart.rows.push({
              post_id: p.post_id,
              price: p.price,
              quantity: p.quantity,
              is_select: p.is_select
            })
          }
        });
        if(cart.rows.length > 0){
          carts.push(cart)
        }
      });
      this.state.upCartList = carts;
      await dispatch('upCart');
    },
    async pay  ({ dispatch, commit }, params) {
      const url = this.state.server +  '/' + this.state.site + '/order/pay';
      let result = '';
      if (params.payment_id) {
        result = await dispatch('baseRequest',{ method:'POST', url, data:{payment_id: params.payment_id}});
      } else {
        result = await dispatch('baseRequest',{ method:'POST', url, data:{order_id: params.order_id}});
      }
      if(result) {
        commit('prepay', result.prepay)
      }
    }
  }
})

export default store

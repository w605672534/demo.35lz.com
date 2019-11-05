const Promise = require('es6-promise').Promise
function httpsPromisify (fn) {
  return function (obj = {}) {
    return new Promise((resolve, reject) => {
      obj.success = function (res) {
        resolve(res.data)
        if (res.statusCode == 200) {
          let cookie = res.header['set-cookie'] || res.header['Set-Cookie']
          const defaultCookie = 'CONTAINERID=; Expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/'
          if (cookie && uni.getStorageSync('SET_COOKIE') !== cookie && cookie !== defaultCookie) {
            uni.setStorageSync('SET_COOKIE', cookie)
          }
        }
      }
      obj.fail = function (res) {
        reject(res)
      }
      fn(obj)
    })
  }
}

module.exports = { httpsPromisify: httpsPromisify }
export default {
  // 微信用户认证
  wxJsCode2Session: params => request('get', 'jscode2session', params),
}
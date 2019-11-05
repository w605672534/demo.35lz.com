import axios from 'axios'
axios.defaults.timeout = 600000
axios.defaults.withCredentials = false // 设置cross跨域，并设置访问权限，允许跨域携带cookie信息
axios.defaults.headers.post['Content-Type'] = 'application/json'
const http = {
  install (Vue) {
    Vue.prototype.$http = http
  },
  async axios (method = 'get', path, data) {
    const res = await axios[method](path, data)
    return res
  },
  async get (path, data) {
    const res = await http.axios('get', path, {
      params: {
        ...data
      }
    })
    return res
  },
  async post (path, data) {
    const res = await http.axios('post', path, data)
    return res
  },
  async put (path, data) {
    const res = await http.axios('put', path, data)
    return res
  },
  async delete (path, data) {
    const res = await http.axios('delete', path, data)
    return res
  }
}
export default http

import axios from 'axios'

// 创建axios对象
const axiosInstance = axios.create({
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
})

// 请求拦截，文档：https://www.axios-http.cn/docs/interceptors
axiosInstance.interceptors.request.use( config => {
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

// 响应拦截
axiosInstance.interceptors.response.use(response => {
  // 2xx 范围内的状态码都会触发该函数。
  return response
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default axiosInstance

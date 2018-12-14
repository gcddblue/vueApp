import axios from 'axios'
import {showLoading, hideLoading} from './loading'

const $axios = axios.create({
  timeout: 15000
})

// http request服务器请求拦截器
$axios.interceptors.request.use((config) => {
  if (config.showLod) {
    showLoading()
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// http response 服务器响应拦截器
$axios.interceptors.response.use(
  (response) => {
    if (response.config.showLod) {
      hideLoading()
    }
    return response
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          let url = encodeURIComponent(window.location.href)
          window.location.href = `https://login.xinnet.com/login?service=${url}`
      }
    }
    return Promise.reject(error.response.data)
  }
)

export default $axios

import {Loading} from 'element-ui'

let apiCount = 0
let loading

export function showLoading () {
  if (apiCount === 0) {
    loading = Loading.service({
      lock: true,
      // text: '加载中......',
      background: 'rgba(0, 0, 0, 0)'
    })
  }
  apiCount++
}

export function hideLoading () {
  if (apiCount <= 0) {
    return
  }
  apiCount--
  if (apiCount === 0) {
    loading.close()
  }
}

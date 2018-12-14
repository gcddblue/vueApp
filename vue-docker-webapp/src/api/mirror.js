import axios from './axios'
import {HOST} from 'common/js/config'

export function getMirrorList (prePage, currentPage, isload, params) {
  const url = HOST + `/api/imagelist/${prePage}/${currentPage}`
  return axios.get(url, isload, params)
}

export function getMirrorInfo (imagecode, isload) {
  const url = HOST + `/api/imagedetail/${imagecode}`
  return axios.get(url, isload)
}

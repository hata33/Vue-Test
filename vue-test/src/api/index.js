import request from '@/utils/axios'

export function getInfo (params){
  return request({
    url: '/api/',
    method: 'get',
    params
  })
}

export function publishTask (data) {
  return request({
    url: '/api/',
    method: 'post',
    data
  })
}
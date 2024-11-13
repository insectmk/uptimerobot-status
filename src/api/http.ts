import axiosInstance from '@/api/axiosInstance'
import type { AxiosResponse } from 'axios'

/**
 * 发送get请求
 * @param url 请求接口
 * @param parameter 请求参数
 * @return Axios对象
 */
export const getAction = (url: string, parameter?: object): Promise<AxiosResponse<object>> => {
  return axiosInstance({
    url: url,
    method: 'get',
    params: parameter // 使用 params 而不是 data
  })
}

/**
 * 发送post请求
 * @param url 请求接口
 * @param data 请求参数
 * @return Axios对象
 */
export const postAction = (url: string, data?: object): Promise<AxiosResponse<object>> => {
  return axiosInstance({
    url: url,
    method: 'post',
    data: data
  })
}

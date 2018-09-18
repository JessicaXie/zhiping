/*
* 使用axios分装一个ajax请求函数
* 函数的返回值promise对象
* */

import axios from 'axios'

export default function ajax(url, data={}, method='GET') {
  if (method === 'GET') {
    //将data中所有数据转换成query参数字符串接到url中
    //Object.keys(obj):得到obj对象自身所有属性名组成为数组
    let queryString = ''
    Object.keys(data).forEach(key => {
      const value = data[key]
      queryString +=key + '=' + value  + '&'
    })
    if (queryString){//
      queryString = queryString.substring(0,queryString.length-1)
      url += '?' + queryString
    }
    //发送get请求
    return axios.get(url)
  } else if (method === 'POST'){
    // 发送post请求
    return axios.post(url,data)
  } else {
    return console.log('你的请求 无法处理！！')
  }
}
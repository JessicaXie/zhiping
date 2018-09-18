/*
包含n个action creator函数的模块
同步action: 对象
异步action: dispatch函数
 */
import {reqRegister,reqLogin} from '../api'
import {AUTH_SUCCESS,ERROR_MSG} from './action-types'

//注册/登录成功的同步action
const authSuccess = (user) => ({type:AUTH_SUCCESS,data:user})
//注册/登录失败的同步action
const errorMsg = (msg) => ({type:ERROR_MSG,data:msg})

//注册异步action
export function register({username, password, type}) {
  return dispatch => {
    //异步ajax请求注册接口
    reqRegister({username, password, type}).then(response => {
      const result = response.data
      if (result.code === 0 ) {//成功
        console.log(result)
        const user = result.data
        console.log(user)
        //分发成功同步action
        dispatch(authSuccess(user))
      } else {//失败
        const msg = result.msg
        //分发失败同步action
        dispatch(errorMsg(msg))
      }
    })
  }
}


//登录异步action
export function login(usename, password) {
  return dispatch => {
    //异步ajax请求登录接口
    reqLogin(usename, password).then(response => {
      const result = response.data
      if (result.code === 0 ) {//成功
        const user = result.data
        //分发成功同步action
      } else {//失败
        const msg = result.msg
        //分发失败同步action
        dispatch(errorMsg(msg))
      }
    })
  }
}
/*
包含n个action creator函数的模块
同步action: 对象
异步action: dispatch函数
 */
import {reqRegister,reqLogin,reqUpdateUser} from '../api'
import {AUTH_SUCCESS,ERROR_MSG, RECEIVE_USER, RESET_USER} from './action-types'

//注册/登录成功的同步action
const authSuccess = (user) => ({type:AUTH_SUCCESS,data:user})
//注册/登录失败的同步action
const errorMsg = (msg) => ({type:ERROR_MSG,data:msg})
//更新用户的同步action
const receiveUser = (user) => ({type:RECEIVE_USER,data:user})
//重置用户信息的同步action
const resetUser = (msg) => ({type:RESET_USER,data:msg})


//注册异步action
export function register({username, password, repassword, type}) {
  if (!username){
    return errorMsg('请输入用户名')
  } else if (!password) {
    return errorMsg('请输入密码')
  }else if (password !== repassword){
    return errorMsg('密码两次不一致')
  } else if (!type) {
    return errorMsg('请选择用户类型')
  }

  return async dispatch => {
    //异步ajax请求注册接口
    const response = await reqRegister({username, password, type})
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
  }
}


//登录异步action
export function login(username, password) {
  console.log('aaa')
  return async dispatch => {
    if (!username){
      return dispatch(errorMsg('请输入用户名'))
    } else if (!password) {
      return dispatch(errorMsg('请输入密码'))
    }

    //异步ajax请求登录接口
    const response =await reqLogin(username, password)
    const result = response.data
    if (result.code === 0 ) {//成功
      const user = result.data
      console.log(user)
      //分发成功同步action
      dispatch(authSuccess(user))
    } else {//失败
      const msg = result.msg
      //分发失败同步action
      dispatch(errorMsg(msg))
    }
  }
}

//分发异步action更新后台用户信息
export function updateUser (user){
  return async dispatch=> {
    const response = await reqUpdateUser(user)
    const result = response.data
    if (result.code === 0){//表示成功

      const user = result.data
      console.log(user)
      dispatch(receiveUser(user))
    } else {//更新失败
      const msg = result.meg
      dispatch(resetUser(msg))

    }
  }
}
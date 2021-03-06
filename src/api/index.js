/*
* 包含n个接口请求函数请求
* 函数的返回值为：promise
* */
import ajax from './ajax'

//请求注册接口
export const reqRegister = ({username, password, type}) => ajax('/register', {username, password, type},'POST')

//请求登录接口
export const reqLogin = (username, password) => ajax('/login', {username, password},'POST')

//请求更新用户接口
export const reqUpdateUser = (user) => ajax('/update', user,'POST')

//请求更新用户接口
export const reqUserList = (type) => ajax('/userlist', {type})

// 请求获取当前用户
export const reqUser = () => ajax('/user')
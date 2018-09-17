import React, {Component} from 'react'
import {NavBar, WingBlank, List, WhiteSpace, InputItem, Radio, Button} from 'antd-mobile'

import Logo from '../../componnets/logo/logo'

const ListItem = List.Item
/*
登陆路由组件
 */
export default class Login extends Component {
    //初始状态数据
    state = {
      username: '',
      password: '',
    }

  // 处理输入发生改变的监听回调
  handleChange = (name, val) => {
    this.setState({
      [name] : val
    })
  }
  // 注册的回调函数，去注册页面
  register = () => {
    this.props.history.replace('./register')
  }
  // 登录的回调函数,完成去主页面
  goLogin = () => {
    // 编程式路由跳转
    this.props.history.replace('./main')
  }

  render () {
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <WhiteSpace/>
        <WingBlank>
          <Logo/>
          <WhiteSpace/>
          <InputItem placeholder = '请输入用户名' onChange={val => this.handleChange('username',val)}>用 户 名:</InputItem>
          <InputItem type='password' placeholder = '请输入密码' onChange={ val => this.handleChange('password',val)}>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:</InputItem>
          <Button type='primary' onClick = {this.goLogin}>登&nbsp;&nbsp;&nbsp;录</Button>
          <Button onClick = {this.register} >还没有账号</Button>
          <WhiteSpace/>
        </WingBlank>
      </div>
    )
  }
}
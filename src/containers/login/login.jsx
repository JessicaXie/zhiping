import React, {Component} from 'react'
import {NavBar, WingBlank, WhiteSpace, InputItem, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import Logo from '../../componnets/logo/logo'
import {login} from '../../redux/actions'
/*
登陆路由组件
 */
class Login extends Component {
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
  login = () => {
      console.log(this.state)
    const {username, password} = this.state
    this.props.login(username, password)
  }

  render () {
      const {msg, redirectTo} = this.props.user
      if (redirectTo) {
        //render 函数中需要自动跳转
        return <Redirect to = {redirectTo}/>      }
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <WhiteSpace/>
        <WingBlank>
          <Logo/>
          <WhiteSpace/>
          {msg ? <p className='error-msg'>{msg}</p> : null}
          <InputItem placeholder = '请输入用户名' onChange={val => this.handleChange('username',val)}>用 户 名:</InputItem>
          <InputItem type='password' placeholder = '请输入密码' onChange={ val => this.handleChange('password',val)}>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:</InputItem>
          <Button type='primary' onClick = {this.login}>登&nbsp;&nbsp;&nbsp;录</Button>
          <Button onClick = {this.register} >还没有账号</Button>
          <WhiteSpace/>
        </WingBlank>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {login}
)(Login)
import React, {Component} from 'react'
import {NavBar, WingBlank, List, WhiteSpace, InputItem, Radio, Button} from 'antd-mobile'

import Logo from '../../componnets/logo/logo'

const ListItem = List.Item
/*
注册路由组件
 */
export default class Register extends Component {
  //初始状态数据
  state = {
    username: '',
    password: '',
    repassword: '',
    type: 'dashen'  // dashen/laoban
  }

  // 处理输入发生改变的监听回调
  handleChange = (name, val) => {
    this.setState({
      [name] : val
    })
  }
  // 注册的回调函数
  register = () => {
    alert('已经注册成功')
  }
  // 登录的回调函数
  goLogin = () => {
    // 编程式路由跳转
    this.props.history.replace('./login')
  }

  render () {
    const {type} = this.state

    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <WhiteSpace/>
        <Logo/>
        <WingBlank>
          <WhiteSpace/>
          <List>
            <InputItem placeholder = '请输入用户名' onChange={val => this.handleChange('username',val)}>用 户 名:</InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder = '请输入密码' onChange={ val => this.handleChange('password',val)}>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder = '确认密码' onChange={ val => this.handleChange('repassword',val)}>确认密码:</InputItem>
            <WhiteSpace/>
            <ListItem>
              <span>选择类型:</span>&nbsp;&nbsp;&nbsp;
              <Radio checked={type === 'laoban'} onChange={ () => this.handleChange('type','laoban')} >老板</Radio>&nbsp;&nbsp;&nbsp;
              <Radio checked={type === 'dashen'} onChange={ () => this.handleChange('type','dashen')} >大神</Radio>
            </ListItem>
            <WhiteSpace/>
            <Button type='primary' onClick = {this.register}>注&nbsp;&nbsp;&nbsp;册</Button>
            <WhiteSpace/>
            <Button onClick = {this.goLogin} >已有账号</Button>
            <WhiteSpace/>
          </List>
        </WingBlank>
      </div>
    )
  }
}
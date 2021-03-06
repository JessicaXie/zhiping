import React, {Component} from 'react'
import {Switch,Redirect, Route} from 'react-router-dom'
import {NavBar} from 'antd-mobile'
import {connect} from 'react-redux'
import Cookies from 'js-cookie'

import LaobanInfo from '../laoban-info/laoban-info'
import DashenInfo from '../dashen-info/dashen-info'
import Laoban from '../laoban/laoban'
import Dashen from '../dashen/dashen'
import Message from '../message/message'
import Profile from '../profile/profile'
import {getUser} from '../../redux/actions'
import NavFooter from '../../componnets/nav-footer/nav-footer'
import {getRedirectPath} from "../../utils";

/*
主界面路由组件
 */
class Main extends Component {
  navList = [
    {
      path: '/laoban', // 路由路径
      component: Laoban,
      title: '大神列表',
      icon: 'dashen',
      text: '大神',
    },
    {
      path: '/dashen', // 路由路径
      component: Dashen,
      title: '老板列表',
      icon: 'laoban',
      text: '老板',
    },
    {
      path: '/message', // 路由路径
      component: Message,
      title: '消息列表',
      icon: 'message',
      text: '消息',
    },
    {
      path: '/profile', // 路由路径
      component: Profile,
      title: '用户中心',
      icon: 'personal',
      text: '个人',
    }
  ]

  // 自动登录：
  // 1.判断cookis中是否存在userid,
  //  *    1)不在：跳转到登录界面去登录
  //  *    2)在：判断在redux 中的state中是否存在user
  //  *      a)在：说明已经登录了，看是不是访问的是根目录，是就自动跳转到对应的主界面中去
  //  *      b)不在：发送ajax异步请求获取use信息，保存redux 中state中去

  componentDidMount(){
    const userid = Cookies.get('userid')
    const {_id} = this.props.user
    //此时代表已经在cookie中存在userid,同时在redux中的user对象中没有_id，那就发请求
    if(userid && !_id){
      //调用action中的getUser，发请求，得到数据
      this.props.getUser()
    }
  }

  render () {
    const {user} = this.props
    //先判断时候是登录状态，用cookie来判断，借用js-cookie库
    const userid = Cookies.get('userid')
    if (!userid){
      return <Redirect to = '/login'/>
    }

    const {_id} = this.props.user
    if (!_id){
      // 发送ajax异步请求获取use信息，保存redux 中state中去
      //不能在render()中发ajax请求(在componentDidMount去发请求),给一个lodding...界面
      return (<p>请稍等...</p>)
    }

    const navList = this.navList


    //得到当前的nav对象
    const currentNav = navList.find(nav => this.props.location.pathname === nav.path)

    // 动态确定哪个nav需要隐藏
    const {type} = this.props.user
    if(type==='laoban') {
      navList[1].hide = true
    } else {
      navList[0].hide = true
    }

    // 如果redux的user中已经有信息(已经登陆), 如果请求的是应用根路径, 自动跳转到对应的主界面
    // 当前请求的path
    const path = this.props.location.pathname
    if(path === '/') {
      //重定向到响应的主界面
      return <Redirect to={getRedirectPath(user.type, user.header)}/>
    }

    return (
      <div>
        {currentNav ? <NavBar>{currentNav.title}</NavBar> : null}

        <Switch>
          <Route path = '/laobaninfo' component = {LaobanInfo}/>
          <Route path = '/dasheninfo' component = {DashenInfo}/>

          <Route path = '/dashen' component = {Dashen}/>
          <Route path = '/laoban' component = {Laoban}/>
          <Route path = '/message' component = {Message}/>
          <Route path = '/profile' component = {Profile}/>
        </Switch>

        {currentNav ? <NavFooter navList={this.navList}/> : null}
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {getUser}
)(Main)

/**
 * 自动登录的思路：
 *  1.判断cookis中是否存在userid,
 *    1)不在：跳转到登录界面去登录
 *    2)在：判断在redux 中的state中是否存在user
 *      a)在：说明已经登录了，看是不是访问的是根目录，是就自动跳转到对应的主界面中去
 *      b)不在：发送ajax异步请求获取use信息，保存redux 中state中去
 *
 * */
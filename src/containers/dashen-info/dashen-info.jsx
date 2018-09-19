import React,{Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {NavBar, InputItem, TextareaItem, WingBlank, Button} from 'antd-mobile'

import SetHeaderIcon  from '../../componnets/headerIcon/headerIcon'
import {updateUser} from "../../redux/actions";

class DashenInfo extends Component{
  state = {
    header: '', // 头像名称
    info: '', // 个人简介
    post: '', // 求职岗位
  }

  //得到头像的回调函数
  setHeader = (header) => {
    //更新状态
    this.setState({
      header
    })
  }

  //监听函数
  handleChange = (name, val) => {
    this.setState({
      [name] :val
    })
  }

  save = () => {
    // 分发异步action更新后台用户信息同时更新redux中的user状态
    this.props.updateUser(this.state)
  }
  render(){
    const {header} = this.props.user
    //如果redirectTo有值，就需要自动跳转到对应的路径
    if (header){
      //render 函数中需要自动跳转
      return <Redirect to = '/dashen'/>
    }
    return(
      <div>
        <NavBar>大神信息完善</NavBar>
        <SetHeaderIcon setHeader={this.setHeader}/>
        <InputItem onChange={(val) =>this.handleChange('post',val) }>求职岗位:</InputItem>
        <TextareaItem title = '个人简介:' rows ={3} onChange={(val) =>this.handleChange('info',val) }/>
        <WingBlank>
          <Button type = 'primary' onClick={this.save}>保 存</Button>
        </WingBlank>
      </div>
    )
  }
}

export default connect(
  state => ({user : state.user}),
  {updateUser}
)(DashenInfo)
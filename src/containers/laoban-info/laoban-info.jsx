import React,{Component} from 'react'
import {NavBar,WhiteSpace,Button,List,InputItem,TextareaItem,WingBlank} from 'antd-mobile'
import {connect} from 'react-redux'

import SetHeaderIcon from '../../componnets/headerIcon/headerIcon'
import {updateUser} from '../../redux/actions'

class LaobanInfo extends Component{
  state = {
    header: '',
    info: '',
    post: '',
    salary: '',
    company: ''
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
    return(
      <div>
        <NavBar>老板信息完善</NavBar>
        <SetHeaderIcon setHeader={this.setHeader}/>
        <InputItem onChange={(val) =>this.handleChange('post',val) }>招聘职位:</InputItem>
        <InputItem onChange={(val) =>this.handleChange('company',val) }>公司名称:</InputItem>
        <InputItem onChange={(val) =>this.handleChange('salary',val) }>职位薪资:</InputItem>
        <TextareaItem title = '职位要求:' rows ={3} onChange={(val) =>this.handleChange('info',val) }/>
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
)(LaobanInfo)
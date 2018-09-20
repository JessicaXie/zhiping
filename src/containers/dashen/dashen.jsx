import React, {Component} from 'react'
import {connect} from 'react-redux'

import UserList from '../../componnets/user-list/user-list'

/*
大神的主界面路由组件
 */
class Dashen extends Component {

  render () {
    return (
      <UserList userList = {this.props.userList}/>
    )
  }
}

export default connect(
  state => ({userList : state.userList}),
  {}
)(Dashen)
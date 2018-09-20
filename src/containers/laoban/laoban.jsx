import React, {Component} from 'react'
import {connect} from 'react-redux'

import UserList from '../../componnets/user-list/user-list'

/*
老板的主界面路由组件
 */
class Laoban extends Component {
  render () {
    return (
      <UserList/>
    )
  }
}

export default connect(
  state => ({userlist : state.userlist}),
  {}
)(Laoban)
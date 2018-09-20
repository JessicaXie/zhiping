import React, {Component} from 'react'
import {connect} from 'react-redux'

/*
大神的主界面路由组件
 */
class UserList extends Component {
  render () {
    return (
      <div>UserList</div>
    )
  }
}

export default connect(
  state => ({}),
  {}
)(UserList)
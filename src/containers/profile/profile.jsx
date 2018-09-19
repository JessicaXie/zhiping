import React, {Component} from 'react'
import {connect} from 'react-redux'

/*
个人中心路由组件
 */
class Profile extends Component {
  render () {
    return (
      <div>Profile</div>
    )
  }
}

export default connect(
  state => ({}),
  {}
)(Profile)
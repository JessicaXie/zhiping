import React, {Component} from 'react'
import {connect} from 'react-redux'

/*
消息面路由组件
 */
class Message extends Component {
  render () {
    return (
      <div>Message</div>
    )
  }
}

export default connect(
  state => ({}),
  {}
)(Message)
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Card, WingBlank, WhiteSpace} from 'antd-mobile'

const Header = Card.Header
const Body = Card.Body


/*
用户列表路由组件
 */
class UserList extends Component {

  static propTypes ={
    userList: PropTypes.array.isRequired
  }

  render () {
    const userList = this.props.userList.filter(use => use.header)

    return (
      <WingBlank>
        {

          userList.map((use, index) => (
            <div key={use._id}>
              <WhiteSpace/>
              <Card >
                <Header thumb={require(`../../assets/imgs/${use.header}.png`)}
                        extra={use.username} />
                <Body>
                  {use.post ? <div>职位: {use.post}</div> : null}
                  {use.company ? <div>公司: {use.company}</div> : null}
                  {use.salary ? <div>月薪: {use.salary}</div> : null}
                  {use.info ? <div>描述: {use.info}</div> : null}
                </Body>
              </Card>
            </div>
          ))
        }
      </WingBlank>
      )
  }
}

export default withRouter(UserList)
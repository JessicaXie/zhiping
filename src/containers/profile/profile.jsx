import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Result,WhiteSpace,List,Button} from 'antd-mobile'


const Item = List.Item
const Brief = Item.Brief
/*
个人中心路由组件
 */
class Profile extends Component {
  render () {
    const {username, header, post, info, salary, company} = this.props.user
    return (
      <div>
        <Result
          img={<img src={require(`../../assets/imgs/${header}.png`)} style={{width: 50}} alt="header"/>}
          title={username}
          message={info}
        />

        <List renderHeader={() => '相关信息'}>
          <Item multipleLine>
            {post ? <Brief>职位: {post}</Brief> : null}
            {info ? <Brief>简介: {info}</Brief> : null}
            {salary ? <Brief>薪资: {salary}</Brief> : null}
          </Item>
        </List>
        <WhiteSpace/>
        <List>
          <Button type='warning'>退出登录</Button>
        </List>
      </div>

    )
  }
}

export default connect(
  state => ({user : state.user}),
  {}
)(Profile)
import React,{Component} from 'react'
import {Grid,List,} from 'antd-mobile'
import PropTypes from 'prop-types'

export default class SetHeaderIcon extends Component{

  //声明
  static propType = {
    setHeader:PropTypes.func.isRequired
  }

  state = {
    icon: null // 当前选择的图片对象
  }
  //选择回调的函数
  chooseHeaderIcon = ({icon, text}) => {
    // 更新自身的icon状态
    this.setState({
      icon
    })
    //更新父组件
    this.props.setHeader(text)
  }


  render(){
    //得到头像列表
    const headerList = []
    for (var i=0;i<20;i++) {
      headerList.push({
        // 必须用require()动态加载一个图片模块
        // webpack默认就可以编译打包ES6和commonjs
        icon:require('../../assets/imgs/头像'+(i+1)+'.png'),
        text:'头像'+(i+1)
      })
    }
    const {icon} = this.state
    const headerUI = icon ? (<div><span>你选择的头像是</span><img src={icon}/></div>) : '请选择头像'

    return(
      <List renderHeader={() => headerUI}>
       <Grid data={headerList} columnNum={5} onClick = {this.chooseHeaderIcon}/>
      </List>
    )
  }
}
import React,{Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {TabBar} from 'antd-mobile'

const Item = TabBar.Item

class NavFooter extends Component{
  static propTypes = 

  render(){
    return(
      <TabBar>
        {

        }

      </TabBar>
    )
  }
}

export default connect()(NavFooter)
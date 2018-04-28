import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Provider 做的事情也很简单，它就是一个容器组件，
 * 会把嵌套的内容原封不动作为自己的子组件渲染出来。
 * 它还会把外界传给它的 props.store 放到 context，
 * 这样子组件 connect 的时候都可以获取到
 */
class Provider extends Component {
    static propTypes = {
      store: PropTypes.object,
      children: PropTypes.any
    }
  
    static childContextTypes = {
      store: PropTypes.object
    }
  
    getChildContext () {
      return {
        store: this.props.store
      }
    }
  
    render () {
      return (
        <div>{this.props.children}</div>
      )
    }
  }

  export default Provider
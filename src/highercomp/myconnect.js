import React, { Component } from 'react'
import PropTypes from 'prop-types'


/**
 * mapStateToProps会接受 store.getState() 的结果作为参数，然后返回一个对象，
 * 这个对象是根据 state 生成的。mapStateTopProps 相当于告知了 Connect 应该
 * 如何去 store 里面取数据，然后可以把这个函数的返回结果传给被包装的组件
 */
export default (mapStateToProps,mapDispatchToProps) => (WrappedComponent) => {
  class Connect extends Component {
      
        static contextTypes = {
            store: PropTypes.object
        }

        /**
         * 在 Connect 组件的 constructor 里面初始化了 state.allProps，
         * 它是一个对象，用来保存需要传给被包装组件的所有的参数
         */
        constructor(){
            super()
            this.state = {allProps:{}}
        }

        /**
         * 生命周期 componentWillMount 会调用调用 _updateProps 进行初始化，
         * 然后通过 store.subscribe 监听数据变化重新调用 _updateProps
         */
        componentWillMount(){
            const {store} = this.context
            this._updateProps()
            store.subscribe(()=>this._updateProps())
        }

        /**
         * 为了让 connect 返回新组件和被包装的组件使用参数保持一致，我们会把所有
         * 传给 Connect 的 props 原封不动地传给 WrappedComponent。所以在 _updateProps 
         * 里面会把 stateProps 和 this.props 合并到 this.state.allProps 
         * 里面，再通过 render 方法把所有参数都传给 WrappedComponent
         * 
         * mapStateToProps 也发生点变化，它现在可以接受两个参数了，我们会把传给 
         * Connect 组件的 props 参数也传给它，那么它生成的对象配置性就更强了，
         * 我们可以根据 store 里面的 state 和外界传入的 props 生成我们想传给被
         * 包装组件的参数
         */
        _updateProps(){
            const {store} = this.context
            // 额外传入 props，让获取数据更加灵活方便
            let stateProps = mapStateToProps 
                ? mapStateToProps(store.getState(),this.props)
                : {} // 防止 mapStateToProps 没有传入
            let dispatchProps = mapDispatchToProps
                ? mapDispatchToProps(store.dispatch,this.props)
                : {} //防止 mapDispatchToProps 没有传入
            this.setState({// 整合普通的 props 和从 state 生成的 props
                allProps:{
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props
                }
            })
        }

        // TODO: 如何从 store 取数据？
        render () {
            // {...stateProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去                
            return <WrappedComponent {...this.state.allProps}/>
        }
  }

  return Connect
}
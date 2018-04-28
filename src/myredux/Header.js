import React, { Component } from 'react'
import PropTypes from 'prop-types'
import myconnect from '../highercomp/myconnect'

class Header extends Component {

    static propTypes = {
        themeColor:PropTypes.string
    }

    // static contextTypes ={
    //     store:PropTypes.object
    // }

    // constructor(){
    //     super()
    //     this.state = {themeColor:''}
    // }

    /**
     * 通过 store.subscribe，在数据变化的时候重新调用 _updateThemeColor，
     * 而 _updateThemeColor 会去 store 里面取最新的 themeColor 然后通过 
     * setState 重新渲染组件，这时候组件就更新了。现在可以自由切换主题色了
     */
    // componentWillMount(){
    //     const {store} = this.context
    //     this._updateThemeColor()
    //     store.subscribe(() => this._updateThemeColor())
    // }

    // _updateThemeColor(){
    //     const {store} = this.context
    //     const state = store.getState()
    //     this.setState({themeColor:state.themeColor})
    // }


    render () {
        return (
        <h1 style={{color:this.props.themeColor}}>Hello React.js</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
  }

Header = myconnect(mapStateToProps)(Header)

export default Header
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
// import myconnect from '../highercomp/myconnect'
import { connect } from 'react-redux'

class Content extends Component {

    static propTypes = {
        themeColor:PropTypes.string
    }

    // static contextTypes = {
    //     store:PropTypes.object
    // }

    // constructor(){
    //     super()
    //     this.state = {themeColor:''}
    // }

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
        <div>
            <p style={{color:this.props.themeColor}}>隆重向大家介绍我是Hello React.js</p>
            <ThemeSwitch />
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
  }
Content = connect(mapStateToProps)(Content)

export default Content
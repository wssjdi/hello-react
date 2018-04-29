import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
            <p style={{color:this.props.themeColor}}>隆重向大家介绍我是Hello React.js</p>
        )
    }
}
export default Content
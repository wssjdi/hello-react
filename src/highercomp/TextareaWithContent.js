import React, { Component } from 'react'
import wrapWithLoadDate from './wrapWithLoadData'

/**
 * 定义一个非常简单的 InputWithUserName，
 * 它会把 props.data 作为 <input /> 的 value 值。
 * 然把这个组件和 'username' 传给 wrapWithLoadData，wrapWithLoadData 会返回一个新的组件，
 * 我们用这个新的组件覆盖原来的 InputWithUserName，然后再导出去模块
 */
class TextareaWithContent extends Component {
    render(){
        return <input value={this.props.data}/>
    }
}

TextareaWithContent = wrapWithLoadData(TextareaWithContent,'content')

export default TextareaWithContent
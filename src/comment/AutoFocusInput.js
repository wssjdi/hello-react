import React,{Component} from 'react'

class AutoFocusInput extends Component {


    /**
     * 我们可以给任意代表 HTML 元素标签加上 ref 从而获取到它 DOM 元素然后调用 DOM API。
     * 但是记住一个原则：能不用 ref 就不用。
     * 特别是要避免用 ref 来做 React.js 本来就可以帮助你做到的页面自动更新的操作和事件监听。
     * 多余的 DOM 操作其实是代码里面的“噪音”，不利于我们理解和维护。
     * 其实可以给组件标签也加上 ref ，例如
     * <Clock ref={(clock) => this.clock = clock} />
     */
    componentDidMount(){
        //然后我们就可以在 componentDidMount 中使用这个 DOM 元素，并且调用 this.input.focus() 的 DOM API。整体就达到了页面加载完成就自动 focus 到输入框的功能
        this.input.focus()
    }

    render(){
        return (
            //可以看到我们给 input 元素加了一个 ref 属性，这个属性值是一个函数。当 input 元素在页面上挂载完成以后，React.js 就会调用这个函数，并且把这个挂载以后的 DOM 节点传给这个函数。在函数中我们把这个 DOM 元素设置为组件实例的一个属性，这样以后我们就可以通过 this.input 获取到这个 DOM 元素。
            <input ref={(input)=>this.input = input} />
        )
    }
}

export default AutoFocusInput
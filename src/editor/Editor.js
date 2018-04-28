import React,{Component} from 'react'

class Editor extends Component {

    constructor(){
        super()
        this.state = {
            /**
             * 在 React.js 中你需要把 CSS 属性变成一个对象再传给元素
             * 
             * style 接受一个对象，这个对象里面是这个元素的 CSS 属性键值对，
             * 原来 CSS 属性中带 - 的元素都必须要去掉 - 换成驼峰命名，
             * 如 font-size 换成 fontSize，text-align 换成 textAlign
             * 
             * 用对象作为 style 方便我们动态设置元素的样式。
             * 我们可以用 props 或者 state 中的数据生成样式对象再传给元素，
             * 然后用 setState 就可以修改样式，非常灵活：
             * <h1 style={{fontSize: '12px', color: this.state.color}}>React.js 小书</h1>
             * 只要简单地 setState({color: 'blue'}) 就可以修改元素的颜色成蓝色
             * 
             */
            content:'<h1 style={{fontSize: "12px", color: "red"}}> 这是一个 DangerouslySetHTML </h1>'
        }
    }

    render(){
        /**
         * React.js 提供了一个属性 dangerouslySetInnerHTML，
         * 可以让我们设置动态设置元素的 innerHTML
         * 
         * 需要给 dangerouslySetInnerHTML 传入一个对象，
         * 这个对象的 __html 属性值就相当于元素的 innerHTML，
         * 这样我们就可以动态渲染元素的 innerHTML 结构了
         * 
         * 因为设置 innerHTML 可能会导致跨站脚本攻击（XSS），
         * 所以 React.js 团队认为把事情搞复杂可以防止（警示）大家滥用这个属性。
         * 这个属性不必要的情况就不要使用
         */
        return (
            <div className='editor-wrapper'
                dangerouslySetInnerHTML={{__html:this.state.content}}>
            </div>
        )
    }
}

export default Editor
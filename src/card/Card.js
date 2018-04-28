import React,{Component} from 'react'

class Card extends Component {

    render(){
        return (
            <div className='card'>
                <div className='card-content'>
                    {this.props.content}
                </div>
                <div className='card-children'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

// export default Card

ReactDOM.render(
    /**
     * 我们通过给 Card 组件传入一个 content 属性，这个属性可以传入任意的 JSX 结构。
     * 然后在 Card 内部会通过 {this.props.content} 把内容渲染到页面上
     */
    <Card content={
        <div>
            <h2>React.js</h2>
            <div>开源、免费、专业、简单</div>
            订阅：<input />
        </div>
    }/>,
    document.getElementById('root')
)

ReactDOM.render(
    /**
     * 组件标签也能像普通的 HTML 标签那样编写内嵌的结构，那么就方便很多了。
     * 实际上，React.js 默认就支持这种写法
     */
    <Card>
        <h2>React.js</h2>
        <div>开源、免费、专业、简单</div>
        订阅：<input />
    </Card>,
    document.getElementById('root')
)
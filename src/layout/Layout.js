import React,{Component} from 'react'

class Layout extends Component {

    /**
     * 这是一个两列布局组件，嵌套的 JSX 的第一个结构会成为侧边栏，第二个结构会成为内容栏，
     * 其余的结构都会被忽略。这样通过这个布局组件，就可以在各个地方高度复用我们的布局
     */
    render(){
        return (
            <div className='two-cols-layout'>
                <div className='sidebar'>
                    {this.props.children[0]}
                </div>
                <div className='main'>
                    {this.props.children[1]}
                </div>
            </div>
        )
    }

}

export default Layout
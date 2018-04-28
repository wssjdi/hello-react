import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Clock extends Component {   

    static contextTypes = {
        themeColor:PropTypes.string
    }

    /**
     * 一般会把组件的 state 的初始化工作放在 constructor 里面去做
     */
    constructor(){
        super()
        this.state = {
            date:new Date()
        }
    }

    /**
     * 在 componentWillMount 进行组件的启动工作，
     * 例如 Ajax 数据拉取、定时器的启动
     */
    componentWillMount(){
        //
        this.timer = setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000)
    }

    /**
     * 有些组件的启动需要依赖一些DOM元素的，例如动画加载
     * 而 componentWillMount 的时候组件还没挂载完成，
     * 所以没法进行这些启动工作，这时候就可以把这些操作放在 componentDidMount 当中
     */
    componentDidMount(){
    }

    /**
     * 组件从页面上销毁的时候，有时候需要一些数据的清理，
     * 例如定时器的清理，就会放在 componentWillUnmount 里面去做
     */
    componentWillUnmount(){
        clearInterval(this.timer)
    }

    /**
     * 你可以通过这个方法控制组件是否重新渲染。
     * 如果返回 false 组件就不会重新渲染。
     * 这个生命周期在 React.js 性能优化上非常有用。
     * @param {*} nextProps 
     * @param {*} nextState 
     */
    shouldComponentUpdate(nextProps, nextState){
        return true
    }

    /**
     * 组件从父组件接收到新的 props 之前调用。
     * @param {*} nextProps 
     */
    componentWillReceiveProps(nextProps){
    }

    /**
     * 组件开始重新渲染之前调用
     */
    componentWillUpdate(){
        
    }

    /**
     * 组件重新渲染并且把更改变更到真实的 DOM 以后调用。
     */
    componentDidUpdate(){
        
    }

    render(){
        return (
            <div className='clock'>
                <h1>
                    <p style={{color:this.context.themeColor}}>当前时间是：{this.state.date.toLocaleTimeString()}</p>                    
                </h1>
            </div>
        )
    }
}

export default Clock
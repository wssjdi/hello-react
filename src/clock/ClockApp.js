import React,{Component} from 'react'
import Clock from './Clock'

class ClockApp extends Component{

    constructor(){
        super()
        this.state = {
                isShowClock:true
        }
    }

    handleShowOrHide(){
        this.setState({
            isShowClock:!this.state.isShowClock
        })
    }

    render(){
        return (
            <div className='clock-app'>
                {this.state.isShowClock ? <Clock /> : null}
                <div className='comment-field-button'>
                    <button onClick={this.handleShowOrHide.bind(this)}>
                        {this.state.isShowClock ? '隐藏' : '显示'}
                    </button>
                </div> 
            </div>

        )
    }
}
export default ClockApp
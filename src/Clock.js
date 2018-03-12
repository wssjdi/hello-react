import React, { Component } from 'react'

class Clock extends Component {
    constructor () {
      super()
      this.state = {
        date: new Date()
      }
    }

    componentWillMount(){
        this.timer = setInterval(()=>{
            this.setState({date:new Date()})
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
  
    render () {
      return (
        <div>
          <h1>
            <p>现在的时间是:{this.state.date.toLocaleTimeString()}</p>
          </h1>
        </div>
      )
    }
  }

export default Clock;  
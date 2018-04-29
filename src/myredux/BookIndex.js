import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import createStore from './createStore'
// import Provider from './Provider'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Header from './container/Header'
import Content from './container/Content'
import ThemeSwitch from './container/ThemeSwitch'
import './bookIndex.css'

const themeReducer = (state,action)=>{  
  if(!state) return {
    themeColor:'green'
  }
  switch(action.type){
    case 'CHANGE_COLOR':
      return {...state,themeColor:action.themeColor}
    default:
      return state
  }
}

const store = createStore(themeReducer)

class BookIndex extends Component {

    static childContextTypes = {
      store:PropTypes.object
    }

    getChildContext(){
      return {store}
    }

    render () {
      return (
        <Provider store={store}>
          <div>
            <Header />
            <div>
              <Content />
              <ThemeSwitch />
            </div>
          </div>
        </Provider>
      )
    }
}

export default BookIndex
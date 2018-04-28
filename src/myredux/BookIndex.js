import React, { Component } from 'react'
import PropTypes from 'prop-types'
import createStore from './createStore'
import Provider from './Provider'
import Header from './Header'
import Content from './Content'
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
          <Header />
          <Content />
        </Provider>
      )
    }
}

export default BookIndex
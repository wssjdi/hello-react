import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
// import CommentApp from './comment/CommentApp'
// import createStore from './myredux/createStore'
// import BookIndex from './myredux/BookIndex'
import CommentApp from './newcomment/containers/CommentApp'
import commentsReducer from './newcomment/reducers/comments'
import registerServiceWorker from './registerServiceWorker';




//CommentApp Demo
// ReactDOM.render(<BookIndex />, document.getElementById('root'));

const store = createStore(commentsReducer)

ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>, 
  document.getElementById('root'));

registerServiceWorker();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CommentApp from './comment/CommentApp'
// import createStore from './myredux/createStore'
import BookIndex from './myredux/BookIndex'
import registerServiceWorker from './registerServiceWorker';




//CommentApp Demo
ReactDOM.render(<BookIndex />, document.getElementById('root'));

registerServiceWorker();
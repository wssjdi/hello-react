//   // 定一个 reducer
//   function reducer (state, action) {
//     /* 初始化 state 和 switch case */
//   }
  
//   // 生成 store
//   const store = createStore(reducer)
  
//   // 监听数据变化重新渲染页面
//   store.subscribe(() => renderApp(store.getState()))
  
//   // 首次渲染页面
//   renderApp(store.getState()) 
  
//   // 后面可以随意 dispatch 了，页面自动更新
//   store.dispatch(...)





//make-redux Demo 一下部分需要剪切到index.js上运行

// let appState = {
//     title:{
//         text:'Hello React.js',
//         color:'red'
//     },
//     content:{
//         text:'Hello React.js 内容',
//         color:'blue'
//     }
// }


/**
 * 定义一个函数，叫 dispatch，它专门负责数据的修改
 * 所有对数据的操作必须通过 dispatch 函数。
 * 它接受一个参数 action，这个 action 是一个普通的 JavaScript 对象，
 * 里面必须包含一个 type 字段来声明你到底想干什么。dispatch 在 swtich 
 * 里面会识别这个 type 字段，能够识别出来的操作才会执行对 appState 的修改
 * @param {*} state 
 * @param {*} action 
 */
// function stateChanger(state,action){
//     if(!state){
//         return {
//             title:{
//                 text:'Hello React.js',
//                 color:'red'
//             },
//             content:{
//                 text:'Hello React.js 内容',
//                 color:'blue'
//             }
//         }
//     }

//     switch(action.type){
//         case 'UPDATE_TITLE_TEXT':
//             return {
//                 ...state,
//                 title:{
//                     ...state.title,
//                     text:action.text
//                 }
//             }
//         case 'UPDATE_TITLE_COLOR':
//             return {
//                 ...state,
//                 title:{
//                     ...state.title,
//                     color:action.color
//                 }
//             }
//         default:
//             state
//     }
// }

// function renderApp(newAppState,oldAppState={}){
//     if(newAppState===oldAppState) return
//     console.log('render app...')
//     renderTitle(newAppState.title,oldAppState.title)
//     renderContent(newAppState.content,oldAppState.content)
// }

// function renderTitle(newTitle,oldTitle={}){
//     if(newTitle===oldTitle)return
//     console.log('render title...')
//     const titleDOM = document.getElementById('title');
//     titleDOM.innerHTML = newTitle.text
//     titleDOM.style.color = newTitle.color
// }

// function renderContent (newContent,oldContent={}){
//     if(newContent===oldContent)return
//     console.log('render content...')
//     const contentDOM = document.getElementById('content');
//     contentDOM.innerHTML = newContent.text
//     contentDOM.style.color = newContent.color
// }

// const store = createStore(stateChanger);
// let oldState = store.getState()
// store.subscribe(()=>{
//     const newState = store.getState()
//     renderApp(newState,oldState)
//     oldState = newState
// })

// renderApp(store.getState());
// store.dispatch({type:'UPDATE_TITLE_TEXT',text:'《Hello React.js》'})
// store.dispatch({type:'UPDATE_TITLE_COLOR',color:'green'})


/**
 * 一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，
 * 我们就把这个函数叫做纯函数。
 * 为什么要煞费苦心地构建纯函数？因为纯函数非常“靠谱”，执行一个纯函数
 * 你不用担心它会干什么坏事，它不会产生不可预料的行为，也不会对外部产
 * 生影响。不管何时何地，你给它什么它就会乖乖地吐出什么。如果你的应用
 * 程序大多数函数都是由纯函数组成，那么你的程序测试、调试起来会非常方便
 * 
 * createStore 接受一个叫 reducer 的函数作为参数，这个函数规定是一个纯函数，
 * 它接受两个参数，一个是 state，一个是 action
 * 
 * 如果没有传入 state 或者 state 是 null，那么它就会返回一个初始化的数据。
 * 如果有传入 state 的话，就会根据 action 来“修改“数据，但其实它没有、也规
 * 定不能修改 state，而是要通过上节所说的把修改路径的对象都复制一遍，然后产
 * 生一个新的对象返回。如果它不能识别你的 action，它就不会产生新的数据，而
 * 是（在 default 内部）把 state 原封不动地返回
 * 
 * reducer 是不允许有副作用的。你不能在里面操作 DOM，也不能发 Ajax 请求，
 * 更不能直接修改 state，它要做的仅仅是 —— 初始化和计算新的 state。
 * 
 * reducer 只能是纯函数，功能就是负责初始 state，
 * 和根据 state 和 action 计算具有共享结构的新的 state
 */
export default (reducer) => {
    let state = null
    const listeners = []
    const subscribe = (listener)=> listeners.push(listener)

    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state,action)
        listeners.forEach((listener)=>listener())
    }    
    dispatch({})//初始化state
    return {getState,dispatch,subscribe}
}
/**
 * 想清楚我们才能写好 reducer，因为 reducer 就是用来描述数据的形态
 * 和相应的变更。新增和删除评论这两个操作是最明显的，大家应该都能够轻
 * 易想到。还有一个，我们的评论功能其实会从 LocalStorage 读取数据，
 * 读取数据以后其实需要保存到应用状态中。所以我们还有一个初始化评论的
 * 操作。所以目前能想到的就是三个操作
 */
//action types
const INIT_COMMENTS = 'INIT_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'


//根据这三个操作编写 reducer
export default function (state, action) {
  if (!state) {
    state = {comments:[]}  
  }
  switch (action.type) {
    case INIT_COMMENTS:
      //初始化数据
      return {comments:action.comments}  
    case ADD_COMMENT:
        //新增数据
      return {comments:[...state.comments, action.comment]}
    case DELETE_COMMENT:
      //删除数据
      return {comments: [
        ...state.comments.slice(0, action.commentIndex),
        ...state.comments.slice(action.commentIndex + 1)
      ]}  
    default:
      return state
  }  
}

//action creators
export const initComments = (comments)=>{
  return {type:INIT_COMMENTS,comments}
}

export const addComment = (comment)=> {
  return {type:ADD_COMMENT,comment}
}

export const deleteComment = (commentIndex)=>{
  return {type:DELETE_COMMENT,commentIndex}
}
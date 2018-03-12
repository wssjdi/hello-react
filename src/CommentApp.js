import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import Clock from './Clock'

class CommentApp extends Component {

    constructor(){
        super();
        this.state={
            comments:[],
            isShowClock:true
        }

    }

    componentWillMount(){
        this._loadComments();
    }

    _loadComments(){
        let comments = localStorage.getItem('comments');
        if(comments){
            comments = JSON.parse(comments);
            this.setState({'comments':comments});
        }
    }

    _saveComments(comments){
        localStorage.setItem('comments',JSON.stringify(comments));
    }


    handleShowOrHideClock(){
        this.setState({
            isShowClock:!this.state.isShowClock
        });
    }

    handleSubmitComment(comment){        
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        this.state.comments.push(comment);
        this.setState({
            comments:this.state.comments,
        });
        this._saveComments(this.state.comments)
        console.log(comment);
    }

    handleDeleteComment(index){
        const comments = this.state.comments;
        comments.splice(index,1);
        this.setState({comments});
        this._saveComments(comments);
        console.log(index);
    }


  render() {
    return (
      <div className='wrapper'>
        {this.state.isShowClock ? <Clock /> : null}      
        <button onClick={this.handleShowOrHideClock.bind(this)}>
          显示或隐藏时钟
        </button>  
        <CommentInput 
            onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList 
            comments={this.state.comments} 
            onDeleteComment={this.handleDeleteComment.bind(this)}/>
      </div>
    )
  }
}

export default CommentApp
import React,{Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList extends Component {

    /**
     * 可选参数我们可以通过配置 defaultProps，让它在不传入的时候有默认值
     */
    static defaultProps = {
        comments:[]
    }
    
    static propTypes = {
        comments:PropTypes.array,
        onDeleteComment:PropTypes.func
    }

    handleDeleteComment(index){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }
    }

    render(){
        return (
            <div>
                {
                    this.props.comments.map(
                        (comment,i)=><Comment 
                            key={'comment'+i}  
                            index={i}
                            comment={comment} 
                            onDeleteComment={this.handleDeleteComment.bind(this)}/>
                    )
                }
            </div>
        )
    }
}

export default CommentList
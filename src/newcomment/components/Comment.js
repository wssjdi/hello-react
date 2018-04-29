import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {

    /**
     * 子组件要获取 context 里面的内容的话，
     * 就必须写 contextTypes 来声明和验证你需要获取的状态的类型，
     * 它也是必写的，如果你不写就无法获取 context 里面的状态
     */
    static contextTypes = {
        themeColor:PropTypes.string
    }

    /**
     * React.js 就提供了一种机制，让你可以给组件的配置参数加上类型验证，
     * 就用上述的评论组件例子，你可以配置 Comment 只能接受对象类型的 comment 参数，
     * 你传个数字进来组件就强制报错。
     * 
     * 我们这里先安装一个 React 提供的第三方库 prop-types
     */
    static propTypes = {
        comment:PropTypes.object.isRequired,
        onDeleteComment:PropTypes.func,
        index:PropTypes.number
    }

    constructor(){
        super()
        this.state={
            timeString:''
        }
    }

    componentWillMount(){
        this._updateTimeString()
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        )
    }

    componentWillUnmount(){
        clearInterval(this._timer)
    }

    _updateTimeString(){
        const comment = this.props.comment
        const duration = (+Date.now()-comment.createdTime)/1000
        this.setState({
            timeString:duration > 60
            ? `${Math.round(duration/60)}分钟前`
            : `${Math.round(Math.max(duration,1))}秒前`
        })
    }

    _getProcessedContent(content){
        return content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }

    handleDeleteComment(){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.index)
        }
    }

    render(){

        const {comment}=this.props

        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span style={{color:this.context.themeColor}}>{comment.username}</span>:
                </div>
                <p dangerouslySetInnerHTML={{
                    __html:this._getProcessedContent(comment.content)
                    }}/>
                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
                <span className='comment-delete'
                    onClick={this.handleDeleteComment.bind(this)}>
                    X
                </span>
            </div>
        )
    }
}

export default Comment
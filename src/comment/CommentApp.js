import React,{Component} from 'react'
import PropTypes from 'prop-types'
import ComponentInput from './CommentInput'
import ComponentList from './CommentList'
import ClockApp from '../clock/ClockApp'
import wrapWithLoadData from '../highercomp/wrapWithLoadData'

class CommentApp extends Component{

    static propTypes = {
        data:PropTypes.any,
        saveData:PropTypes.func.isRequired
    }

    /**
     * 作用其实 propsType 验证组件 props 参数的作用类似。
     * 不过它是验证 getChildContext 返回的对象
     * 
     * 为什么要验证 context，因为 context 是一个危险的特性，
     * 按照 React.js 团队的想法就是，把危险的事情搞复杂一些，
     * 提高使用门槛人们就不会去用了。
     * 
     * 如果你要给组件设置 context，那么 childContextTypes 是必写的。
     */
    static childContextTypes={
        themeColor:PropTypes.string
    }

    constructor(props){
        super(props)
        this.state = {
            themeColor:'blue',
            comments:props.data || [] 
        }
    }

    /**
     * getChildContext 这个方法就是设置 context 的过程，
     * 它返回的对象就是 context（也就是上图中处于中间的方块），
     * 所有的子组件都可以访问到这个对象。
     * 我们用 this.state.themeColor 来设置了 context 里面的 themeColor
     */
    getChildContext(){
        return {themeColor:this.state.themeColor}
    }

    // constructor(){
    //     super()
    //     this.state = {
    //         comments:[]
    //     }
    // }

    /**
     * 在 componentWillMount 中调用 _loadComments 方法，
     * 在组件开始挂载的时候把评论列表数据加载出来 setState 到 this.state 当中，
     * 组件就可以渲染从 LocalStorage 从加载出来的评论列表数据了
     */
    // componentWillMount(){
    //     this._loadComments()
    // }

    /**
     * _saveComments 用于保存评论列表数据
     * @param {*} comments 
     */
    // _saveComments(comments){
    //     localStorage.setItem('comments',JSON.stringify(comments))

    // }

    /**
     * _loadComments  分别用于加载评论列表数据
     */
    // _loadComments(){
    //     let comments = localStorage.getItem('comments')
    //     if(comments){
    //         comments=JSON.parse(comments)
    //         this.setState({'comments':comments})
    //     }
    // }

    /**
     * 
     * 用户每次提交评论都会把评论列表数据保存一次，
     * 所以我们在 handleSubmitComment 调用 _saveComments 方法
     * @param {*} comment 
     */
    handleSubmitComment (comment) {
        if(!comment) return
        if(!comment.username) return alert('请输入用户名')
        if(!comment.content) return alert('请输入评论内容')
        const comments = this.state.comments
        comments.push(comment)
        this.setState({
            'comments':comments
        })
        // this._saveComments(comments)
        this.props.saveData(comments)
    }    

    handleDeleteComment(index){
        const comments = this.state.comments
        comments.splice(index,1)
        this.setState({
            'comments':comments
        })
        // this._saveComments(comments)
        this.props.saveDate(comments)
    }

    render(){
        return (
            <div className='wrapper'>
                <ComponentInput
                    onSubmit={this.handleSubmitComment.bind(this)}/>
                <ComponentList comments={this.state.comments}
                    onDeleteComment={this.handleDeleteComment.bind(this)}/>
                <ClockApp />
            </div>

        )
    }
}

CommentApp = wrapWithLoadData(CommentApp, 'comments')
export default CommentApp
import React,{Component} from 'react'
import PropTypes from 'prop-types'
import wrapWithLoadData from '../highercomp/wrapWithLoadData'


/**
 * 组件的内容编写顺序如下：
 * 1、static 开头的类属性，如 defaultProps、propTypes。
 * 2、构造函数，constructor。
 * 3、getter/setter（还不了解的同学可以暂时忽略）。
 * 4、组件生命周期。
 * 5、_ 开头的私有方法。
 * 6、事件监听方法，handle*。
 * 7、render*开头的方法，有时候 render() 方法里面的内容会分开到不同函数里面进行，
 *      这些函数都以 render* 开头。
 * 8、render() 方法。
 */
class CommentInput extends Component {

    static propTypes={
            onSubmit:PropTypes.func,
            data:PropTypes.any,
            savaData:PropTypes.func
    }

    constructor(props){
        super(props)
        this.state = {
            username:props.data,
            content:''
        }
        console.log('CommentInput constructor')
    }

    /**
     * 不依赖 DOM 操作的组件启动的操作都可以放在 componentWillMount 中进行
     */
    // componentWillMount(){
    //     this._loadUsername()
    // }

    componentDidMount(){
        this.textarea.focus()
    }    

    /**
     * 所有私有方法都以 _ 开头
     * 所有事件监听的方法都用 handle 开头。
     * 把事件监听方法传给组件的时候，属性名用 on 开头
     * 
     * 这样统一规范处理事件命名会给我们带来语义化组件的好处，
     * 监听（on）CommentInput 的 Submit 事件，
     * 并且交给 this 去处理（handle）
     * @param {*} username 
     */
    // _saveUsername(username){
    //     localStorage.setItem('username',username)
    // }

    // _loadUsername(){
    //     const username = localStorage.getItem('username')
    //     if(username){
    //         this.setState({'username':username})
    //     }
    // }

    handleUsernameChange(e){
        this.setState({
            username:e.target.value
        })
    }

    handleContentChange(e){
        this.setState({
            content:e.target.value
        })
    }

    /**
     * 组件的私有方法都用 _ 开头，
     * 所有事件监听的方法都用 handle 开头。
     * 把事件监听方法传给组件的时候，属性名用 on 开头
     * 
     * 这样统一规范处理事件命名会给我们带来语义化组件的好处，
     * 监听（on）CommentInput 的 Submit 事件，
     * 并且交给 this 去处理（handle）
     */
    handleSubmit(){
        if(this.props.onSubmit){
            this.props.onSubmit({
                'username':this.state.username,
                'content':this.state.content,
                'createdTime':+new Date()
            })
        }
        this.setState({content:''})
    }

    /**
     * _saveUsername 会设置 LocalStorage 中的 username 字段，用户名就持久化了。
     * 这样就相当于每当用户输入完用户名以后（输入框失去焦点的时候），
     * 都会把用户名自动保存一次。
     * @param {*} e 
     */
    handleUsernameBlur(e){
        // this._saveUsername(e.target.value)
        this.props.savaData(e.target.value)
    }


    render(){
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className="comment-field-input">
                        <input 
                            value={this.state.username}
                            onChange={this.handleUsernameChange.bind(this)}
                            onBlur={this.handleUsernameBlur.bind(this)}
                            />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className="comment-field-input">
                        <textarea 
                            ref={(textarea)=>this.textarea = textarea}
                            value={this.state.content}
                            onChange={this.handleContentChange.bind(this)} 
                            />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button
                        onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

CommentInput = wrapWithLoadData(CommentInput,'username')
export default CommentInput
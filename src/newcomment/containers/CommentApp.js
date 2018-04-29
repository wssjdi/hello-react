import React,{Component} from 'react'
import ComponentInput from './CommentInput'
import ComponentList from './CommentList'

class CommentApp extends Component{

    render(){
        return (
            <div className='wrapper'>
                <ComponentInput />
                <ComponentList />
            </div>
        )
    }
}

export default CommentApp
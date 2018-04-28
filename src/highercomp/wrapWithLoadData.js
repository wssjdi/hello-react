import React, { Component } from 'react'

export default (WrappedComponent, name) => {

    /**
     * NewComponent 会根据第二个参数 name 在挂载阶段从 LocalStorage 加载数据，
     * 并且 setState 到自己的 state.data 中，而渲染的时候将 state.data 
     * 通过 props.data 传给 WrappedComponent
     */
    class LocalStorageActions extends Component {
        constructor () {
        super()
        this.state = { data: null }
        }

        componentWillMount () {
            let data = localStorage.getItem(name)
            try{
                //尝试把data解析成JSON对象
                this.setState({ data:JSON.parse(data) })
            }catch(error){
                //如果出错了就当普通字符串读取
                this.setState({data})
            }

            // ajax.get('/data/' + name, (data) => {
            //     this.setState({ data })
            // })
        }

        saveData(data){
            try {
                // 尝试把它解析成 JSON 字符串
                localStorage.setItem(name, JSON.stringify(data))                
            } catch (error) {
                // 如果出错了就当普通字符串保存
                localStorage.setItem(name, `${data}`)                
            }

        }

        render () {
        return <WrappedComponent data={this.state.data} 
                    saveData={this.saveData.bind(this)}
                    //这里的意思是把其他的参数原封不动地传递给被包装的组件
                    {...this.props}/>
        }
    }
    return LocalStorageActions
}
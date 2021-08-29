import React from 'react'
export default class LifeCycleMethod extends React.Component {
    constructor() {
        super();
        this.state={
            data: 1234
        }
        console.warn("constructor");
    }
    componentDidMount()
    {
        this.setState({
            data: 9876
        })
        
        console.warn("componentDidMount");
    }
    render() {
        console.warn("render");
        return (
            <div>
                <h1>Life Cycle Method Updated Data{this.state.data}</h1>
                <button onClick={()=>{this.componentDidMount()}} >Update</button>
            </div>
        )
    }
}
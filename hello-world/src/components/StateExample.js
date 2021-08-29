import React, { Component } from 'react'
class StateExample extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Welcome to the State Example Before Clicking'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Welcome to the State Example After Clicking'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() =>this.changeMessage()}>Subscribe</button>
            </div>
            
        )
        
    }
}
export default StateExample
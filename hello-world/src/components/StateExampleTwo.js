import React from 'react'
 export default class StateExampleTwo extends React.Component{
     constructor(){
         super();
         this.state={
             name: 'Akash Sharma',
             count : 1
         }
     }
     updateState(){
         this.setState({
             name: 'Amigo',
             count: this.state.count+1
         })
     }
    render()
    {
        console.log('render');
        return(
            <div>
                StateExampleTwo by {this.state.name}
                <br />
                Count {this.state.count}
                <br />
                <button onClick={()=>{this.updateState()}}>Update State</button>
            </div>
        )
    }
}
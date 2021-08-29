import React from 'react';
import Child_One from '../Components/Child_One'

class Parent_One extends React.Component{	
	state = {
		msg: "",
	}

	handleCallback = (childData) =>{
		this.setState({msg: childData})
	}

	render() {
		const {msg} = this.state;
		return(
		<div>
			<h1> {msg}</h1>
			<Child_One parentCallback = {this.handleCallback}/>	
		</div>
		);
	}
}

export default Parent_One;

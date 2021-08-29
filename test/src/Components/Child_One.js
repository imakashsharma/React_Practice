import React from "react";

class Child_One extends React.Component {
	onTrigger = () => {
	this.props.parentCallback("Sending Data from Child to Parent Component");
	};

	render() {
	return (
		<div>
		<br></br> <br></br>
		<button onClick={this.onTrigger}>Click me</button>
		</div>
	);
	}
}

export default Child_One;

import React from "react";
import { Name } from "../Components/Child_Two";

const Child_Three = () => {
	return (
	<div>
		<Name.Consumer>
		{(fname) => {
			return <h1>Sending Data from Child Two to {fname}</h1>;
		}}
		</Name.Consumer>
	</div>
	);
};

export default Child_Three;

import React from 'react'
import Child from './Child';

const Parent = () => {
const data = "Sending Data from Parent to Child Component";
	return(
		<div>
		<Child data={data}/>
		</div>
	);
}

export default Parent;

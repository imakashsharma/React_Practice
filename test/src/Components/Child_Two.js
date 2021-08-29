import React, {createContext} from "react";
import Child_Three from '../Components/Child_Three';

const Name = createContext();

const Child_Two = () => {
	return (
	<div>
		<Name.Provider value={'Child Three'}>
		<Child_Three/>
		</Name.Provider>
	</div>
	);
}

export default Child_Two;
export {Name};

import React from 'react';
import "./index.css";
import Parent from '../src/Components/Parent';
import Parent_One from '../src/Components/Parent_One';
import Child_Two from './Components/Child_Two';


const App = () => {
return (
	<div className="App">
	<Parent/>
  <Parent_One/>
  <Child_Two/>
	</div>
);
}

export default App;


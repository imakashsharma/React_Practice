import logo from './logo.svg';
import './App.css';
// import Function from './components/Function';
import { Function } from './components/Function'
import ClassExample from './components/ClassExample';
import WithoutJsx from './components/WithoutJsx';
import PropExample from './components/PropsExample';
import StateExample from './components/StateExample';
import StateExampleTwo from './components/StateExampleTwo';
import EventHandelling from './components/EventHandellings';
import LifeCycleMethod from './components/LifeCycleMethod';
import { HooksExample } from './components/HooksExample';
import { UseEffectExample } from './components/UseEffectExample';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello
        </p>
        <Function />
        <ClassExample />
        <WithoutJsx />
        <PropExample name="Akash" heroName="Bat Man"><p>This is Children props</p></PropExample>
        <PropExample name="Shubham" heroName="Iron Man" />
        <PropExample name="Abha" heroName="Wonder Womam"/>
        <StateExample />
        <StateExampleTwo />
        <EventHandelling />
        <LifeCycleMethod />
        <HooksExample />
        <UseEffectExample />
      </header>
    </div>
  );
}

export default App;

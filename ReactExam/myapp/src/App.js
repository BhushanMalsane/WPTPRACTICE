import logo from './logo.svg';
import './App.css';
import ICard from './Icard';

function App() {

  let obj = {name:"priti",dob:"1-1-2000",phone:"1233455"} 
  return (
    <div className="App">
      <ICard obj={obj}></ICard>
    </div>
  );
}

export default App;

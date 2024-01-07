import logo from './logo.svg';
import './App.css';
import ICard from './Icard';
import Maths from './Maths';
import Total from './Total';

function App() {
  let arr = [12,13,10,20]

  let obj = {name:"priti",dob:"1-1-2000",phone:"1233455"} 
  return (
    <div className="App">
      
      <ICard obj={obj}></ICard>
      <Total nums={arr}></Total>
      
      <Maths num1={30} num2={1.4} op={"*"}></Maths>
   <Maths num1={30} num2={100} op={"*"}></Maths>
   <Maths num1={1.9} num2={1.4} op={"-"}></Maths>
   <Maths num1={300} num2={3} op={"/"}></Maths>
    </div>
  );
}

export default App;

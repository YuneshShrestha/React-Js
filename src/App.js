import './App.css';
import React,{useState} from 'react';
import Navbar from './Navbar';
import Person from './Person';
// jsx
function App() {
  let x=0;
  const person =
  {
    name:'abc',
    age:19,
  }
  let [count, setcount] = useState(x);
  let [name, setName] = useState("");
  // count for displaying ... setstate for updating
  function inputHandler(e)
  {
    setName(e.target.value);
    console.log(name);
  }
  function increment()
  {
    return setcount(--count);
  }
  function decrement()
  {
    return setcount(++count);
    
  }
  function resetbtn()
  {
    setcount(0);
  }
  return (
   <div>
    <Navbar />
    <Person person={person}/>
    <div>
        <button onClick={increment}>-</button>
        {count}
        <button onClick={decrement}>+</button>
        <button onClick={resetbtn}>Reset</button>
        <input type="text" value={name} onChange={inputHandler}/>
    </div>
   </div>
  );
}

export default App;



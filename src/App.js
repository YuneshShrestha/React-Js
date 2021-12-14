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
  // count for displaying ... setstate for updating
  function increment()
  {
    return setcount(--count);
  }
  function decrement()
  {
    return setcount(++count);
    
  }
  return (
   <div>
    <Navbar />
    <Person person={person}/>
    <div>
        <button onClick={increment}>-</button>
        {count}
        <button onClick={decrement}>+</button>
    </div>
   </div>
  );
}

export default App;



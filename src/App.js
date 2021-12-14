import './App.css';
import React from 'react';
import Navbar from './Navbar';
// import Person from './Person';
import Card  from './Card';
// import GrandTotal from './GrandTotal';
// jsx
function App() {
  // const person =
  // {
  //   name:'abc',
  //   age:19,
  // }
 
  // let [name, setName] = useState("");
  // count for displaying ... setstate for updating
  // function inputHandler(e)
  // {
  //   setName(e.target.value);
  //   console.log(name);
  // }

  return (
   <div>
    <Navbar />
    {/* <Person person={person}/> */}
    <div className='container'>
       <div>
          <Card product="T-shirt" description="Description..." price="600"/>
          <Card product="Pant" description="Description..." price="1000"/>
       </div>
    </div>
   </div>
  );
}

export default App;



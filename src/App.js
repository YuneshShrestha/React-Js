import './App.css';
import React,{useState} from 'react';
import Navbar from './Navbar';

// import Person from './Person';
import Card  from './Card';
import Message from './Message';
import LoginButton from './LoginButton';
// import GrandTotal from './GrandTotal';
// jsx
function App() {
   let [loggedIn,setloggedIn]=useState(true);
   const auth= ()=>{
      return setloggedIn(!loggedIn);
   };
   return (
      <div>
      <Message auth_state={loggedIn}/>
      <LoginButton clickHandler={auth} auth_state={loggedIn}/>
      </div>
   );
  


//   return (
//    <div>
//     <Navbar />
//     {/* <Person person={person}/> */}
//     <div className='container'>
//        <div>
//           <Card product="T-shirt" description="Description..." price="600"/>
//           <Card product="Pant" description="Description..." price="1000"/>
//        </div>
//     </div>
//    </div>
//   );
}

export default App;



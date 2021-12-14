import React from "react";
const Person = ({person:{name,age}})=>{
  // destructuring prop
  // const person 
    return (
        <div className="container">
           <div>
             <p>Name: {name}</p>
             <p>Age: {age}</p>
           </div>
        </div>
    );
    // 
}
export default Person;

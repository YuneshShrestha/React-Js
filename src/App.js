import React from "react";
import Friend from "./Friend";
import Form from "./Form";
const App=()=>{
    let friends=[
        {name:"Yunesh", age:19},
        {name:"Sejal", age:19},
        {name:"Ram", age:19},
    ];
    // let friends=[
    //    'Yunesh',
    //    'Ram',
    //    'Gita'
    // ];
    return (
        <div>
            <Form/>
        </div>
    );
};
export default App;
import React from "react";
import Friend from "./Friend";
// import Form from "./Form";
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
            {
                friends.map((friend)=>{
                    return <Friend name={friend.name} age={friend.age}/>
                })
            }
        </div>
    );
};
export default App;
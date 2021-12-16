import React from "react";
const Friend = ({name, age})=>{
    return (
        <div style={{ backgroundColor:'green', borderRadius:'20px', display:'grid',placeItems:'center', marginBottom:'2px',padding:'20px 0' }}>
            <div style={{ color:'white' }}>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
            </div>
        </div>
    );
};
export default Friend;
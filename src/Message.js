import React from "react";
const Message = ({auth_state})=>{
    return (
        <div>You are {auth_state?'Logged In':'Logged Out'}</div>
    );
}
export default Message;
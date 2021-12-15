import React from "react";
const LoginButton=({auth_state,clickHandler})=>{
    
    return (
        <button onClick={clickHandler}>{auth_state?"Logout":"Login"}</button>
    );
};
export default LoginButton;
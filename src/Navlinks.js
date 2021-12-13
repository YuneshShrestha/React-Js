import React from "react";
import "./navlink.css";
function NavLinks(props)
{
    let url="";
    return (
        <a href={url} className="nav-items">{props.title}</a>
    );
}
export default NavLinks;
import React from "react";
import NavLinks from "./Navlinks";
import './navbar.css';
import Button from "./Button";
function Navbar()
{
    // let link="";
    return (
        <div className="nav">
           <div className="container">
                <div className="logo"></div>
                <div className="nav-links">
                        <NavLinks title="Home" className="nav-title"/>
                        <NavLinks title="About Us" className="nav-title"/>
                        <NavLinks title="Blog" className="nav-title"/>
                        <NavLinks title="Contact" className="nav-title"/>
                        <Button/>
                </div>
            
           </div>
           
        </div>
    );
}
export default Navbar;

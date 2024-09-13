import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [btnText, setBtnText] = useState("⟱");

    const handleBtnClick = () => {
        //this for changing button text

        setOpen(!open);
        setBtnText(open ? "⟱" : "⟰"); 

        //this for expanding list on clicking button ⟱ or collapsing while clicking on button ⟰

        const navItems = document.getElementsByClassName("nav-list-items")[0];
        const ul = navItems.getElementsByTagName("ul")[0];

        ul.style.display = (ul.style.display === "block" ? "none" : "block");
        
    };

    return (
        <nav className="nav-bar" style={{width : open? "80%": "35%"}}>
            <div id="Logo" className={open? "Logo-rotate": "Logo-rotate-again"}>
                <a href=""><img src="/c1.png" alt="Courses.io" /></a>
            </div>

            <div className="nav-list-items">
                <ul>
                    <li><a href="">Categories</a></li>
                    <li><a href="">Let's Learn</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </div>
            <button className="drop-down-btn" onClick={handleBtnClick}>
                {btnText}
            </button>
        </nav>
    );
};

export default NavBar;

import React from "react";
import trollface from "../images/troll-face.png"

const Navbar = () => {
  return (
         <>
           
            <nav>
                <div className="logo--box">
                    <img className="troll-img" src={trollface}></img>
                    <h1 className="header--meme">MemeGenerator</h1>
                </div>
                <div className="nav--list">
                  <ul className="uul">
                      <li>React Course</li>
                      <li>Project - 3</li>
                  </ul>
                </div>
            </nav>
  

         </>
  )
};


export default Navbar;
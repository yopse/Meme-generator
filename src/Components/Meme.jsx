import React from "react";

const Meme = () => {

  const handleClick = () => {
 console.log("I was clicked !")

  }




  return (
    <>
      <div className="meme-box">
          <div>

              <div className="input-box">
              <input type="text" placeholder="Shut up"></input>
              <input type="text" placeholder="and take my money"></input>
              </div>
              
              <button className="btn" onMouseOver={handleClick}>Get a new meme image</button>
          </div>
      </div>
    </>
  );
};

export default Meme;

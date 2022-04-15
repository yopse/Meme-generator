import React from "react";
import memeData from "../memeData";



const Meme = () => {


    let [imageUrl, setImageUrl] = React.useState("")

  const getMemeImage = () => {

     let a = memeData.data.memes;
     let randomNumber = Math.floor(Math.random() *  a.length);
                //  memesArray[randomNumber].url
        setImageUrl(a[randomNumber].url);
  }




  return (
    <>
      <div className="meme-box">
          <div>

              <div className="input-box">
              <input type="text" placeholder="Shut up"></input>
              <input type="text" placeholder="and take my money"></input>
              </div>
              
              <button className="btn" onClick={getMemeImage}>Get a new meme image</button>
             
          </div>
           
              <img src={imageUrl} className="meme-image"></img>
      </div>
    </>
  );
};

export default Meme;

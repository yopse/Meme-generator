import React from "react";
import memeData from "../memeData";

const Meme = () => {
  // let [imageUrl, setImageUrl] = React.useState("")

  let [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  let [allMemeImages, setAllMemeImages] = React.useState(memeData);

  const getMemeImage = () => {
    let a = allMemeImages.data.memes;
    let randomNumber = Math.floor(Math.random() * a.length);
    let url = a[randomNumber].url;

    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: url,
      };
    });
  };

  return (
    <>
      <div className="meme-box">
        <div>
          <div className="input-box">
            <input type="text" placeholder="Shut up"></input>
            <input type="text" placeholder="and take my money"></input>
          </div>

          <button className="btn" onClick={getMemeImage}>
            Get a new meme image
          </button>
        </div>

        <img src={meme.randomImage} alt="co" className="meme-image"></img>
      </div>
    </>
  );
};

export default Meme;

import React from "react";

const RandomImg = () => {
  const images = [
    "https://picsum.photos/800/600",
    "https://picsum.photos/1600/1200",
    "https://picsum.photos/2580/1944",
  ];

  return (
    <div>
      {images.map((img) => {
        return <img src={img} alt="randomImg" className="images" />;
      })}
    </div>
  );
};

export default RandomImg;

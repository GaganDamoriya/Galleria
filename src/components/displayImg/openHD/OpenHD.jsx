import React from "react";
import "./openHD.css";

const OpenHD = ({ closeHD, imgUrl }) => {
  console.log(imgUrl);
  //closeHD close function
  //imgUrl url of image
  return (
    <div className="openImg" onClick={closeHD}>
      <div className="imghere">
        <img src={imgUrl} alt="img" />
      </div>
    </div>
  );
};

export default OpenHD;

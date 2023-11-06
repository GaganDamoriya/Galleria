import React, { useState } from "react";
import "./imagecollection.css";
import Carousel from "../carousel/Carousel";
import DisplayImg from "../../displayImg/DisplayImg";
const ImageCollection = ({ data }) => {
  const [show, setShow] = useState(false);
  const [photoid, setphotoid] = useState(null);

  //popup img
  const handleImageClick = (index) => {
    setphotoid(index);
    setShow(true);
  };

  return (
    <div className="displayImages">
      {data.map((item, index) => (
        <div onClick={() => handleImageClick(index)}>
          <Carousel
            index={index}
            imgUrl={item.urls.small_s3}
            creatorname={item.user.name}
            creatorinsta={item.user.social.instagram_username}
            creatorpic={item.user.profile_image.small}
            imglikes={item.likes}
          />
        </div>
      ))}

      {show && photoid !== null && data[photoid] && (
        <DisplayImg onClose={() => setShow(false)} photoid={data[photoid]} />
      )}
    </div>
  );
};

export default ImageCollection;

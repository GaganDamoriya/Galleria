import React, { useState } from "react";
import "./displayImg.css";
import { ImEnlarge } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import OpenHD from "./openHD/OpenHD";

const DisplayImg = ({ photoid, onClose }) => {
  const [openinHD, setOpeninHD] = useState(false);
  console.log(photoid);
  return (
    <div className="disImg">
      <div className="opacity_layer" onClick={onClose}></div>
      <div className="imageContent">
        <div className="inner">
          <div className="closenav">
            <span>close</span>
            <button className="closeBtn" onClick={onClose}>
              x
            </button>
          </div>
          <div className="imgdiv">
            <img src={photoid.urls.regular} alt="disImg" />
            <span className="enlargeBtn" onClick={() => setOpeninHD(true)}>
              <ImEnlarge size={20} id="enlarge" />
            </span>
          </div>
          <div className="userdetail">
            <div className="userinfo">
              <img
                src={photoid.user.profile_image.small}
                alt="pp"
                style={{ borderRadius: "20px" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontWeight: "bolder" }}>
                  {photoid.user.name}
                </span>
                <span style={{ color: "grey" }}>
                  {photoid.user.social.instagram_username}
                </span>
              </div>
              {photoid.user.social.instagram_username && (
                <div style={{ color: "grey" }}>
                  @{photoid.user.social.instagram_username}
                </div>
              )}
              {photoid.user.social.instagram_username && (
                <div className="twt" style={{ color: "grey" }}>
                  {photoid.user.social.twitter_username}
                </div>
              )}
            </div>
            <div className="userimginfo">
              <button className="downloadBtn">Download</button>
              <span style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: "red", cursor: "pointer" }}>
                  <AiFillHeart />
                </span>
                <span style={{ fontSize: "1.1rem" }}>{photoid.likes}</span>
              </span>
            </div>
          </div>
          <div className="relatedTags">
            <p>follow me on twitter</p>
            <AiOutlineTwitter />
          </div>
        </div>
      </div>
      {openinHD && photoid.user.profile_image.regular !== null && (
        <OpenHD
          closeHD={() => setOpeninHD(false)}
          imgUrl={photoid.urls.regular}
        />
      )}
    </div>
  );
};

export default DisplayImg;

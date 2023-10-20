import React from "react";
import "./carousel.css";
import { AiOutlineLike } from "react-icons/ai";

const Carousel = ({
  imgUrl,
  index,
  creatorname,
  creatorinsta,
  creatorpic,
  imglikes,
}) => {
  return (
    <div className="crDiv" key={index}>
      <div className="carousel">
        <div className="imgsec">
          <img src={imgUrl} alt="images" />
        </div>
        <div className="content">
          <div className="creatorinfo">
            <img src={creatorpic} alt="creatorpic" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontWeight: "bolder" }}>{creatorname}</span>
              <span style={{ color: "grey" }}>{creatorinsta}</span>
            </div>
          </div>
          <div className="likes">
            <AiOutlineLike /> {imglikes}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

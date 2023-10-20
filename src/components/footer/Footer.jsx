import React from "react";
import "./footer.css";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <span>
        <a href="https://twitter.com/Gagan__Prakash" target="_blank">
          {" "}
          follow me on twitter
        </a>
      </span>
      <span>
        <AiOutlineTwitter />
      </span>
    </div>
  );
};

export default Footer;

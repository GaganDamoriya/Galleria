import React, { useState } from "react";
import "./searchbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const searchquery = (event) => {
    if (event.key === "Enter" && input.length > 0) {
      navigate(`/search/${input}`);
    }
  };

  return (
    <div className="searchbar">
      <AiOutlineSearch id="search-icon" />
      <input
        type="text"
        id="search"
        placeholder="Search high resolution images, categories, collection, wallpaper"
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={searchquery}
      />
    </div>
  );
};

export default Searchbar;

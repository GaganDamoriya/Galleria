import React from "react";
import { useNavigate } from "react-router-dom";
import "./addTag.css";
const AddTag = ({ data }) => {
  const navigate = useNavigate();

  //finding unique tags from tag:[{},{},..]

  let newData = new Set(
    data.flatMap((item) => {
      return item.tags.map((tag) => tag.title);
    })
  );

  const first10Tags = Array.from(newData).slice(0, 10);
  return (
    <div className="tagsDiv">
      {first10Tags.map((tag, index) => (
        <span
          onClick={() => navigate(`/search/${tag}`)}
          className="tag"
          key={index}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default AddTag;

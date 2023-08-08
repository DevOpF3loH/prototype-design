import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import "../styles/Videos.css";

function Videos({ img, title, category }) {
  return (
    <div className="video-container">
      <div
        className="video-img"
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="icon-container">
          <PlayCircleOutlineIcon />
        </div>
      </div>
      <h5 className="video-title">{title}</h5>
      <p className="video-category">{category}</p>
    </div>
  );
}

export default Videos;

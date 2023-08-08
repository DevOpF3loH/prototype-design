import React from "react";

import "../styles/News.css";

function News({ img, title, category }) {
  return (
    <div className="news-component">
      <img className="news-img" src={img} alt="news img" />
      <h5 className="news-title">{title}</h5>
      <p className="category">{category}</p>
    </div>
  );
}

export default News;

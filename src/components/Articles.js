import React from "react";

import "../styles/Articles.css";

function Articles({ img, title, category, paragraph }) {
  return (
    <div className="articles-component">
      <img className="articles-img" src={img} alt="news img" />
      <h4 className="articles-title">{title}</h4>
      <p className="date">{category}</p>
      <p className="articles-paragraph">{paragraph}</p>
    </div>
  );
}

export default Articles;

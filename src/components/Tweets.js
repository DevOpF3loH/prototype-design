import React from "react";

import "../styles/Tweets.css";

function Tweets({ title, id, time, tweet, retweet }) {
  return (
    <div className="tweets-minicomponent">
      <div className="account-name">{title}</div>
      <div className="id-component">
        <div className="account-id">{id}</div>
        <div className="tweet-time">{time}</div>
      </div>
      <div className="tweet">{tweet}</div>
      <div className="retweet">{retweet}</div>
    </div>
  );
}

export default Tweets;

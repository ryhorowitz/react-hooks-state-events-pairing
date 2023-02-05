import React from "react";

function Video({  embedUrl, title, views, createdAt }) {

  return (
    <div className="video-container">
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h2>{title}</h2>
      <div>{views} | Uploaded {createdAt}</div>
    </div>
  )
}
export default Video
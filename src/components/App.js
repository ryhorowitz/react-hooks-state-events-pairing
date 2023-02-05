import React, { useState } from "react";
import video from "../data/video.js";
import Video from "./Video.js";
import Buttons from "./Buttons.js";
import Comments from "./Comments.js";


function App() {
  console.log("Here's your data:", video);
  const { embedUrl, title, views, createdAt, upvotes, downvotes, comments } = video

  const [votes, setVotes] = useState({ upvotes, downvotes })

  function onVote(name) {
    console.log(name)
    console.log(votes[name])
    setVotes( votes => ({
      ...votes,
      [name]: votes[name] + 1
    }))
  }
  return (
    <div className="App">
      <Video embedUrl={embedUrl}
        title={title}
        views={views}
        createdAt={createdAt} />
      <Buttons upvotes={votes.upvotes}
        downvotes={votes.downvotes}
        onVote={onVote} />
        <Comments comments={comments}/>
    </div>
  );
}

export default App;

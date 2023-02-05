import React from "react";

function Buttons({upvotes, downvotes, onVote}){

  function handleClick(e){
    onVote(e.target.name)
  }
  return (
    <div className="buttons">
      <button name='upvotes' onClick={handleClick}>{upvotes} 👍</button>
      <button name='downvotes' onClick={handleClick}>{downvotes} 👎</button>
    </div>
  )
}
export default Buttons
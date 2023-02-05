import React, { useState } from "react";

function Comments({ comments }) {
  const [isOn, setIsOn] = useState(true)

  const displayComments = comments.map(com => {
    const { user, comment, id } = com
    return <div key={id}>
      <h4>{user}</h4>
      <div>{comment}</div>
    </div>
  })

  const commentsContainer = <div>
    <h3>{comments.length} Comments</h3>
    {displayComments}
  </div>

  function handleClick() {
    setIsOn(!isOn)
  }
  return (
    <div className="comments">
      <button onClick={handleClick}>
        {isOn ? 'Hide Comments' : 'Show Comments'}
        </button>
      {isOn ?
        commentsContainer : ''}
    </div>
  )
}
export default Comments
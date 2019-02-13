import React from "react"

const Comment = props => {
  return(
    <div className="comment">
      <a href="/" className="avatar">
        {/* // The avi props is called on this JSX element */}
        <img alt="avatar" src={props.avi}/>
      </a>
      <div className="content">
        <a href="/" className="author">
          {/* // The user props is called on this JSX element */}
          {props.user}
        </a>
        <div className="metadata">
          {/* // The date props is called on this JSX element */}
          <span className="date">Posted on {props.date}</span>
        </div>
        <div className="text">{props.post}</div>
      </div>
    </div>
  )
}

export default Comment
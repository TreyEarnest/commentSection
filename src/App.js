import React from "react"
import faker from "faker"

import Comment from "./Comment"
import ApprovalCard from "./ApprovalCard"

const App = () => {
  return(
    <div className="ui container comments">
    {/* //I've wrapped the child component "Comment" inside of the "ApprovalCard" parent component */}
    {/* Doing so will place the child component insde of the parent component */}
      <ApprovalCard>
        <Comment 
          // I've created props for the child component "Comment" then called them inide the Comment.js object
          avi={faker.image.avatar()} 
          user={faker.name.firstName()} 
          post={faker.lorem.words()} 
          date={faker.date.weekday()} 
          />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          // I've created props for the child component "Comment" then called them inide the Comment.js object
          avi={faker.image.avatar()}
          user={faker.name.firstName()}
          post={faker.lorem.words()}
          date={faker.date.weekday()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          // I've created props for the child component "Comment" then called them inide the Comment.js object
          avi={faker.image.avatar()}
          user={faker.name.firstName()}
          post={faker.lorem.words()}
          date={faker.date.weekday()}
        />
      </ApprovalCard>
    </div>
  )
}

export default App
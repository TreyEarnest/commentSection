import React from "react"

const ApprovalCard = (props) =>{
  return(
    <div className="ui card">
      {/* props.children used so that any parent/child wrapping done in App.js is reflected here */}
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
  )
}

export default ApprovalCard
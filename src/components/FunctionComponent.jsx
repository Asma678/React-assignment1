import React from "react"
import "./FunctionComponent.css"

function FunctionComponent() {
  return (
    <div className="funcDiv">
      <h1>This is created using functional Component</h1>
      <p>This is done using external css</p>
      <p style={{ color: "red" }}>This is done using inline CSS</p>
    </div>
  )
}

export default FunctionComponent
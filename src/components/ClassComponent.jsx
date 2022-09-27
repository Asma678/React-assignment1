import React, { Component } from "react"
import "./ClassComponent.css"

export default class ClassComponent extends Component {
  render() {
    return (
      <div className="classDiv">
        <h1>This is created using class Component</h1>
        <p>This is done using external css</p>
        <p style={{ color: "green" }}>This is done using inline CSS</p>
      </div>
    )
  }
}
import React, { useState } from "react"
import "./App.css"
import ClassComponent from "./components/ClassComponent"
import FunctionComponent from "./components/FunctionComponent"
import Header from "./components/Header"

function App() {
  const [showFuncComponent, setShowFuncComponent] = useState(false)
  const [showClassComponent, setShowClassComponent] = useState(false)

  const showFuncHandler = () => {
    setShowFuncComponent(!showFuncComponent)
  }

  const showClassHandler = () => {
    setShowClassComponent(!showClassComponent)
  }

  return (
    <div className="App">
      <Header onshowFunc={showFuncHandler} onshowClass={showClassHandler} />
      <div className="component-container">
        {showFuncComponent ? <FunctionComponent className="funcComp" /> : ""}
        {showClassComponent ? <ClassComponent className="classComp" /> : ""}
      </div>
    </div>
  )
}

export default App
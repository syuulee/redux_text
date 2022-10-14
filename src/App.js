import React from 'react';
import { useSelector } from 'react-redux';
import Sub from './Sub';
import './dark.scss'

const App = () => {
  const { changeMode } = useSelector(it => it)
  console.log("app", changeMode)
  return (
    <div className={`App ${changeMode ? "on" : ""}`}>
      <Sub />
    </div>
  )
}

export default App;
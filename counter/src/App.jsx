import { useState } from 'react'
import './App.css'

function App() {
let [counter, setCounter] = useState(0)


function addHandleClick() {

  setCounter(prevCount => prevCount + 1 )
  if(counter >= 20) {
    setCounter(0)
  }
}

function removeHandleClick() {
  setCounter(prevCount => prevCount - 1)
  if (counter <= 0) {
    setCounter(0)
  }
}
  return (
    <>
      <h1>chai aur coffe</h1>
      <div className="container">
        <h2>Counter {counter} Times</h2>

        <button onClick={addHandleClick} > Add: {counter}</button>
        <br />
        <br />
        <button onClick={removeHandleClick}>remove: {counter}</button>
      </div>
    </>
  )
}

export default App

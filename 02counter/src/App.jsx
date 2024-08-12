import { useState } from 'react'//this is hooks,how to use hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter, setCounter] = useState(15)//use of hook=>counter is variable and setCounter is method how to use variable , these can be anything,this will propogates in ui
  //  let counter = 15 not propogates in ui

  const addValue = ()=> {
    if(counter<20){
    counter = counter + 1
    setCounter(counter)
    setCounter(counter)
    setCounter(counter)
    setCounter(counter)
    
    }
    
  }
  const removeValue = ()=> {
    if(counter>0){
    
    setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>sanskar</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>Add value{counter}</button>
      <br/>
      <button
      onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

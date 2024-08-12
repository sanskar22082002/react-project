import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "sanskar",
    age: 22
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>
        Tailwind test
      </h1>
      <Card username="chai aur code" btnText="visit me"
      />
      <Card username="sanskar" btnText="click me"/>
     

      
    </>
  )
}

export default App
 //As we know different card will have different name to solve this problem we use props
 //here pass only one time , in other time we can use in curly bracket
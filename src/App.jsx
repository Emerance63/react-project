import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './component/Home'
function App() {
  // const [count, setCount] = useState(0)  //distracturing array, count is the value and setCount is the function to update the value, useState(0) initializes count to 0

  return (
    <>
      <Home />
    </>
  )
}

export default App



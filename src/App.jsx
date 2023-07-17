import { useState } from 'react'
import './App.css'

import Grad_09 from "./assets/Grad_09.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{background: "#fff"}}>
        <img src={Grad_09} />
      </div>
    </>
  )
}

export default App

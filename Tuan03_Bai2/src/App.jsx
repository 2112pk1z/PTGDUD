import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Invest from './components/Invest/invest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Invest></Invest>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './Components/Landing/MainLanding/Landing'
import { Form } from 'react-router-dom'
import MainAuth from './Page/MainAuth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/*" element={<MainAuth />}></Route>
      </Routes>

    </>
  )
}

export default App

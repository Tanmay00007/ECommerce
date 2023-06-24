import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Login from './pages/login'
import Signup from './pages/signup'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home />
     </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Login from './pages/login'
import Signup from './pages/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Signup />
     </>
  )
}

export default App

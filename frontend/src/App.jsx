import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeerArchivo from './components/LeerArchivo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LeerArchivo></LeerArchivo>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Part2 from './components/Part2.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-blue-500'>New text</h1>
      <h2 className="text-3xl font-semibold mb-4">STEM Advocacy</h2>
    </>
  )
}

export default App

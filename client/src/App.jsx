import { useState } from 'react'
import { Button, Stack } from 'react-bootstrap'
import Brand from './components/Brand'
import './App.css'
import TableFiles from './components/TableFiles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Brand />

      <TableFiles />
    </>
  )
}

export default App

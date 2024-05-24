import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from '@chakra-ui/react'
import { Nandha } from './components/nandha'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Nandha/>
  )
}

export default App

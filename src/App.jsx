import { useState } from 'react'
import './App.css'
import TaskList from './pages/TaskList'

function App() {
  const [count, setCount] = useState(0) 
  let listItems = ["Comprar leche","lavar ropa"]

  return (
    <>
    <TaskList owner="Jesus" listItems = {listItems} />
    </>
  )
}

export default App

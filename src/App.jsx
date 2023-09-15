import { useState } from 'react'
import './App.css'
import TaskList from './pages/TaskList'
import { addToList } from './util/methods'
import TaskForm from './components/TaskForm'





function App() {
  return (
    <>
      <TaskList owner="Jesus"/>
    </>
  )
}

export default App

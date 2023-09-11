import { useState } from 'react'
import './App.css'
import TaskList from './pages/TaskList'
import { addToList } from './util/methods'





function App() {
  
  
  //const [part1, modificadorParte1] = useState(valorInicial)
  const  [listItems, setListItems] = useState(["Comprar leche","lavar ropa"])
  const [textField, setTextField] = useState([""])

  


  let agregarElemento = () =>{
    setListItems(addToList(listItems, textField))
    setTextField("")
  }

  let handleSubmit = (evento)=>{
    evento.preventDefault()
    agregarElemento()
  }

  let onchangeTextField = (event)=>{
    setTextField(event.target.value)
  }

  

  return (
    <>
    <TaskList owner="Jesus" listItems = {listItems} addItem = {handleSubmit} textField = {textField} onchangeTextField = {onchangeTextField} />
    </>
  )
}

export default App

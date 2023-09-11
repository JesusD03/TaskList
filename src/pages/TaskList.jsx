import React from 'react'
import ListItem from '../components/ListItem'

function TaskList({owner, listItems, addItem, textField, onchangeTextField}) {
  return (
    <div>
      <h1> {owner}'s TaskList </h1>

      <ul>
        {listItems.map(item=> <ListItem item = {item} />  )}
      </ul>

      <form  onSubmit={addItem}>
      <input onChange={onchangeTextField} type='text' value={textField}></input> <button type='submit'> Crear</button>
      </form>
    </div>


  )
}

export default TaskList
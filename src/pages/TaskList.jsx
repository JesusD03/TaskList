import React from 'react'
import ListItem from '../components/ListIem'


function TaskList({owner, listItems}) {
  return (
    <div>
      <h1> {owner}'s TaskList </h1>

      <ul>
        {listItems.map(item=> <ListItem item = {item} />  )}
      </ul>
    </div>


  )
}

export default TaskList
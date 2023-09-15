import React, { useState } from 'react'
import tasks from '../data/todo.json'
import TaskTable from '../components/taskTable'
import TaskForm from '../components/TaskForm'

function TaskList({owner}) {

  const [taskList, setTaskList] = useState(tasks)
  const addTask = (task)=>{
    task.id = Math.floor(Math.random()*100000)
    console.log(task)
    let taskTmp = [...taskList]
    taskTmp.push(task)
    setTaskList(taskTmp)
  }

  return (
    <div>
      <div>
      <h1> {owner}'s TaskList </h1>
        <TaskForm addTask={addTask}></TaskForm>
        <TaskTable taskList={taskList}></TaskTable> 
      </div>
    </div>

  )
}

export default TaskList
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

import { useState } from "react"

const FILTER_MAPS = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
}
const FILTER_NAMES = Object.keys(FILTER_MAPS);

function App(props) {

  //create new state "tasks" w prop data
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All")

  function toggleTaskCompletion(id) {
    // for each task
    const tasksUpdated = tasks.map(task => {
      if (id === task.id) { //if it's the toggled task
        //return a new object with the same data as og, but
        // w toggled completed
        return {...task, completed: !task.completed} 
      } else {
        return task;
      }
    })
    //update state
    setTasks(tasksUpdated)
  }

  function addTask(name) {
    const newTask = { id: ("todo-",name), name: name, completed: false }
    //append new task onto tasks and update state
    setTasks([...tasks, newTask])
  }

  function deleteTask(id) {
    const tasksUpdated = tasks.filter(task => id !== task.id)
    setTasks(tasksUpdated)
  }

  function editTask(id, txt) {
    const tasksUpdated = tasks.map(task => {
      if (id === task.id) { //if it's the toggled task
        //return a new object with the same data as og, but
        // w toggled completed
        return {...task, name: txt} 
      } else {
        return task;
      }
    })
    setTasks(tasksUpdated)
  }

  function pushTask(id) {
    //push task to tomorrow
    // const tasksUpdated = tasks.map(task => {
    //   if (id === task.id) { //if it's the toggled task
    //     //return a new object with the same data as og, but
    //     // w toggled completed
    //     return {...task, name: txt} 
    //   } else {
    //     return task;
    //   }
    // })
    // setTasks(tasksUpdated)
  }

  //transform task data
  const taskList = tasks
    .filter(FILTER_MAPS[filter])
    .map(task => {
        return (
          <Todo 
            name={task.name} 
            completed={task.completed}
            id={task.id}
            key={task.id}
            due={task.due}
            duration={task.duration}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
            editTask={editTask}
            pushTask={pushTask}
          />
        )
    });

  const filterList = FILTER_NAMES.map(name => (
      <FilterButton 
        key={name} 
        name={name}
        pressed={name === filter}
        setFilter={setFilter}
      />
    )
  )
    
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;


  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <h3 id="day">Today</h3>
        {taskList}
      </ul>
    </div>
  );
}

export default App;

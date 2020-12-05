import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

import { useState } from "react"

function App(props) {


  //create new state "tasks" w prop data
  const [tasks, setTasks] = useState(props.tasks);

  //transform task data
  const taskList = tasks.map(task => 
    {
      return (
        <Todo 
          name={task.name} 
          completed={task.completed} 
          id={task.id}
          key={task.id}
        />
      )
    });
    
    const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
    const headingText = `${taskList.length} ${tasksNoun} remaining`;

    function addTask(name) {
      const newTask = { id: ("todo-",name), name: name, completed: false }
      //append new task onto tasks and update state
      setTasks([...tasks, newTask])
    }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton pressed={true} filterName="all" />
        <FilterButton pressed={false} filterName="Active" />
        <FilterButton pressed={false} filterName="Completed" />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;

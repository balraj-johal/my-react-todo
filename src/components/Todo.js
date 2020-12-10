import React, { useState } from "react";

export default function Todo(props) {
    const taskName = props.name
    const done = props.completed
    const id = props.id
    const duration = props.duration
    //date logic
    const due = new Date(props.due)
    const daysRemaining = Math.ceil((Math.abs(due - (new Date()))) / (1000 * 60 * 60 * 24));
    const word = daysRemaining > 1 ? 'days' : 'day';
    const remainingText = `${daysRemaining} ${word} left!`;

    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    //change state of component as data is entered
    function handleChange(e) {
        setNewName(e.target.value)
    }
    //send data to parent through prop callback on submit
    function handleSubmit(e) {
        e.preventDefault()
        props.editTask(id, newName)
        setNewName("")
        setEditing(false)
    }

    const editTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="todo-label" htmlFor={id}>
                    New name for {taskName}
                </label>
                <input 
                    id={id} 
                    className="todo-text" 
                    type="text" 
                    value={newName}
                    onChange={handleChange}
                />
            </div>
            <div className="btn-group">
                <button type="button" className="btn todo-cancel" 
                    onClick={() => {setEditing(true)}}
                >
                    Cancel
                    <span className="visually-hidden">renaming {taskName}</span>
                </button>
                <button 
                    type="submit" 
                    className="btn btn__primary todo-edit"
                >
                    Save
                    <span className="visually-hidden">new name for {taskName}</span>
                </button>
            </div>
        </form>
    )

    const viewTemplate = (
        <div className="stack-small">
            <div className="c-cb">
                <input 
                    id={id} 
                    type="checkbox" 
                    defaultChecked={done}
                    onChange={()=> {props.toggleTaskCompletion(id)}}
                />
                <label className="todo-label" htmlFor={id}>
                    {taskName}
                </label>
                {remainingText}&nbsp;{duration} mins
            </div>
            <div className="btn-group">
                <button 
                    type="button" 
                    className="btn"
                    onClick={() => {setEditing(true)}}
                >
                    Edit <span className="visually-hidden">{taskName}</span>
                </button>
                <button 
                    type="button" 
                    className="btn btn__danger"
                    onClick={() => {props.deleteTask(props.id)}}
                >
                    Delete <span className="visually-hidden">{taskName}</span>
                </button>
                <button 
                    type="button" 
                    className="btn btn__alert"
                    onClick={() => {props.pushTask(props.id)}}
                >
                    Push to Tmr <span className="visually-hidden">{taskName}</span>
                </button>
            </div>
        </div>
    )

    return (
        <li className="todo">
            {isEditing ? editTemplate : viewTemplate}
        </li>
    );
}
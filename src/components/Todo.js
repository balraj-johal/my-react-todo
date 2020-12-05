import React from "react";

export default function Todo(props) {
    const taskName = props.name
    const done = props.completed
    const id = props.id

    return (
        <li className="todo stack-small">
            <div className="c-cb">
                <input id={id} type="checkbox" defaultChecked={done} />
                <label className="todo-label" htmlFor={id}>
                    {taskName}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn">
                    Edit <span className="visually-hidden">Eat</span>
                </button>
                <button type="button" className="btn btn__danger">
                    Delete <span className="visually-hidden">Eat</span>
                </button>
            </div>
        </li>
    );
}
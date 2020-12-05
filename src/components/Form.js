import React, { useState } from "react";

export default function Form(props) {

    const [name, setName] = useState('')

    function handleSubmittion(e) {
        e.preventDefault();
        if (name !== "") {
            props.addTask(name)
            setName('')
        } else {
            alert('you cant add empty task silly')
        }
    }

    function handleChange(e) {
        setName(e.target.value)
    }

    return (
    <form onSubmit={handleSubmittion} >
        <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
            What ya gotta do?
        </label>
        </h2>
        <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            value={name}
            onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
            Add
        </button>
    </form>
    );
}
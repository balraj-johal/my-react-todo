import React from "react";

export default function FilterButton(props) {
    const pressed = props.pressed
    const name = props.name

    return (
        <button 
          type="button" 
          className="btn toggle-btn" 
          aria-pressed={pressed}
          onClick={() => {props.setFilter(name)}}
        >
          <span className="visually-hidden">Show </span>
          <span>{name}</span>
          <span className="visually-hidden"> tasks</span>
        </button>
    )
}
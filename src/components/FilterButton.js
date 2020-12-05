import React from "react";

export default function FilterButton(props) {

    const pressed = props.pressed
    const filterName = props.filterName

    return (
        <button type="button" className="btn toggle-btn" aria-pressed={pressed}>
          <span className="visually-hidden">Show </span>
          <span>{filterName}</span>
          <span className="visually-hidden"> tasks</span>
        </button>
    )
}
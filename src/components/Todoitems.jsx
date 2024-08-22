import React from "react"

const Todoitems = (props) => {

    return (
        <div className="todo-items">
            <span >
                <input type="checkbox" className="todo-name" />
                <span className="todo-name">{props.text}</span>
            </span>
            <span>...</span>
        </div>
    )
}

export default Todoitems
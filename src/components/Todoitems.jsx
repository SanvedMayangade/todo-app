import React from "react"

const Todoitems = () => {

    return (
        <div className="todo-items">
            <span >
                <input type="checkbox" className="todo-name" />
                <span className="todo-name">Eat</span>
            </span>
            <span>...</span>
        </div>
    )
}

export default Todoitems
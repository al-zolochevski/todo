import React from "react";
import TodoListitItem from "../todo-list-item";
import "./todo-list.css"

const TodoList = ({todos, onDeleted}) => {
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item
        return (
            <li key={id} className="list-group-item">
                <TodoListitItem {...itemProps}
                                onDeleted={() => onDeleted(id)}
                />
            </li>
        )
    })

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
}

export default TodoList;
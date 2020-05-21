import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";

import "./app.css";

const App = () => {

    const arrTodoItems = [
        {label: "drink coffee", important: false, id: 1},
        {label: "do pull ups", important: false, id: 2},
        {label: "create react app", important: true, id: 3}
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos={arrTodoItems}/>
        </div>
    )
}

export default App;
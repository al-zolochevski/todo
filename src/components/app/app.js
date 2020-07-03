import React, {Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";

import "./app.css";
import ItemAddForm from "../item-add-form";

export default class App extends Component {

    maxId = 100;

    state = {
        arrTodoItems: [
            {label: "drink coffee", important: false, id: 1},
            {label: "do pull ups", important: false, id: 2},
            {label: "create react app", important: true, id: 3}
        ]
    }


    deletItem = (id) => {
        this.setState(({arrTodoItems}) => {
                const index = arrTodoItems.findIndex((element) => element.id === id);
                console.log(index);

                const newArray = [
                    ...arrTodoItems.slice(0, index),
                    ...arrTodoItems.slice(index + 1)
                ];

                return {
                    arrTodoItems: newArray
                }
            }
        )
    }

    addItem = (text) => {

        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        }

        this.setState(({arrTodoItems}) => {
            const newArrTodos = [...arrTodoItems, newItem];
            return {
                arrTodoItems: newArrTodos
            }
        })
    }


    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>

                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList todos={this.state.arrTodoItems}
                          onDeleted={this.deletItem}
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        )
    }
}



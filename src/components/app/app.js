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
            this.createTodoItem("drink coffee"),
            this.createTodoItem("do pull ups"),
            this.createTodoItem("create react app"),
        ]
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deletItem = (id) => {
        this.setState(({arrTodoItems}) => {
                const index = arrTodoItems.findIndex((element) => element.id === id);

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

        const newItem = this.createTodoItem(text);

        this.setState(({arrTodoItems}) => {
            const newArrTodos = [...arrTodoItems, newItem];
            return {
                arrTodoItems: newArrTodos
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({arrTodoItems}) => {
            const index = arrTodoItems.findIndex((element) => element.id === id);

            const oldItem = arrTodoItems[index];

            const newItem = {...oldItem, done: !oldItem.done};

            const newArray = [
                ...arrTodoItems.slice(0, index),
                newItem,
                ...arrTodoItems.slice(index + 1)
            ];
            return {
                arrTodoItems: newArray
            }
        })
    };

    onToggleImportant = (id) => {
        console.log('toggle important' + id)
    }

    render() {
         const doneCount = this.state.arrTodoItems.filter((element) => element.done).length;
         const todoCount = this.state.arrTodoItems.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>

                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList todos={this.state.arrTodoItems}
                          onDeleted={this.deletItem}
                          onToggleDone={this.onToggleDone}
                          onToggleImportant={this.onToggleImportant}
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        )
    }
}



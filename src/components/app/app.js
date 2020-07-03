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

    toggleProperty(arr, id, propName) {
        const index = arr.findIndex((element) => element.id === id);

        const oldItem = arr[index];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1)
        ];
    }

    onToggleDone = (id) => {
        this.setState(({arrTodoItems}) => {
            return {
                arrTodoItems: this.toggleProperty(arrTodoItems, id, 'done')
            }
        })
    };


    onToggleImportant = (id) => {
        this.setState(({arrTodoItems}) => {
            return {
                arrTodoItems: this.toggleProperty(arrTodoItems, id, 'important')
            }
        })
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



import React, {Component} from "react";
import "./todo-list-item.css";


export default class TodoListitItem extends Component {

    render() {
        const {label, onDeleted, onToggleDone, onToggleImportant, done, important,} = this.props;

        let classNameTodoListItem = "todo-list-item";

        if (done) {
            classNameTodoListItem += " done";
        }
        if (important) {
            classNameTodoListItem += " important";
        }

        return (
            <span className={classNameTodoListItem}>
            <span
                className="todo-list-item-label"
                onClick={onToggleDone}>
                {label}
            </span>

            <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={onToggleImportant}>
              <i className="fa fa-exclamation"/>
            </button>

            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}>
              <i className="fa fa-trash-o"/>
            </button>
          </span>
        );
    }
}
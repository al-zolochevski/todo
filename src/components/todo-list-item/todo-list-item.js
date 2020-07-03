import React, {Component} from "react";
import "./todo-list-item.css";


export default class TodoListitItem extends Component {

    state = {
        done: false,
        important: false
    }

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    }

    markLikeImportant = () => {
        this.setState(({important}) => {
            return {
                important: !important
            }
        })
    }

    render() {
        const {done, important} = this.state;
        const {label, onDeleted} = this.props;

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
                onClick={this.onLabelClick}>
                {label}
            </span>

            <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={this.markLikeImportant}>
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
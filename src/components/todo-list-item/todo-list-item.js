import React, {Component} from "react";
import "./todo-list-item.css";


export default class TodoListitItem extends Component {
    render() {
        const {label, important} = this.props;
        const styleSpan = {
            color: important ? 'tomato' : 'black',
        };
        return (
            <span className="todo-list-item">
            <span
                className="todo-list-item-label"
                style={styleSpan}>
              {label}
            </span>

            <button type="button"
                    className="btn btn-outline-success btn-sm float-right">
              <i className="fa fa-exclamation"/>
            </button>

            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right">
              <i className="fa fa-trash-o"/>
            </button>
          </span>
        );
    }
}
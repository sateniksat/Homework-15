import React, { Component } from "react";
import {
  MdOutlineModeEditOutline,
  MdDoneOutline,
  MdDeleteOutline,
} from "react-icons/md";

export class TodoList extends Component {
  handleEdit({ id }) {
    let findTodo = this.props.todos.find((todo) => todo.id === id);
    this.props.editTodohandle(findTodo);
  }
  handleComplite(todo) {
    this.props.todoshandle(
      this.props.todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  }
  handleDelete({ id }) {
    this.props.todoshandle(this.props.todos.filter((todo) => todo.id !== id));
  }
  render() {
    return (
      <div className="todolist">
        {this.props.todos.map((todo) => {
          // console.log(todo);
          return (
            <li key={todo.id} className="backLI">
              <input
                type="text"
                value={todo.title}
                className={`${todo.completed ? "completed" : ""}`}
                onChange={(event) => event.preventDefault()}
                disabled
              />
              <div className="icons">
                <MdDoneOutline onClick={() => this.handleComplite(todo)} />
                <MdOutlineModeEditOutline
                  onClick={() => this.handleEdit(todo)}
                />
                <MdDeleteOutline onClick={() => this.handleDelete(todo)} />
              </div>
            </li>
          );
        })}
      </div>
    );
  }
}

export default TodoList;

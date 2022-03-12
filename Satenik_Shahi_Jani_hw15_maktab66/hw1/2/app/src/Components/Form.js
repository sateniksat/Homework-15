import React, { Component } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { TiTick } from "react-icons/ti";
// import {v4 as uuidv4} from "uuid";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.updateTodo = this.updateTodo.bind(this);
  }
  updateTodo(title, id, completed) {
    let newTodo = this.props.todos.map((todo) => {
      return todo.id === id ? { title, id, completed } : todo;
    });
    this.props.todoshandle(newTodo);
    this.props.editTodohandle("");
  }
  onInputChange(event) {
    this.props.inputhandle(event.target.value);
  }
  onFormSubmit(event) {
    event.preventDefault();
    if (!this.props.editTodo) {
      this.props.todoshandle([
        ...this.props.todos,
        { id: Date.now(), title: this.props.input, completed: false },
      ]);
      
      
      
      ///////////////////...................................................attention
      //instead of using  {Date.now()} we can use {uuidv4()}

      
      this.props.inputhandle("");
    } else {
      this.updateTodo(
        this.props.input,
        this.props.editTodo.id,
        this.props.editTodo.completed
      );
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.editTodo !== this.props.editTodo &&
      prevProps.inputhandle !== this.props.inputhandle
    ) {
      console.log("editTodo props has changed.");
      if (this.props.editTodo) {
        this.props.inputhandle(this.props.editTodo.title);
      } else {
        this.props.inputhandle("");
      }
    }
  }
  render() {
    return (
      <form onSubmit={(event) => this.onFormSubmit(event)}>
        <input
          type="text"
          placeholder="Enter a to do ..."
          value={this.props.input}
          required
          onChange={(event) => this.onInputChange(event)}
        />
        <button className="iconform" type="submit">
          {this.props.editTodo ? <TiTick /> : <MdOutlineAddBox />}
        </button>
      </form>
    );
  }
}

export default Form;

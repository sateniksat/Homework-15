import React, { Component } from "react";
import Form from "./Form.js";
import TodoList from "./TodoList.js";

export class Item extends Component {
  //  initialState=JSON.parse(localStorage.getItem("this.state.todos")) || [];
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      // todos: [this.initialState],
      todos:[],
      editTodo: null,
    };
  }
  inputhandle(item) {
    this.setState({
      input: item,
    });
  }
  todoshandle(item) {
    this.setState({
      todos: item,
    });
  }
  editTodohandle(item) {
    this.setState({
      editTodo: item,
    });
  }
  // componentDidUpdate(prevProps,prevState){
  //   if(prevState.todos !== this.state.todos){
  //     localStorage.setItem("todos",JSON.stringify(this.state.todos))
  //   }
  // }
  componentDidMount() {
    fetch("/json/todos.json")
      .then((response) => response.json())
      .then((res) => {
        this.setState({ todos: res });
      });
  }
  render() {
    return (
      <div className="container">
        <h2>T O D O</h2>
        <Form 
          input={this.state.input}
          inputhandle={this.inputhandle.bind(this)}
          todos={this.state.todos}
          todoshandle={this.todoshandle.bind(this)}
          editTodo={this.state.editTodo}
          editTodohandle={this.editTodohandle.bind(this)}
        />
        <TodoList
          todos={this.state.todos}
          todoshandle={this.todoshandle.bind(this)}
          editTodohandle={this.editTodohandle.bind(this)}
        />
      </div>
    );
  }
}

export default Item;


import React, { Component } from 'react'
import TodoItem from './TodoItem.js'
export default class TodoList extends Component {
    constructor(props) {
        super(props);
    
        this.state = { todos: [
          'Learn React',
          'Write blog posts',
          'Kick back and relax'
        ]};
        this.handleUpdate = this.handleUpdate.bind(this);
      }
    
      handleUpdate(todo) {
        this.setState({ todo });
      }
    
      render() {
        return (
          <ul>
            {this.state.todos.map((todo, index) => {
              <TodoItem todo={todo} key={index} updateTodo={this.handleUdpate} />
            })}
          </ul>
        );
      }
}

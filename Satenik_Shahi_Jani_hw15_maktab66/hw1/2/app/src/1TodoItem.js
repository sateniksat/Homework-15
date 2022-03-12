
import React, { Component } from 'react'

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
    
        this.handleUpdate = this.handleUpdate.bind(this);
      }
    
      handleUpdate(todo) {
        this.props.handleUpdate(todo);
      }
    
      render() {
        return (
          <li>
            <label>input</label>
            <input id="todo-item" onKeyUp={this.handleUpdate} value={this.state.todo}/>
          </li>
        )
      }
}

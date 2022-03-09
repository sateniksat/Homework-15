import React, { useState } from 'react';
import TodoForm from './TodoForm';
// import { RiEdit2Line } from "react-icons/fa";
// import { RiCloseFill } from "react-icons/fa";
// import { AiOutlineCloseCircle } from "react-icons/fa";
// import { FiEdit } from "react-icons/fa";
import { FaRegTimesCircle,FaPen } from "react-icons/fa";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        {/* <div style={{padding:"2px",border:"white 1px solid"}} onClick={() => removeTodo(todo.id)}>x </div><div  onClick={() => setEdit({ id: todo.id, value: todo.text })}>edit</div> */}
        {/* <RiEdit2Line/> */}
        {/* <RiCloseFill/> */}
        {/* <AiOutlineCloseCircle/> */}
        {/* <FiEdit/> */}
        <FaPen style={{marginRight:"5%"}} onClick={() => setEdit({ id: todo.id, value: todo.text })} />
        <FaRegTimesCircle onClick={() => removeTodo(todo.id)}/>
      </div>
    </div>
  ));
};

export default Todo;

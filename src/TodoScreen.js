import React, { useState } from 'react';
import './TodoScreen.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        text: inputValue,
      };

      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className='form-box'>
    <div className='header-text'>
      <h1 className='heading'>Todo</h1>
      <div className='centered-row'>
      <input className='input-field' type="text" value={inputValue} onChange={handleInputChange} />
      <button className='button' onClick={handleAddTodo}>+</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button className='delete-btn' onClick={() => handleDeleteTodo(todo.id)}><i class="fa fa-close"></i></button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default TodoApp;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]); // State for storing to-do items
  const [task, setTask] = useState(''); // State for the new task input

  // Fetch the to-dos from the backend API when the component loads
  useEffect(() => {
    fetchTodos();
  }, []);

  // Function to fetch to-dos from the backend
  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://10.0.0.13:5000/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  // Function to add a new to-do
  const addTodo = async () => {
    if (!task.trim()) return; // Ignore empty input
    try {
      const response = await axios.post('http://10.0.0.13:5000/api/todos', { task });
      setTodos([...todos, response.data]);
      setTask(''); // Clear the input field
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  // Function to delete a to-do
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://10.0.0.13:5000/api/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>To-Do List</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          style={{ padding: '10px', marginRight: '10px', width: '300px' }}
        />
        <button onClick={addTodo} className="add" style={{ padding: '10px 20px' }}>
          Add
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo._id}
            style={{
              margin: '10px auto',
              padding: '10px',
              width: '400px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
            }}
          >
            {todo.task}
            <button
              onClick={() => deleteTodo(todo._id)}
              style={{
                backgroundColor: '#ff4d4f',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

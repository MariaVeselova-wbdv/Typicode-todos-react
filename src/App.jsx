import { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/todos'; 

  //* Todos
  const [todos, setTodos] = useState([]);

  // * API
  useEffect(() => {
    const getTodos = () => {
      
      fetch(apiUrl + '?_limit=5')
      .then(res => res.json())
      .then(data => setTodos(data))
   
      .catch(error => console.error('Error fetching todos:', error));
     
    };

    getTodos();
  }, [])

  return (
    <div className='max-w-lg mx-auto mt-10 p-6 rounded-lg shadow-lg bg-my-primary'>
      <Header />
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;

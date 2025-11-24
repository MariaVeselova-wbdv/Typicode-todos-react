import { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  //* Todos
  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    const confirmDelete = window.confirm('Are you sure to delete?');
    if (confirmDelete) {
      try {
        await fetch(apiUrl + '?_limit=5', {
          method: 'DELETE'
        });

      setTodos(todos.filter((todo) => todo.id !== id));
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    }
  };

  // * API
  // useEffect(() => {
  //   const getTodos = () => {
  //     fetch(apiUrl + '?_limit=5')
  //       .then((res) => res.json())
  //       .then((data) => setTodos(data))

  //       .catch((error) => console.error('Error fetching todos:', error));
  //   };

  //   getTodos();
  // }, []);

  useEffect(() => {
    const getTodos = async() => {
      try{
        const res = await fetch(apiUrl + '?_limit=5')
        const data = await res.json();
        setTodos(data)
      } catch(error){
          console.error('Error fetching todos', error)
      }
    };

    getTodos()
  }, []);



  return (
    <div className='max-w-lg mx-auto mt-10 p-6 rounded-lg shadow-lg bg-my-primary'>
      <Header />
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;

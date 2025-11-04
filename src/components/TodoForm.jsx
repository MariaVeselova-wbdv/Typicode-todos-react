import { useState } from 'react';

const TodoForm = ({todos, setTodos}) => {
  // * Todo
  const [todo, setTodo] = useState('');

  // Validation
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTodo = todo.trim();
    if(!trimmedTodo) return;
  // New todo
    const newTodo = {id: Date.now(), todo: trimmedTodo}
  
  // Add todos to submition state
    
    setTodos(prevTodos => [newTodo, ...prevTodos])
    
  // Reset todo on submition
    setTodo('');
  }

  return (
    <form onSubmit={handleSubmit} id='todo-form' className='mx-auto'>
      <div className='flex justify-center'>
        <input
          className='focus:outline-none'
          type='text'
          id='todo'
          placeholder=' Add Todo'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className='bg-black hover:bg-gray-800' type='submit'>
          Add ➕
        </button>
      </div>
    </form>
  );
};

export default TodoForm;

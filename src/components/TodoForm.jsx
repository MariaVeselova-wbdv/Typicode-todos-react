import { useState } from 'react';

const TodoForm = ({ todos, setTodos }) => {
  // * Todo
  const [todo, setTodo] = useState('');

  // Validation
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTodo = todo.trim();
    if (!trimmedTodo) return;

    // Create new todo
    const newTodo = { id: Date.now(), todo: trimmedTodo };

    // Add todos to submition state
    setTodos((prevTodos) => [newTodo, ...prevTodos]);

    // Reset todo on submition
    setTodo('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} id='todo-form' className='mb-6 mx-auto'>
        <div className='justify-center text-white'>
          <input
            className='w-full p-2 border border-gray-400 rounded-lg focus:outline-none'
            type='text'
            id='todo'
            placeholder='Add Todo'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
      </form>

      <button
        onClick={() => {}}
        className='text-white w-full border-none text-gray-800 py-1 rounded-lg cursor-pointer mb-4 bg-gray-800 hover:bg-gray-700 transition'
      >
        Add ➕
      </button>
    </>
  );
};

export default TodoForm;

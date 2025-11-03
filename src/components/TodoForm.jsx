import { useState } from 'react';

const TodoForm = () => {
  const [todo, setTodo] = useState();

  return (
    <form id='todo-form' className='mx-auto'>
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

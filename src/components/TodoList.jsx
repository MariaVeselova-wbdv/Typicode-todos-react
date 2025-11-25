const TodoList = ({ todos, deleteTodo, toggleCompleted }) => {
  if (todos.length === 0) {
    return <p className='text-center text-gray-700'>No Todos Yet</p>;
  }
  return (
    <div className='mt-5 cursor-pointer'>
      {todos.map((todo) => (
        <div
          key={todo.id}
          onClick={() => toggleCompleted(todo.id)}
          className={`bg-my-secondary w-full flex cursor-pointer text-gray-800 rounded shadow-lg border-l-4 mb-2 p-1 ${todo.completed ? 'completed' : ''}
        `}
          style={{
            backgroundColor: todo.completed ? '#1E2939' : '',
            color: todo.completed ? '#7D8BA1' : 'inherit',
          }}
          onDoubleClick={() => deleteTodo(todo.id)}
        >
          <h3 className='text-sm font-medium'>{todo.todo || todo.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

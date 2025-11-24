const TodoList = ({ todos, deleteTodo }) => {
  if(todos.length === 0){
    return (
      <p className="text-center text-gray-700">No Todos Yet</p>
    )
  }
  return ( 
    <div className="mt-5 cursor-pointer">
      { todos.map((todo) => (
        <div key={todo.id} onDoubleClick={() => deleteTodo(todo.id)}  className="bg-my-secondary w-full flex  cursor-pointer text-gray-800 rounded shadow-lg border-l-4 mb-2 p-1">
          <h3 className="text-sm font-medium">{ todo.todo || todo.title}</h3>
        </div>
      ) )

      }
    </div>
   );
}
 
export default TodoList;
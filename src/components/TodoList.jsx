const TodoList = ({ todos }) => {
  if(todos.length === 0){
    return (
      <p className="mt-2 p-4 text-center text-gray-700">No Todos Yet</p>
    )
  }
  return ( 
    <div className="mt-4 cursor-pointer">
      { todos.map((todo) => (
        <div key={todo.id} className="bg-my-secondary w-full flex mb-2 cursor-pointer p-1 text-gray-800 rounded shadow-lg border-l-4">
          <h3 className="text-sm font-medium">{todo.todo}</h3>
        </div>
      ) )

      }
    </div>
   );
}
 
export default TodoList;
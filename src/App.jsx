import { useState } from 'react';
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  //* Todos
 const [todos, setTodos] = useState([]);

  return ( 
    <>
    <div className='max-w-lg mx-auto mt-10 p-6 bg-my-primary rounded-lg shadow-lg text-center'>
      <Header />
      <TodoForm todos={todos} setTodos={setTodos}  />
      <TodoList />
    </div>
  </>
   );
}
 
export default App;
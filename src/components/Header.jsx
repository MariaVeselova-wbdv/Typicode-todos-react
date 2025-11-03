import { LuListTodo } from 'react-icons/lu';

const Header = () => {
 
  return (
    <header className="flex justify-center">
      <LuListTodo size={20}/>
      <h1>Todo App</h1>
    </header>
  );
};

export default Header;

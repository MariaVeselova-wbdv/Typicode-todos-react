import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';

const Container = () => {
  return (
    <>
      <div className='max-w-lg mx-auto mt-10 p-6 bg-my-primary rounded-lg shadow-lg text-center'>
        <Header />
        <Form />
        <TodoList />
      </div>
    </>
  );
};

export default Container;

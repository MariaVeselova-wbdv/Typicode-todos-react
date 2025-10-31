const Form = () => {
  return (
    <form id='todo-form' className='mx-auto'>
      <div className="flex justify-center">
        <input className="focus:outline-none" type='text' id='title' placeholder='Add Todo' />
        <button className="bg-black hover:bg-gray-800" type='submit'>Add</button>
      </div>
    </form>
  );
};

export default Form;

import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="justify-center items-center h-screen w-full">
      <div className="w-screen items-center flex flex-col py-10">
        <h1 className="text-4xl font-bold text-center">Todo App</h1>
      </div>
      <TodoForm/>
    </div>
  );
}

export default App;

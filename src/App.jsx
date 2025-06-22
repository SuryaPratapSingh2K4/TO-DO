import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItem";
import TodoItemss from "./components/TodoItemss";

function App() {

  const Items = [
    {
      name: "Wake up early",
      date: "21/06/2025"
    },
    {
      name: "Go to gym",
      date: "21/06/2025"
    },
    {
      name: "Study hard",
      date: "21/06/2025"
    }
  ]

  return (
    <div className="justify-center items-center h-screen w-full">
      <div className="w-screen items-center flex flex-col py-10">
        <h1 className="text-4xl font-bold text-center">Todo App</h1>
      </div>
      <TodoForm />
      <TodoItemss/>
    </div>
  );
}

export default App;

import React from "react";
import TodoList from "./TodoList";
// import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  task: string;
 
  

}

const App: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [newTask, setNewTask] = React.useState("");

  const handleAdd = () => {
    if (newTask.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(),
        task: newTask,
      };
      setTodos([...todos, newTodo]);
      setNewTask("");
    }
  };

  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEdit = (id: number, editedTask: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: editedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="container mx-auto max-w-sm p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-400">ToDo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border border-gray-300 p-2 flex-1 mr-2"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-400 text-white py-2 px-4 rounded-lg"
        >
          Add Task
        </button>
      </div>
      <TodoList todos={todos} onDelete={handleDelete} onEdit={handleEdit} onAdd={handleAdd} />
    </div>
  );
};

export default App;

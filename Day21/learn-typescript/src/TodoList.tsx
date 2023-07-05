import React from "react";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  task: string;
  completed:boolean;
  // todos:string;
}

interface TodoListProps {
  todos: Todo[];
  onAdd: (task: string) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTask: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onAdd, onDelete, onEdit }) => {
  const [newTask, setNewTask] = React.useState("");

  const handleAdd = () => {
    if (newTask.trim() !== "") {
      onAdd(newTask);
      setNewTask("");
    }
  };
  const handleDelete = (id:number) => {
    
    onDelete(id);
  };
  const handleEdit = (id:number, editedTask:string) => {
    onEdit(id, editedTask);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        
        {/* <button onClick={handleAdd}>Add</button> */}
      </div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          task={todo.task}
          onDelete={() => onDelete(todo.id)}
          onEdit={(editedTask:string) => onEdit(todo.id, editedTask)}
        />
      ))}
    </div>
  );
};

export default TodoList;

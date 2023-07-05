import React from "react";

interface TodoItemProps {
  task: string;
  onDelete: () => void;
  onEdit: (newTask: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onDelete, onEdit }) => {
  const [editMode, setEditMode] = React.useState(false);
  const [editedTask, setEditedTask] = React.useState(task);
  const [completed, setCompleted] = React.useState(false);

  const handleDelete = () => {
    onDelete();
  };

  const handleEdit = () => {
    onEdit(editedTask);
    setEditMode(false);
  };

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  return (
    <div>
      {editMode ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button onClick={handleEdit} className="bg-red-300 ml-2 h-[40px] w-[80px] rounded-lg">
            Save
          </button>
        </>
      ) : (
        <>
          <div className="flex">
            <input
              type="checkbox"
              checked={completed}
              onChange={handleCheckboxChange}
              className="mr-2 h-4 w-4"
            />
            <span style={{ textDecoration: completed ? "line-through" : "none" }}>
              {task}
            </span>
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-300 ml-10 h-[40px] w-[80px] rounded-lg"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-300 ml-2 h-[40px] w-[80px] rounded-lg"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;

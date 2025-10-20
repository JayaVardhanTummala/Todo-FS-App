import { useState } from "react";

export default function TodoCard({ todo, handleDeleteTodo, handleEditTodo }) {
  const [editMode, setEditMode] = useState(false);
  const [editValue, setEditValue] = useState(todo.todo);

  return (
    <li className="todoItem">
      {editMode ? (
        <input value={editValue} onChange={(e) => setEditValue(e.target.value)} />
      ) : (
        <p>{todo.todo}</p>
      )}

      <div className="actionsContainer">
        {editMode ? (
          <button
            onClick={() => {
              handleEditTodo(todo._id, editValue); // ✅ Patch backend
              setEditMode(false);
            }}
          >
            ✅
          </button>
        ) : (
          <button onClick={() => setEditMode(true)}>
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
        )}
        <button onClick={() => handleDeleteTodo(todo._id)}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}

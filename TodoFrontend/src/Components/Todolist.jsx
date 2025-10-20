import TodoCard from "./TodoCard";

export default function Todolist({ todos, handleDeleteTodo, handleEditTodo }) {
  return (
    <ul className="main">
      {todos.map((todo) => (
        <TodoCard
          key={todo._id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </ul>
  );
}

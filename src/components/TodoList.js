import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onDeleteItem }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={`todo-${index}`}
          todo={todo}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
}
export default TodoList;

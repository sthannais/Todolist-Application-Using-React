import React from "react";

function TodoItem({ todo, onDeleteItem }) {
  const getStyle = () => {
    return {
      textDecoration: todo.completed ? "" : "none",
      padding: "5px",
      margin: "10px,",
      border: "1px solid #B3BABA",
      backgroundColor: " #ecf6f6",
    };
  };

  return (
    <>
      <div style={getStyle()}>{todo.task}</div>
      <button className="buttonX" onClick={() => onDeleteItem(todo.id)}>
        X
      </button>
    </>
  );
}
export default TodoItem;

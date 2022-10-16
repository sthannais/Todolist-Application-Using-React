import { useState } from "react";
import data from "./data.json";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState(data);

  const onComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === Number(id)
          ? { ...todo, completed: !todo.completed }
          : { ...todo };
      })
    );
  };

  const onDeleteItem = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

  const addTodo = (newTodo) => {
    let newItem = { id: +new Date(), task: newTodo, completed: false };

    setTodos([...todos, newItem]);
  };

  return (
    <>
      <h1>todos</h1>
      <div className="container">
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          onComplete={onComplete}
          onDeleteItem={onDeleteItem}
        />
        {todos.length <= 0 ? "Add Task" : todos.length + " item left"}
      </div>
    </>
  );
}

export default App;

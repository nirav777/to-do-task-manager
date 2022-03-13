import React from "react";
import ToDo from "./ToDo.js";

function ToDoList({ todos, setTodos, filteredTodos }) {
  return (
    <div className="to-do-container">
      <ul className="to-do-list">
        {filteredTodos.map((todo) => (
          <ToDo
            text={todo.text}
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
      {filteredTodos.length === 0 && todos.length !== 0 ? (
        <h1>No Results Found</h1>
      ) : null}
    </div>
  );
}

export default ToDoList;

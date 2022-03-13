import React from "react";
import {
  faCheck,
  faEyeSlash,
  faXmark,
  faBoxArchive,
  faPencil,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function ToDo({ text, todo, todos, setTodos }) {
  const [editText, setEditText] = useState("");
  const [editStatus, setEditStatus] = useState(false);

  const completeTodoHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const deleteTodoHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            deleted: !item.deleted,
          };
        } else {
          return item;
        }
      })
    );
  };

  const editHandler = (e) => {
    setEditText(e.target.value.toUpperCase());
  };

  const updateTodoHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            text: editText,
          };
        } else {
          return item;
        }
      })
    );
    setEditStatus(false);
  };

  const editStatusHandler = () => {
    setEditText(text);
    setEditStatus((value) => !value);
  };

  const hideTodoHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            hidden: !item.hidden,
            archived: false,
          };
        }
        return item;
      })
    );
  };

  const archiveTodoHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            hidden: false,
            archived: !item.archived,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <div className="to-do-text">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {text}
        </li>
      </div>
      <div className="icons">
        <button className="check-button" onClick={completeTodoHandler}>
          <FontAwesomeIcon icon={faCheck} color="green" size="2x" />
        </button>
        <button className="delete-button" onClick={deleteTodoHandler}>
          <FontAwesomeIcon icon={faXmark} color="red" size="2x" />
        </button>
        <button className="hide-button" onClick={hideTodoHandler}>
          <FontAwesomeIcon icon={faEyeSlash} color="black" size="2x" />
        </button>
        <button className="archive-button" onClick={archiveTodoHandler}>
          <FontAwesomeIcon icon={faBoxArchive} color="black" size="2x" />
        </button>
        <button className="edit-button" onClick={editStatusHandler}>
          <FontAwesomeIcon icon={faPencil} color="black" size="2x" />
        </button>
        {editStatus ? (
          <div className="edit-task-editor">
            <h1>Edit Your Task</h1>
            <input
              onChange={editHandler}
              className="edit-input"
              value={editText}
              placeholder="Edit..."
            />
            <button onClick={updateTodoHandler} className="ok-button">
              <FontAwesomeIcon icon={faPenToSquare} color="black" size="2x" />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ToDo;

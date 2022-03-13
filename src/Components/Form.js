import React from "react";
import { faPlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Form({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
  setFilteredTodos,
}) {
  const [searchText, setSearchText] = useState("");

  const inputHandler = (e) => {
    setInputText(e.target.value.toUpperCase());
  };

  const addTodoHandler = () => {
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        hidden: false,
        archived: false,
        deleted: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const searchTextHandler = (e) => {
    setSearchText(e.target.value.toUpperCase());
  };

  const searchHandler = () => {
    setFilteredTodos(todos.filter((item) => item.text === searchText));
    setSearchText("");
  };

  return (
    <div className="form">
      <input onChange={inputHandler} value={inputText} placeholder="Add Task" />
      <button className="add-button" onClick={addTodoHandler}>
        <FontAwesomeIcon icon={faPlus} color="black" size="2x" />
      </button>
      <select onChange={statusHandler}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
        <option value="hidden">Hidden</option>
        <option value="archived">Archived</option>
        <option value="deleted">Deleted</option>
      </select>
      <input
        onChange={searchTextHandler}
        value={searchText}
        placeholder="Search Task"
      />
      <button onClick={searchHandler} className="search-button">
        <FontAwesomeIcon icon={faMagnifyingGlass} color="black" size="2x" />
      </button>
    </div>
  );
}

export default Form;

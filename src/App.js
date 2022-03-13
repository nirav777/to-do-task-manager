import "./App.css";
import "./Styles/style.css";
import Header from "./Components/Header";
import Form from "./Components/Form";
import ToDoList from "./Components/ToDoList";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterTodosHandler();
  }, [status, todos]);

  const filterTodosHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(
          todos.filter(
            (item) =>
              item.completed === true &&
              item.deleted !== true &&
              item.hidden !== true &&
              item.archived !== true
          )
        );
        break;
      case "incomplete":
        setFilteredTodos(
          todos.filter(
            (item) =>
              item.completed === false &&
              item.deleted !== true &&
              item.hidden !== true &&
              item.archived !== true
          )
        );
        break;
      case "hidden":
        setFilteredTodos(
          todos.filter((item) => item.hidden === true && item.deleted !== true)
        );
        break;
      case "archived":
        setFilteredTodos(
          todos.filter(
            (item) => item.archived === true && item.deleted !== true
          )
        );
        break;
      case "deleted":
        setFilteredTodos(todos.filter((item) => item.deleted === true));
        break;
      default:
        setFilteredTodos(
          todos.filter(
            (item) =>
              item.deleted !== true &&
              item.hidden !== true &&
              item.archived !== true
          )
        );
        break;
    }
  };

  return (
    <div className="App">
      <Header />
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos}
      />
      <ToDoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
      <Footer todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

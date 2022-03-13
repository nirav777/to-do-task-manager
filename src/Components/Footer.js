import React from "react";

function Footer({ todos, setTodos }) {
  const deleteAllTasksHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item) {
          return {
            ...item,
            deleted: true,
          };
        }
      })
    );
  };

  const resetTaskManagerHandler = () => {
    setTodos([]);
  };

  const download = (csvString) => {
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const btn = document.getElementById("download-button");
    btn.addEventListener("click", get);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", "download.csv");
    a.click();
  };

  const get = async function () {
    const csvString = [
      ["Todo ID", "Todo Text", "Complete"],
      ...todos.map((item) => [item.id, item.text, item.completed]),
    ]
      .map((e) => e.join(","))
      .join("\n");

    console.log(csvString);
    download(csvString);
  };

  return (
    <div className="delete-all-tasks">
      <button onClick={deleteAllTasksHandler}>Delete All Tasks</button>
      <button className="reset-button" onClick={resetTaskManagerHandler}>
        Reset Task Manager
      </button>
      <button className="download-button" onClick={get} id="download-button">
        Download CSV File
      </button>
    </div>
  );
}

export default Footer;

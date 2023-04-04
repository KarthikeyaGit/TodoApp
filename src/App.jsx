import { useState } from "react";
import plusLogo from "./assets/plus.svg";
import deleteLogo from "./assets/delete.svg";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todolist, setTodolist] = useState([]);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function addToList() {
    if (inputValue.length > 0) {
      setTodolist([...todolist, inputValue]);
      setInputValue("");
    }
  }
  function deleteItem(index) {
    setTodolist((prevTodolist) => {
      const newTodolist = [...prevTodolist];
      newTodolist.splice(index, 1);
      return newTodolist;
    });
  }

  return (
    <div className="App">
      <div className="container">
        <div class="m-3">
          <section className="mt-3 mb-3">
            <h1>Todo App</h1>
          </section>
          <section className="d-flex flex-row">
            <input
              value={inputValue}
              className="col form-control me-2"
              type="text"
              placeholder="Add a new todo"
              onChange={handleInputChange}
            />
            <div
              className="col-1 btn btn-primary "
              onClick={addToList}
              style={{ width: "70px" }}
            >
              <img src={plusLogo} alt="plus" style={{ margin:"-5px",height: "40px" }} />
            </div>
          </section>
          <section>
            <ul style={{ "list-style-type": "none", padding: "0" }}>
              {todolist.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="d-flex flex-row list-item">
                      <input
                        type="text"
                        className="col form-control me-2 mt-2 list-item"
                        value={item}
                        readOnly={true}
                        style={{ backgroundColor: "#F3F1F4" }}
                      />
                      <div className="col-1 btn btn-danger mt-2 delete-item" onClick={() => deleteItem(index)} style={{width: "70px"}}>
                        <img
                          src={deleteLogo}
                          alt="plus"
                          style={{ height: "25px" }}
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;

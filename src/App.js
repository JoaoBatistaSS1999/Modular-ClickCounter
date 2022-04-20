import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const operation = {
    add: () => {
      setNumber(number + 1);
    },
    subtract: () => {
      setNumber(number - 1);
    },
    reset: () => {
      setNumber(0);
    },
  };
  return (
    <div className="container">
      <div className="subcontainer number-container" onClick={operation.add}>
        <h1> {number} </h1>
      </div>
      <div className="subcontainer btn-container">
        <button className="add" onClick={operation.add}>
          Add
        </button>
        <button className="sub" onClick={operation.subtract}>
          Subtract
        </button>
        <button className="res" onClick={operation.reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

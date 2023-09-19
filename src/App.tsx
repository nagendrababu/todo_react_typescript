import "./styles.css";
import { useState } from "react";
interface ITodo {
  description: string;
  isCompleted?: boolean;
}
export default function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todoItems, setTodoItems] = useState<ITodo[]>([]);
  return <div className="App">
    <div>
      <h1>Hello CodeSandbox</h1>
      <input
        type="text"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      ></input>
      <button
        style={{ marginLeft: "5px" }}
        onClick={() =>
          setTodoItems([
            ...todoItems,
            { description: inputValue, isCompleted: false }
          ])
        }
      >
        Add
      </button>
    </div>
    <div>
      {todoItems?.map((val, index) => (
        <div key={index} style={{ margin: "5px" }}>
          {val?.isCompleted ? (
            <del>{val.description}</del>
          ) : (
            <span>{val.description}</span>
          )}

          <button
            style={{ marginLeft: "5px" }}
            disabled={val.isCompleted}
            onClick={() => {
              const items = [...todoItems];
              const item = items[index];
              item.isCompleted = true;
              items[index] = item;
              setTodoItems(items);
            }}
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  </div>;
}

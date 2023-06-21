import { useState } from "react";
import "./App.css";

function App() {
  const [selectedColor, setSelectedColor] = useState("green");
  const colors = ["red", "green", "blue"];

  return (
    <>
      <h1>
        Color: <span className={selectedColor}>{selectedColor}</span>
      </h1>
      <div className="circle-container">
        {colors.map((color) => (
          <div
            className={`circle ${color} ${
              selectedColor === color ? "selected" : ""
            }`}
            onClick={() => setSelectedColor(color)}
          ></div>
        ))}
      </div>
    </>
  );
}

export default App;

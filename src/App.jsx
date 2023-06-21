import { useState } from "react";
import "./App.css";

function App() {
  const [selectedColor, setSelectedColor] = useState("green");
  const colors = ["red", "green", "blue"];

  const Circle = ({ color }) => {
    return (
      <div
        className={`circle ${color} ${
          selectedColor === color ? "selected" : ""
        }`}
        onClick={() => setSelectedColor(color)}
      ></div>
    );
  };

  return (
    <>
      <h1>
        Color: <span className={selectedColor}>{selectedColor}</span>
      </h1>
      <div className="circle-container">
        {colors.map((color) => (
          <Circle key={color} color={color} />
        ))}
      </div>
    </>
  );
}

export default App;

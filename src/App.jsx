import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div className="container" style={{ backgroundColor: color }}></div>
      <div className="bar">
        <div className="inner-bar">
          <button
            className="button "
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            className="button "
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            className="button "
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            className="button "
            onClick={() => setColor("yellow")}
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            className="button "
            onClick={() => setColor("pink")}
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>
          <button
            className="button "
            onClick={() => setColor("aqua")}
            style={{ backgroundColor: "aqua" }}
          >
            aqua
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

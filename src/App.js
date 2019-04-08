import React, { Component } from "react";
import Gabi from "./components/Gabi";
import Donut from "./components/Donut";
import Draggable from "react-draggable";
import "./App.css";

class App extends Component {
  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <div className="App">
        <h1>Нахрани Габи!</h1>

        <Gabi />
        <Draggable {...dragHandlers}>
          <div className="handle">
            <Donut />
          </div>
        </Draggable>
      </div>
    );
  }
}

export default App;

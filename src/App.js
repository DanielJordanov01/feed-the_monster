import React, { Component } from "react";
import Gabi from "./components/Gabi";
import Donut from "./components/Donut";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
import "tachyons";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  onEat = e => {
    e.containerElem.style.visibility = "hidden";
    let counter = this.state.counter + 1;
    this.setState({ counter });
  };

  render() {
    return (
      <div className="App flex flex-column">
        <h1>Нахрани Габи!</h1>
        <h2 className="tc">Донъти, които Габи е изяла: {this.state.counter}</h2>
        <div className="flex justify-center justify-between mh5 mv7">
          <DropTarget targetKey="foo" onHit={this.onEat}>
            <Gabi />
          </DropTarget>

          <DragDropContainer targetKey="foo">
            <Donut />
          </DragDropContainer>
          <DragDropContainer targetKey="foo">
            <Donut />
          </DragDropContainer>
        </div>
      </div>
    );
  }
}

export default App;

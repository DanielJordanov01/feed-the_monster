import React, { Component } from "react";
import Gabi from "./components/Gabi";
import Donut from "./components/Donut";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
import donut1 from "./donut.png";
import donut2 from "./donut2.png";
import "tachyons";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      calories: 0,
      visibility: ""
    };
  }

  onEat = e => {
    let visibility = "";
    e.containerElem.style.visibility = "hidden";
    let counter = this.state.counter + 1;
    let calorieTaken = this.state.calories + 452.2;
    this.setState({
      counter: counter,
      calories: calorieTaken,
      visibility: visibility
    });
  };

  fillBox = () => {
    const visibility = "visible";
    this.setState({ visibility });
  };

  render() {
    return (
      <div className="App flex flex-column">
        <h1 className="mb6">Нахрани Габи!</h1>
        <h2 className="tc ">
          Донъти, които Габи е изяла: {this.state.counter}
        </h2>
        <h2 className="tc">Калории: {this.state.calories} kcal</h2>
        <div className="flex justify-center justify-between mh5 mv5">
          <DropTarget targetKey="foo" onHit={this.onEat}>
            <Gabi />
          </DropTarget>
          <div className="donutBox">
            <div className="donuts">
              <DragDropContainer targetKey="foo">
                <Donut
                  visibility={this.state.visibility}
                  style={{ visibility: this.state.visibility }}
                  donut={donut1}
                />
              </DragDropContainer>
              <DragDropContainer targetKey="foo">
                <Donut visibility={this.state.visibility} donut={donut2} />
              </DragDropContainer>
              <DragDropContainer targetKey="foo">
                <Donut visibility={this.state.visibility} donut={donut1} />
              </DragDropContainer>
              <br />
              <DragDropContainer targetKey="foo">
                <Donut visibility={this.state.visibility} donut={donut2} />
              </DragDropContainer>
              <DragDropContainer targetKey="foo">
                <Donut visibility={this.state.visibility} donut={donut1} />
              </DragDropContainer>
              <DragDropContainer targetKey="foo">
                <Donut visibility={this.state.visibility} donut={donut2} />
              </DragDropContainer>
            </div>
            <button onClick={this.fillBox} className="ml6 mv4">
              Напълни кутията с донъти
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

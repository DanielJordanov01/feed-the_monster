import React, { Component } from "react";
import Particles from "react-particles-js";
import Gabi from "./components/Gabi";
import Donut from "./components/Donut";
import FirstPage from "./components/FirstPage";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
import donut1 from "./donut.png";
import donut2 from "./donut2.png";
import eatingSound from "./eating.mp3";
import "tachyons";
import "./App.css";

const audio = new Audio(eatingSound);

const particlesOptions = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 800
      }
    },
    shape: {
      type: "images",
      images: [
        {
          src:
            "http://www.stickpng.com/assets/images/584fcc806a5ae41a83ddee8c.png",
          width: 55,
          height: 55
        },
        {
          src: "http://pngimg.com/uploads/donut/donut_PNG92.png",
          width: 55,
          height: 55
        }
      ]
    },
    size: {
      value: 20
    },
    line_linked: {
      enable: false,
      distance: 0
    }
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      calories: 0,
      route: "firstPage"
    };
  }

  onEat = e => {
    e.containerElem.style.visibility = "hidden";
    let counter = this.state.counter + 1;
    let calorieTaken = this.state.calories + 452.2;
    this.setState({
      counter: counter,
      calories: calorieTaken
    });
    audio.play();
  };

  fillBox = e => {
    this.refs.donut.containerElem.style.visibility = "visible";
    this.refs.donut1.containerElem.style.visibility = "visible";
    this.refs.donut2.containerElem.style.visibility = "visible";
    this.refs.donut3.containerElem.style.visibility = "visible";
    this.refs.donut4.containerElem.style.visibility = "visible";
    this.refs.donut5.containerElem.style.visibility = "visible";
  };

  onRouteChange = () => {
    const newRoute = "signedIn";
    this.setState({ route: newRoute });
  };

  render() {
    return (
      <div className="App flex flex-column flex-wrap mh2">
        {this.state.route === "firstPage" ? (
          <div>
            <Particles className="particles" params={particlesOptions} />
            <FirstPage onRouteChange={this.onRouteChange} />
          </div>
        ) : (
          <div>
            <h1 className="h1 first-heading">Нахрани Габи!</h1>
            <h2 className="tc h3">
              Донъти, които Габи е изяла: {this.state.counter}
            </h2>
            <h2 className="tc h3">
              Калории: {Math.round(this.state.calories * 100) / 100} kcal
            </h2>
            <div className="container12 flex justify-center justify-between">
              <DropTarget targetKey="foo" onHit={this.onEat}>
                <Gabi />
              </DropTarget>

              <div className="donutBox mv5">
                <div className="donuts">
                  <DragDropContainer ref="donut" targetKey="foo">
                    <Donut visibility={this.state.visibility} donut={donut1} />
                  </DragDropContainer>
                  <DragDropContainer ref="donut1" targetKey="foo">
                    <Donut visibility={this.state.visibility} donut={donut2} />
                  </DragDropContainer>
                  <DragDropContainer ref="donut2" targetKey="foo">
                    <Donut visibility={this.state.visibility} donut={donut1} />
                  </DragDropContainer>
                  <br />
                  <DragDropContainer ref="donut3" targetKey="foo">
                    <Donut visibility={this.state.visibility} donut={donut2} />
                  </DragDropContainer>
                  <DragDropContainer ref="donut4" targetKey="foo">
                    <Donut visibility={this.state.visibility} donut={donut1} />
                  </DragDropContainer>
                  <DragDropContainer ref="donut5" targetKey="foo">
                    <Donut visibility={this.state.visibility} donut={donut2} />
                  </DragDropContainer>
                </div>
                <button className="btn btn-dark" onClick={this.fillBox}>
                  Напълни кутията с донъти
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;

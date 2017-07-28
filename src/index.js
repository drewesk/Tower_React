import React, { Component } from "react";
import { render } from "react-dom";

import { Navbar } from "./components/navbar";
import { Menu } from "./components/menu";
import { Location } from "./components/location";

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }
  render(){
    return(
      <div className="app-container">
        <h1>Hello</h1>
        <Navbar />
        <Location />
        <Menu />
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('appRoot'));

import React, { Component } from "react";
import { render } from "react-dom";
// import { axios } from 'axios';

import { getItems } from './assets/js/request';//test

import { Navbar } from "./components/navbar";
import { Menu } from "./components/menu";
import { Location } from "./components/location";

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    getItems().then((result) => {
      this.setState({
        items: result.data
      });
      console.log(this.state.items);
    });
  }

  render(){
    return (
      <div className="app-container">

        <Navbar />
        <Location />
        <Menu menuItems={ this.state.items }/>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('appRoot'));

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
      items: [],
      menuMounted: true,
      locationMounted: false,
      page: 'Location'
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

  onMountComponents(){

    if(this.state.menuMounted) {

      this.setState({
        menuMounted: false,
        locationMounted: true,
        page: 'Menu'
      });

    } else {

      this.setState({
        menuMounted: true,
        locationMounted: false,
        page: 'Location'
      });
    }
  }

  render(){
    let menuItemsMounted = '';

    if(this.state.menuMounted) {
      menuItemsMounted = (
        <Menu menuItems={ this.state.items }/>
      );
    }

    let locationMounted = '';

    if(this.state.locationMounted) {
      locationMounted = (
        <Location />
      );
    }

    return (
      <div className="app-container">
        <Navbar />
        <div className="center-content">
          <button className="btn btn-primary btn-lg"
                  onClick={ this.onMountComponents.bind(this) }>{ this.state.page }</button>
        </div>
        { menuItemsMounted }
        { locationMounted }
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('appRoot'));

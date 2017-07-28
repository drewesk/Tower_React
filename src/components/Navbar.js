import React, { Component } from 'react';

export class Navbar extends Component {
  constructor(props) {
    super();

    this.state = {

    }
  }

  render() {
    return(
      <div className="navbar-container">
       <nav id="nav">
         <h1 id='title'>The Tower Dive Bar</h1>
       </nav>
      </div>
    );
  }
}

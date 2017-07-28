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
       <nav className="" id="nav">
         <h1 className="position-absolute" id='title'>The Tower Dive Bar</h1>
         <div className="saramon position-relative">
           <img src="./assets/images/sauron.png" alt="" height="300px" width="300px"/>
         </div>
       </nav>
      </div>
    );
  }
}

import React, { Component } from 'react';

export class Location extends Component {
  constructor(props) {
    super();

    this.state = {

    }
  }

  render() {
    return(
      <div className="location-container container">
        <section className='row'>
          <div id='location-image' className='col-6'>
            <img id="mordor" src="../assets/images/MordorMap.jpg"></img>
          </div>
          <div id="location-description" className='col-6'>
            <p>The Tower Dive Bar is conveniently located in central Mordor. Follow the eye of Sauron and find us next to the fire pit.</p>
          </div>
        </section>
      </div>
    );
  }
}

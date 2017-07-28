import React, { Component } from 'react';
import Moment from 'react-moment';

export class Menu extends Component {
  constructor(props) {
    super();

    this.state = {
      dateTimestamp: Date.now
    }
  }

  render() {
    return(
      <div className="menu-container flex">
        <div className="populate-items">
          <div className="card-group">
              { this.props.menuItems.map((item, i) => {
                return (
                  <div key={i} className="populate-items-container container menu-item-width">
                    <div className="card add-color center-content">
                      <div className="opacity-reverse">
                      <img className="card-img-top" src={ item.url_image } alt={ item.item_name } height="200" width="200px"/>
                      <div className="card-block">
                        <h4 className="card-title">{ item.item_name } | ${ item.item_price }</h4>
                        <p className="card-text">{ item.item_description }</p>
                      </div>
                      <div className="card-footer">
                        <span><Moment fromNow>{ this.state.dateTimestamp }</Moment></span>
                      </div>
                    </div>
                  </div>
                </div>
                  );
              }) }
            </div>
          </div>
      </div>
    );
  }
}

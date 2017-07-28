import React, { Component } from 'react';

export class Menu extends Component {
  constructor(props) {
    super();

    this.state = {

    }
  }

  render() {
    return(
      <div className="menu-container">
        <div className="populate-items">
          <div className="card-group">
              { this.props.menuItems.map((item, i) => {
                return (
                  <div className="populate-items-container">
                    <div className="card">
                      <img className="card-img-top" src={ item.url_image } alt={ item.item_name } height="200" width="200px"/>
                      <div className="card-block">
                        <h4 className="card-title">{ item.item_name } | ${ item.item_price }</h4>
                        <p className="card-text">{ item.item_description }</p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
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

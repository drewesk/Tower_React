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
              { this.props.menuItems.map((item, i) => {
                return (

                  <div key={i} className="card card-width">
                    <img className="card-img-top" src={ item.url_image } alt="{ item.item_description }" height="200px" width="200px"/>
                    <div className="card-block">
                      <h4 className="card-title">{ item.item_name } | ${ item.item_price }</h4>
                      <p className="card-text">{ item.item_description }</p>
                      <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                  </div>

                  );
              }) }
          </div>
      </div>
    );
  }
}

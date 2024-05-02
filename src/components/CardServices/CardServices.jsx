import React from 'react';

import './style.css';

export class CardServices extends React.Component {
  render() {
    return (
      <div className="cardServices">
        <img src={this.props.img} alt="" />
        <p>{this.props.paragraph}</p>
        <button>Fale Conosco</button>
      </div>
    );
  }
}

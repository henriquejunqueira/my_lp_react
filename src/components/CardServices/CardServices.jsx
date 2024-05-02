import React from 'react';

import './style.css';

export class CardServices extends React.Component {
  render() {
    return (
      <div className="cardServices">
        <img src={this.props.img} alt="" />
        <p>{this.props.paragraph}</p>
        <a href="https://api.whatsapp.com/send?phone=+55350000-0000">
          <button>Fale Conosco</button>
        </a>
      </div>
    );
  }
}

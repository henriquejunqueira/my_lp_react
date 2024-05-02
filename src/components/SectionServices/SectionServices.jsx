import React from 'react';

import './style.css';

import { CardServices } from '../CardServices/CardServices';

import imageDevApp from '../../assets/img/desenvolvimento-de-aplicativos.png';
import imageDesign from '../../assets/img/designer-grafico.png';
import imageDevWeb from '../../assets/img/desenvolvimento-web.png';

export class SectionServices extends React.Component {
  render() {
    return (
      <div className="containerServices">
        <div className="containerServicesTitle">
          <h2 id="services">Serviços</h2>
        </div>
        <div className="containerCardsServices">
          <CardServices
            img={imageDevApp}
            paragraph="Donec varius nisl eu eros porttitor accumsan."
          />
          <CardServices
            img={imageDesign}
            paragraph="Donec varius nisl eu eros porttitor accumsan."
          />
          <CardServices
            img={imageDevWeb}
            paragraph="Donec varius nisl eu eros porttitor accumsan."
          />
        </div>
      </div>
    );
  }
}

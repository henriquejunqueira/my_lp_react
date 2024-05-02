import React from 'react';
import './style.css';

// import bgImgSlogan from '../../assets/img/capa.jpg';

export class SectionSlogan extends React.Component {
  render() {
    return (
      <section className="sectionSlogan">
        <div></div>
        <div id="sloganInfos">
          <h4>Empresa Lorem Ipsum</h4>
          <h1>Lorem ipsum dolor</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <a href="https://api.whatsapp.com/send?phone=+55350000-0000">
            <button>Fale Conosco</button>
          </a>
        </div>
        <div></div>
      </section>
    );
  }
}

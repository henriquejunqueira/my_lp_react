import React from 'react';

import './style.css';

import logoFooter from '../../assets/img/logo.png';
import imgFacebook from '../../assets/img/facebook.png';
import imgInstagram from '../../assets/img/instagram.png';
import imgLinkedin from '../../assets/img/linkedin.png';
import imgTwitter from '../../assets/img/twitter.png';

export class Footer extends React.Component {
  render() {
    return (
      <div id="contact" className="containerFooter">
        <div id="containerContact">
          <a href="/">
            <img id="imgLogoFooter" src={logoFooter} alt="" />
          </a>
          <div className="containerSocialNetworks">
            <p>Redes Sociais</p>
            <div className="socialNetworks">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={imgFacebook} alt="facebook" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={imgInstagram} alt="instagram" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={imgLinkedin} alt="linkedin" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <img src={imgTwitter} alt="twitter" />
              </a>
            </div>
          </div>
        </div>
        <div id="copy">
          <p>
            Desenvolvido por Henrique Junqueira © 2024 - todos os direitos
            reservados
          </p>
        </div>
      </div>
    );
  }
}

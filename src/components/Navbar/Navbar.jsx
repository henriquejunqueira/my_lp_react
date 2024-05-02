import React from 'react';
import logoImage from '../../assets/img/logo.png';
import './style.css';

export class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav id="navbar">
          <div className="nav-brand">
            <a href="/">
              <img src={logoImage} alt="" />
            </a>
          </div>

          <ul className="nav-list">
            <li>
              <a href="#services">Serviços</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

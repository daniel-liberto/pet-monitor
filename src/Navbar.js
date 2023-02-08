import React from 'react';
import './Navbar.css';
import logoPetMonitor from './img/svg/logo-petmonitor.svg';

const Navbar = () => {
  return (
    <div className="bg-navbar">
      <div className="container-navbar">
        <div className="logo">
          <a href="/">
            <img src={logoPetMonitor} alt="Logomarca da empresa Pet Monitor" />
          </a>
        </div>
        <ul className="navbar-menu">
          <li>
            <a href="/">Info</a>
          </li>
          <li>
            <a href="/">Monitoramento</a>
          </li>
          <li>
            <a href="/">Sobre</a>
          </li>
          <li>
            <a href="/">Contato</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

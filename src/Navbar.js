import React from 'react';
import './Navbar.css';
import logoPetMonitor from './img/svg/logo-petmonitor.svg';
import { NavLink } from 'react-router-dom';

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
            <NavLink to="info">Info</NavLink>
          </li>
          <li>
            <NavLink to="monitoramento">Monitoramento</NavLink>
          </li>
          <li>
            <NavLink to="sobre">Sobre</NavLink>
          </li>
          <li>
            <NavLink to="contato">Contato</NavLink>
          </li>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

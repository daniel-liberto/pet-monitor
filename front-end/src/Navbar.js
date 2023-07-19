import React from 'react';
import './Navbar.css';
import './mobile/NavbarMobile.css';
import logoPetMonitor from './img/svg/logo-petmonitor.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = React.useState(false);
  const ToggleMode = () => {
    setActive(!active);
  };

  return (
    <div className="bg-navbar">
      <div className="container-navbar">
        <div className="logo">
          <a href="/pet-monitor">
            <img src={logoPetMonitor} alt="Logomarca da empresa Pet Monitor" />
          </a>
        </div>

        <div className="hamburguer-container">
          <div
            className={active ? 'icon iconActive' : 'icon'}
            onClick={ToggleMode}
          >
            <div className="hamburguer hambuguerIcon"></div>
          </div>
          <ul
            className={
              active
                ? 'menu navbar-menu menuOpen'
                : 'menu navbar-menu menuClose'
            }
          >
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
    </div>
  );
};

export default Navbar;

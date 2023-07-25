import React from 'react';
import './Navbar.css';
import './mobile/NavbarMobile.css';
import logoPetMonitor from './img/svg/logo-petmonitor.svg';
import { NavLink } from 'react-router-dom';
import { UserContext } from './UserContext';
import Btn from './global/Btn';
import BtnForm from './global/BtnForm';

const Navbar = () => {
  const [active, setActive] = React.useState(false);
  const { data, userLogout } = React.useContext(UserContext);

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
              <NavLink to="pet-monitor/info">Info</NavLink>
            </li>
            <li>
              <NavLink to="pet-monitor/monitoramento">Monitoramento</NavLink>
            </li>
            <li>
              <NavLink to="pet-monitor/sobre">Sobre</NavLink>
            </li>
            <li>
              <NavLink to="pet-monitor/contato">Contato</NavLink>
            </li>

            {data ? (
              <li>
                <NavLink to="pet-monitor/account" className="btnUser">
                  <BtnForm
                    onClick={userLogout}
                    fontSize="16px"
                    margin="0 0 0 16px"
                    padding="8px 16px"
                  >
                    {data.nome}
                  </BtnForm>
                  {/* <Btn
                    
                  /> */}
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink to="pet-monitor/login">Login</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

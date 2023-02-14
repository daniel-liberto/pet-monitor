import React from 'react';
import HeaderTitle from './global/HeaderTitle';
import './Footer.css';
import outlook from './img/svg/outlook.svg';
import linkedin from './img/svg/linkedin.svg';
import whatsapp from './img/svg/whatsapp.svg';

const Footer = () => {
  return (
    <footer className="bg-footer">
      <div className="container-footer">
        <div className="grid-footer">
          <div>
            <HeaderTitle
              text="Nossa História"
              hx="h3"
              fontSize="30"
              padding="40px 0"
              color="#107910"
              content="'__'"
            />
            <div className="informativo-footer">
              <p>Desde o começo buscamos:</p>
              <ul>
                <li>Gerar segurança aos pets</li>
                <li>Melhorar nossa tecnologia</li>
                <li>Oferecer excelente qualidade</li>
                <li>Preço acessível a todos</li>
              </ul>
            </div>
          </div>
          <div>
            <HeaderTitle
              text="Contato"
              hx="h3"
              fontSize="30"
              padding="40px 0"
              color="#107910"
              content="'__'"
            />
            <div className="informativo-footer">
              <p>Informações de contato:</p>
              <ul>
                <li>+55 (18) 3421-2791</li>
                <li>suporte@petmonitor.com</li>
                <li>Rua fictícia - Sâo Paulo</li>
              </ul>
            </div>
          </div>
          <div>
            <HeaderTitle
              text="Redes Sociais"
              hx="h3"
              fontSize="30"
              padding="40px 0"
              color="#107910"
              content="'__'"
            />
            <div className="informativo-footer">
              <p>Nossas redes sociais:</p>
              <div className="redes-sociais">
                <a href="/">
                  <img src={outlook} alt="" />
                </a>
                <a href="/">
                  <img src={linkedin} alt="" />
                </a>
                <a href="/">
                  <img src={whatsapp} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        <p>
          PetMonitor 2023 Daniel Liberto de Almeida - Alguns Direitos
          Reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

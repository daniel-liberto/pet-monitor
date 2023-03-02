import React from 'react';
import Btn from './global/Btn';
import HeaderTitle from './global/HeaderTitle';
import monitoraPhone from './img/fotos/monitoramento-phone.png';
import sombraPhone from './img/fotos/sombra-phone.png';
import googleplay from './img/fotos/googleplay.png';
import appstore from './img/fotos/appstore.png';
import './Monitoramento.css';
import './mobile/MonitoramentoMobile.css';

const Monitoramento = () => {
  return (
    <section className="bg-monitoramento">
      <div className="container-monitoramento">
        <HeaderTitle
          text="Monitoramento em Tempo Real"
          fontSize="60"
          textAlign="center"
          hx="h1"
          padding="60px 0 40px 0"
          color="#f4f4f4"
          content="'__'"
        />
        <div className="grid-monitoramento">
          <div className="subgrid-monitoramento">
            <p className="big-text-monitoramento">
              Tenha seu pet em <span className="enfase-quote">segurança</span>{' '}
              seja aonde ele estiver, com{' '}
              <span className="enfase-quote">
                total acesso ao aplicativo via web
              </span>{' '}
              em qualquer dispositivo móvel para{' '}
              <span className="enfase-quote">Android</span> e{' '}
              <span className="enfase-quote">iOS</span>.
            </p>
            <p className="medium-text-monitoramento">
              Também está disponível em plataformas em desktop como{' '}
              <span className="enfase-quote">Windows</span>,{' '}
              <span className="enfase-quote">Mac</span> e{' '}
              <span className="enfase-quote">Linux</span>.
            </p>
            <div className="call-action-monitoramento">
              <p className="text-call-monitoramento">
                Veja nosso aplicativo online clicando no botão abaixo
              </p>
              <Btn
                text="Acesse agora"
                padding="10px 16px"
                margin="20px 0"
                fontSize="18px"
              />
            </div>
          </div>
          <div className="monitoramento-app">
            <img className="phone-monitoramento" src={monitoraPhone} alt="" />
            <img className="sombra-monitoramento" src={sombraPhone} alt="" />
            <a href="/">
              <img className="apps-monitoramento" src={googleplay} alt="" />
            </a>
            <a href="/">
              <img className="apps-monitoramento" src={appstore} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monitoramento;

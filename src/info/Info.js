import React from 'react';
import Banner from '../global/Banner';
import './Info.css';
import bgInfo from '../img/banners/bg-info.jpg';
import HeaderTitle from '../global/HeaderTitle';
import animalCampo from '../img/info-page/bg-campo.png';
import animalDomestico from '../img/info-page/bg-domestico.png';
import planoDomestico from '../img/info-page/plano-domestico.png';
import planoDomesticoFigure from '../img/info-page/plano-domestico-figure.svg';
import Btn from '../global/Btn';

const Info = () => {
  return (
    <>
      <div>
        <Banner
          image={bgInfo}
          hx="h1"
          fontSize="60"
          color="#ffffff"
          content=""
          text="Informações"
        />
      </div>
      <section className="container-rastreio">
        <div>
          <HeaderTitle
            hx="h1"
            text="Rastreamento Flexível"
            fontSize="60"
            color="#107910"
            content="'__'"
            margin="60px auto"
            textAlign="center"
          />
        </div>
        <div className="grid-rastreio">
          <p>
            O rastreio serve para todos os tipos de{' '}
            <span className="enfase">animais terrestres</span> e{' '}
            <span className="enfase">pequenas aves</span>, sejam eles animais
            domésticos como cães e gatos ou do campo como cavalos e gados.
          </p>
          <div className="info-img info-campo">
            <img src={animalCampo} alt="" />
          </div>
          <div className="info-img info-domestico">
            <img src={animalDomestico} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div>
          <HeaderTitle
            hx="h1"
            text="Animais Domésticos"
            fontSize="60"
            color="#107910"
            content="'__'"
            margin="60px auto"
            textAlign="center"
          />
          <div className="info-grid-introplano">
            <img src={planoDomestico} alt="" />
            <img src={planoDomesticoFigure} alt="" />
          </div>
        </div>
        <div className="info-plano-intro">
          <HeaderTitle
            hx="h2"
            text="Tabela de Preços"
            fontSize="46"
            color="#107910"
            content="'__'"
            margin="60px auto 30px auto"
            textAlign="center"
          />
          <p>
            Trabalhamos com preços mensais e acessíveis para animais que sejam
            considerados domésticos, por favor consulte a tabela abaixo.
          </p>
        </div>
        <div className="info-plano-bg">
          <div className="info-plano-grid">
            <div className="info-plano-standard info-plano-subgrid">
              <div>
                <HeaderTitle
                  hx="h3"
                  text="Plano Standard"
                  fontSize="30"
                  color="#107910"
                  content="'__'"
                  margin="0px auto"
                  textAlign="center"
                />
              </div>
              <div>
                <h4>Vantagens</h4>
                <ul>
                  <li>Longo alcance</li>
                  <li>Flexibilidade</li>
                  <li>Tempo Real</li>
                  <li>Segurança</li>
                  <li>Suporte</li>
                </ul>
              </div>
              <div>
                <p>
                  <sup>R$</sup>39.99
                </p>
                <Btn
                  text="Assine agora"
                  padding="10px 20px"
                  fontSize="18px"
                  url="/"
                />
              </div>
            </div>
            <div className="info-plano-premium">
              <div>
                <HeaderTitle
                  hx="h3"
                  text="Plano Premium"
                  fontSize="30"
                  color="#107910"
                  content="'__'"
                  margin="0px auto"
                  textAlign="center"
                />
              </div>
              <div>
                <h4>Vantagens</h4>
                <ul>
                  <li>Longo alcance</li>
                  <li>Flexibilidade</li>
                  <li>Tempo Real</li>
                  <li>Segurança</li>
                  <li>Suporte</li>
                </ul>
              </div>
              <div>
                <sup>R$</sup>
                <p>39.99</p>
                <Btn
                  text="Assine agora"
                  padding="10px 20px"
                  fontSize="18px"
                  url="/"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;

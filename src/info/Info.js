import React from 'react';
import Banner from '../global/Banner';
import './Info.css';
import './InfoMobile.css';
import bgInfo from '../img/banners/bg-info.jpg';
import HeaderTitle from '../global/HeaderTitle';
import animalCampo from '../img/info-page/bg-campo.png';
import animalDomestico from '../img/info-page/bg-domestico.png';
import planoDomestico from '../img/info-page/plano-domestico.png';
import planoDomesticoFigure from '../img/info-page/plano-domestico-figure.svg';
import planoDoCampo from '../img/info-page/plano-campo.png';
import planoDoCampoFigure from '../img/info-page/plano-campo-figure.svg';
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
            <a href="#animalcampo">
              <img src={animalCampo} alt="" />
            </a>
          </div>
          <div className="info-img info-domestico">
            <a href="#animaldomestico">
              <img src={animalDomestico} alt="" />
            </a>
          </div>
        </div>
      </section>
      <section id="animaldomestico">
        <div className="info-intro-bg">
          <HeaderTitle
            hx="h1"
            text="Animais Domésticos"
            fontSize="60"
            color="#ffffff"
            content="'__'"
            margin="0px auto 40px auto"
            textAlign="center"
          />
          <div className="info-grid-introplano">
            <img src={planoDomestico} alt="" />
            <img src={planoDomesticoFigure} alt="" />
          </div>
        </div>
        <div>
          <p className="info-introplano-text">
            A <span className="enfase">melhor decisão</span> que você tem em
            relação ao seu{' '}
            <span className="enfase">mais querido e fiél companheiro!</span>
            <br></br> Por favor consulte o valor dos planos na tabela de preços
            abaixo.
          </p>
        </div>
        <div className="info-plano-intro">
          <HeaderTitle
            hx="h2"
            text="Tabela de Preços"
            fontSize="46"
            color="#107910"
            content="''"
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
                  content="''"
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
              <div className="info-internalgrid">
                <p>
                  <sup>R$</sup>39.99
                </p>
                <Btn
                  text="Assine agora"
                  padding="10px 20px"
                  fontSize="18px"
                  url="/contato"
                />
              </div>
            </div>
            <div className="info-plano-premium info-plano-subgrid">
              <div>
                <HeaderTitle
                  hx="h3"
                  text="Plano Premium"
                  fontSize="30"
                  color="#ffffff"
                  content="''"
                  margin="0px auto"
                  textAlign="center"
                />
              </div>
              <div>
                <h4>Vantagens</h4>
                <ul>
                  <li>Alcance Global</li>
                  <li>Flexibilidade</li>
                  <li>Tempo Real</li>
                  <li>Segurança Aprimorada</li>
                  <li>Suporte Premium</li>
                </ul>
              </div>
              <div className="info-internalgrid">
                <p>
                  <sup>R$</sup>79.99
                </p>
                <Btn
                  text="Assine agora"
                  padding="10px 20px"
                  fontSize="18px"
                  url="/contato"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="info-pre-porque">
            Veja abaixo mais sobre o porque utilizar rastreio em animais
            domésticos.
          </p>
          <div className="info-porque-bg">
            <div className="info-porque">
              <HeaderTitle
                hx="h3"
                text="Porque usar rastreamento em animais domésticos?"
                fontSize="30"
                color="#ffffff"
                content="'__'"
                margin="0px auto 20px auto"
                padding="60px 0 0 0"
                textAlign="center"
              />
            </div>
            <p className="info-hide">
              O rastreamento de animais domésticos surgiu tanto pela{' '}
              <span className="enfase">questão das fugas</span>, quanto pelos{' '}
              <span className="enfase">sequestros à animais</span>. O risco com
              o passar dos anos vem aumentando perigosamente e essa é uma forma
              de <span className="enfase">nós ajudarmos</span> a vocês a
              protegerem aos{' '}
              <span className="enfase">seus fiéis e queridos pequeninos</span>.
            </p>
          </div>
        </div>
      </section>
      <section id="animalcampo">
        <div className="info-intro-bg colorcampo">
          <HeaderTitle
            hx="h1"
            text="Animais do Campo"
            fontSize="60"
            color="#ffffff"
            content="'__'"
            margin="0px auto 40px auto"
            textAlign="center"
          />
          <div className="info-grid-introplano">
            <img src={planoDoCampo} alt="" />
            <img src={planoDoCampoFigure} alt="" />
          </div>
        </div>
        <div>
          <p className="info-introplano-text">
            Para você que precisa de{' '}
            <span className="enfase-campo">controle e segurança</span> de seus
            negócios rurais{' '}
            <span className="enfase-campo">na palma da sua mão!</span>
            <br></br> Escolha um de nossos planos abaixo na tabela de preços!
          </p>
        </div>
        <div className="info-plano-intro">
          <HeaderTitle
            hx="h2"
            text="Tabela de Preços"
            fontSize="46"
            color="rgba(80, 40, 80, 1)"
            content="''"
            margin="60px auto 30px auto"
            textAlign="center"
          />
          <p>
            Trabalhamos com preços mensais e acessíveis para animais que sejam
            considerados rurais, por favor consulte a tabela abaixo.
          </p>
        </div>
        <div className="info-plano-bg colorcampo">
          <div className="info-plano-grid">
            <div className="info-plano-standard info-plano-subgrid camposection">
              <div>
                <HeaderTitle
                  hx="h3"
                  text="Plano Standard"
                  fontSize="30"
                  color="rgba(80, 40, 80, 1)"
                  content="''"
                  margin="0px auto"
                  textAlign="center"
                />
              </div>
              <div>
                <h4>Vantagens</h4>
                <ul>
                  <li>Tecnologia RFID</li>
                  <li>Excelente Durabilidade</li>
                  <li>Tempo Real</li>
                  <li>Segurança</li>
                  <li>Suporte</li>
                </ul>
              </div>
              <div className="info-internalgrid">
                <p>
                  <sup>R$</sup>259.99
                </p>
                <Btn
                  text="Assine agora"
                  padding="10px 20px"
                  fontSize="18px"
                  backgroundColor="#50321E"
                  url="/contato"
                />
              </div>
            </div>
            <div className="info-plano-premium info-plano-subgrid camposection">
              <div>
                <HeaderTitle
                  hx="h3"
                  text="Plano Premium"
                  fontSize="30"
                  color="#ffffff"
                  content="''"
                  margin="0px auto"
                  textAlign="center"
                />
              </div>
              <div>
                <h4>Vantagens</h4>
                <ul>
                  <li>Tecnologia GPS</li>
                  <li>Excelente Durabilidade</li>
                  <li>Tempo Real</li>
                  <li>Segurança Aprimorada</li>
                  <li>Suporte Premium</li>
                </ul>
              </div>
              <div className="info-internalgrid">
                <p>
                  <sup>R$</sup>359.99
                </p>
                <Btn
                  text="Assine agora"
                  padding="10px 20px"
                  fontSize="18px"
                  backgroundColor="#50321E"
                  url="/contato"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="info-pre-porque">
            Veja abaixo mais sobre o porque utilizar rastreio em animais rurais.
          </p>
          <div className="info-porque-bg camposection">
            <div className="info-porque">
              <HeaderTitle
                hx="h3"
                text="Porque usar rastreamento em animais do campo?"
                fontSize="30"
                color="#ffffff"
                content="'__'"
                margin="0px auto 20px auto"
                padding="60px 0 0 0"
                textAlign="center"
              />
            </div>
            <p className="info-hide">
              O rastreamento de rebanhos veio para{' '}
              <span className="enfase-campo">
                facilitar o controle e a mensuração de dados
              </span>{' '}
              sobre os animais, porém percebemos como o uso da tecnologia
              poderia auxiliar para uma{' '}
              <span className="enfase-campo">melhora nessa mensuração</span>.
              Esse serviço proporciona{' '}
              <span className="enfase-campo">diversas outras facilidades</span>{' '}
              para os responsáveis pela gestão dos animais.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;

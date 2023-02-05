import React from 'react';
import Btn from './Btn';
import HeaderTitle from './HeaderTitle';
import landpagegato from './img/fotos/landpage-cat.png';
import './LandPage.css';

const LandPage = () => {
  return (
    <section className="bg-landpage">
      <div className="container-landpage">
        <HeaderTitle
          text="Monitoramento de Animais"
          hx="h1"
          textAlign="center"
          fontSize="60px"
        />
        <p className="pseudoquote-landpage">
          Não importa a raça, tamanho ou idade, todos os animais merecem{' '}
          <span className="enfase-quote">amor</span> e{' '}
          <span className="enfase-quote">cuidados</span> que só{' '}
          <span className="enfase-quote">nós</span> podemos oferecer.
        </p>
        <div className="landpage-gato">
          <img src={landpagegato} alt="" />
          <div>
            <p>Veja nossas diversas opções de planos para o seu objetivo!</p>
            <Btn
              text="Saiba Mais"
              padding="10px 20px"
              fontSize="18px"
              url="/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandPage;

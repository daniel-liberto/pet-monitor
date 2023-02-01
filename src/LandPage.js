import React from 'react';
import Btn from './Btn';
import landpagegato from './img/fotos/landpage-cat.png';
import './LandPage.css';

const LandPage = () => {
  return (
    <div className="bg-landpage">
      <div className="container-landpage">
        <h1 className="h1-title title-landpage">Monitoramento de Animais</h1>
        <p className="pseudoquote-landpage">
          Não importa a raça, tamanho ou idade, todos os animais merecem{' '}
          <span className="enfase">amor</span> e{' '}
          <span className="enfase">cuidados</span> que só{' '}
          <span className="enfase">nós</span> podemos oferecer.
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
    </div>
  );
};

export default LandPage;

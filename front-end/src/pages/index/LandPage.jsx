import React from 'react';
import Btn from '../../global/Btn';
import HeaderTitle from '../../global/HeaderTitle';
import landpagegato from '../../img/fotos/landpage-cat.png';
import './LandPage.css';
import '../../mobile/LandPageMobile.css';
import Animate from '../../script/simple-anime.js';
import '../../script/simple-anime.css';
import '../../animation/LandPagePaw.css';

const LandPage = () => {
  // const location = useLocation();
  React.useEffect(() => {
    new Animate();
  }, []);

  return (
    <section className="bg-landpage">
      <div className="container-landpage">
        <div className="fadeInDown" data-anime="scroll" data-anime-time="300">
          <HeaderTitle
            text="Monitoramento de Animais"
            hx="h1"
            textAlign="center"
            fontSize="60"
            margin="0 auto"
            color="#107910"
            content="'__'"
          />
        </div>
        <p
          className="pseudoquote-landpage"
          data-anime="scroll"
          data-anime-time="600"
        >
          Não importa a raça, tamanho ou idade, todos os animais merecem{' '}
          <span className="enfase-quote">amor</span> e{' '}
          <span className="enfase-quote">cuidados</span> que só{' '}
          <span className="enfase-quote">nós</span> podemos oferecer.
        </p>
        <div className="landpage-gato">
          <img
            className="fadeInUp"
            data-anime="scroll"
            data-anime-time="450"
            src={landpagegato}
            alt=""
          />
          <div
            className="fadeInRight landpage-call"
            data-anime="scroll"
            data-anime-time="900"
          >
            <p>Clique para ver as opções!</p>
            <Btn padding="10px 20px" fontSize="18px" url="/info">
              Saiba Mais
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandPage;

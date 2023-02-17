import React from 'react';
import HeaderTitle from './global/HeaderTitle';
import './Avaliacao.css';
import cliente1 from './img/fotos/cliente1.png';
import cliente2 from './img/fotos/cliente2.png';
import cliente3 from './img/fotos/cliente3.png';
import Btn from './global/Btn';

const Avaliacao = () => {
  return (
    <section>
      <HeaderTitle
        text="Avaliações de Clientes"
        fontSize="60"
        hx="h1"
        textAlign="center"
        margin="60px auto 40px auto"
        color="#107910"
        content="'__'"
      />
      <p className="intro-avaliacao">
        Abaixo segue algumas avaliações de nossos queridos clientes e seus fiéis
        companheiros
      </p>
      <div className="grid-avaliacao">
        <div className="bg-avaliacao">
          <div className="subgrid-avaliacao">
            {/* Primeiro cliente */}
            <img src={cliente1} alt="" />
            <p>
              Para mim e o <span className="enfase-quote">Teco</span> que temos{' '}
              <span className="enfase-quote">espíritos aventureiros</span>, o
              rastreio nos serviu muito bem, agora faço trilhas com ele com{' '}
              <span className="enfase-quote">muito mais tranquilidade!</span>
            </p>
            <h3 className="autor-avaliacao">Valéria e Teco</h3>
          </div>
        </div>
        <div className="bg-avaliacao lado-direito">
          <div className="subgrid-avaliacao lado-direito">
            {/* Segundo cliente */}
            <img src={cliente2} alt="" />
            <p>
              O <span className="enfase-quote">Robert</span> mora na casa dos
              meus avós <span className="enfase-quote">em uma fazenda</span>,
              ele é do tipo bem arisco e muito brincalhão!<br></br>
              <br></br>{' '}
              <span className="enfase-quote">Me sinto mais tranquila</span>{' '}
              sabendo que ele está bem usando o rastreador, mesmo eu estando{' '}
              <span className="enfase-quote">longe da fazenda</span> dos meus
              avós.
            </p>
            <h3 className="autor-avaliacao">Rafaela e Robert</h3>
          </div>
        </div>
        <div className="bg-avaliacao">
          <div className="subgrid-avaliacao">
            {/* Terceiro cliente */}
            <img src={cliente3} alt="" />
            <p>
              A minha <span className="enfase-quote">Aurora</span> é uma herança
              de meu falecido tio,{' '}
              <span className="enfase-quote"> nós todos da família</span> amamos
              e cuidamos dela com{' '}
              <span className="enfase-quote">muito carinho e amor</span>.
            </p>
            <h3 className="autor-avaliacao">Thiago e Aurora</h3>
          </div>
        </div>
        <div className="text-call-avaliacao">
          <p>Confira já os nossos planos para os seus negócios!</p>
          <Btn text="Conferir planos" padding="16px 30px" fontSize="24px" />
        </div>
      </div>
    </section>
  );
};

export default Avaliacao;

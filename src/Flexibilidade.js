import React from 'react';
import HeaderTitle from './HeaderTitle';
import './Flexibilidade.css';
import animalDomestico from './img/fotos/animalDomestico.jpg';
import animalCampo from './img/fotos/animalCampo.jpg';
import Btn from './Btn';

const Flexibilidade = () => {
  return (
    <section>
      <div className="container-flexibilidade">
        <HeaderTitle
          hx="h1"
          text="Flexibilidade Total"
          fontSize="60"
          textAlign="center"
          margin="60px 0 0 0 "
        />
        <p className="intro-flexibilidade">
          Nós da Pet Monitor trabalhamos com todos os tipos de animais,{' '}
          <span className="enfase">
            por que para nós, aquilo que mais importa é a segurança dos seus
            animais
          </span>{' '}
          independente se esteja no campo ou em área urbana.
        </p>
        <div className="grid-flexibilidade">
          <div
            className="plano-desc bg-domestico fadeInRight"
            data-anime="scroll"
          >
            <HeaderTitle
              hx="h2"
              text="Plano Doméstico"
              fontSize="30"
              textAlign="center"
            />
            <p className="quote-flexibilidade">
              Todos sabem que não somos nós que escolhemos nossos animais de
              estimação. E sim,{' '}
              <span className="enfase-quote">eles que nos escolhem</span> com
              seu <span className="enfase-quote">carinho</span> e{' '}
              <span className="enfase-quote">amor verdadeiro</span> que só eles
              possuem.
            </p>
            <p className="text-call-flexibilidade">
              Proteja hoje mesmo seu membro valioso da família!
            </p>
            <Btn text="Conferir planos" padding="0px 12px" />
          </div>
          <div
            className="config-img domestico-img fadeInRight"
            data-anime="scroll"
          >
            <img src={animalDomestico} alt="" />
          </div>
          <div
            className="config-img campo-img fadeInLeft"
            data-anime="scroll"
            data-anime-time="150"
          >
            <img src={animalCampo} alt="" />
          </div>
          <div
            className="plano-desc bg-campo fadeInLeft"
            data-anime="scroll"
            data-anime-time="150"
          >
            <HeaderTitle
              hx="h2"
              text="Plano Rural"
              fontSize="30"
              textAlign="center"
            />
            <p className="quote-flexibilidade">
              Qualquer animal do campo independente de sua função, é muito
              importante pensar em sua{' '}
              <span className="enfase-quote">segurança</span>. Tenha os seus
              negócios <span className="enfase-quote">sob total controle!</span>
            </p>
            <p className="text-call-flexibilidade">
              Confira já os nossos planos para os seus negócios!
            </p>
            <Btn text="Conferir planos" padding="0px 12px" />
          </div>
        </div>
        <div>
          <p className="outros-planos">
            Para demais planos e propostas customizadas para o seu negócio, por
            favor entre em{' '}
            <a className="enfase custom-link" href="/">
              contato
            </a>{' '}
            conosco, que lhe responderemos em até 24 horas úteis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Flexibilidade;

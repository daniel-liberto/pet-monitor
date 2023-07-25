import React from 'react';
import HeaderTitle from '../../global/HeaderTitle';
import './Flexibilidade.css';
import '../../mobile/FlexibilidadeMobile.css';
import animalDomestico from '../../img/fotos/animalDomestico.jpg';
import animalCampo from '../../img/fotos/animalCampo.jpg';
import Btn from '../../global/Btn';

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
          color="#107910"
          content="'__'"
        />
        <p className="intro-flexibilidade">
          Nós da Pet Monitor trabalhamos com todos os tipos de animais,{' '}
          <span className="enfase">
            por que para nós, aquilo que mais importa é a segurança dos seus
            animais
          </span>{' '}
          <span className="skip-mobile">
            independente se esteja no campo ou em área urbana.
          </span>
        </p>
        <div className="grid-flexibilidade">
          <div
            className="plano-desc bg-domestico fadeInUp"
            data-anime="scroll"
            data-anime-time="100"
          >
            <HeaderTitle
              hx="h2"
              text="Plano Doméstico"
              fontSize="42"
              textAlign="center"
              color="#107910"
              content="''"
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
            <Btn padding="10px 12px" margin="0" url="/info">
              Conferir planos
            </Btn>
          </div>
          <div
            className="config-img domestico-img fadeInUp"
            data-anime="scroll"
            data-anime-time="100"
          >
            <img src={animalDomestico} alt="" />
          </div>
          <div
            className="config-img campo-img fadeInUp"
            data-anime="scroll"
            data-anime-time="150"
          >
            <img src={animalCampo} alt="" />
          </div>
          <div
            className="plano-desc bg-campo fadeInUp"
            data-anime="scroll"
            data-anime-time="150"
          >
            <HeaderTitle
              hx="h2"
              text="Plano Rural"
              fontSize="42"
              textAlign="center"
              color="rgba(80, 50, 30, 1)"
              content="''"
            />
            <p className="dec-campo quote-flexibilidade">
              Qualquer animal do campo independente de sua função, é muito
              importante pensar em sua{' '}
              <span className="enfase-campo-quote">segurança</span>. Tenha os
              seus negócios{' '}
              <span className="enfase-campo-quote">sob total controle!</span>
            </p>
            <p className="text-call-flexibilidade">
              Confira já os nossos planos para os seus negócios!
            </p>
            <Btn
              padding="10px 12px"
              margin="0"
              backgroundColor="rgb(80, 50, 30)"
              url="/info"
            >
              Conferir planos
            </Btn>
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

import React from 'react';
import Banner from '../global/Banner';
import HeaderTitle from '../global/HeaderTitle';
import bgSobre from '../img/banners/bg-sobre.jpg';
import './Sobre.css';
import sobrePug from '../img/sobre-page/sobre-pug.jpg';

const Sobre = () => {
  return (
    <>
      <div>
        <Banner
          image={bgSobre}
          hx="h1"
          fontSize="60"
          color="#ffffff"
          content=""
          text="Sobre"
        />
      </div>
      <section className="sobre-container">
        <div>
          <HeaderTitle
            hx="h1"
            text="Sobre a Nossa Empresa"
            fontSize="60"
            color="#107910"
            content="'__'"
            margin="60px auto"
            textAlign="center"
          />
        </div>
        <div className="sobre-texto">
          <p>
            A empresa fictícia <span className="enfase">Pet Monitor</span> foi
            desenvolvida pelo seu criador(Daniel Liberto de Almeida) em{' '}
            <span className="enfase">2019</span> como uma atividade obrigatória
            da <span className="enfase">Universidade Norte do Paraná</span>{' '}
            enquanto eu estava{' '}
            <span className="enfase">cursando a minha graduação</span> em
            Análise e Desenvolvimento de Sistemas.
          </p>
          <p>
            A atividade consistia em{' '}
            <span className="enfase">criar uma página em html</span> para ajudar
            a resolver o problema de João a respeito de seu cãozinho chamado
            Totó que necessitava de um{' '}
            <span className="enfase">
              aplicativo de monitoramento de animais
            </span>{' '}
            para evitar a fuga de seu cão.
          </p>
          <p>
            Atualmente o projeto Pet Monitor teve seu{' '}
            <span className="enfase">remake em 2023</span> onde foi{' '}
            <span className="enfase">totalmente remodelado do zero</span>, desde
            seu design até mesmo em sua estrutura e construção final sendo
            reconstruída utilizando novas tecnologias como o uso de{' '}
            <span className="enfase">JavaScript</span> e{' '}
            <span className="enfase">React</span> como uma base para todo
            projeto e também uma melhor utilização de{' '}
            <span className="enfase">Flexbox</span> e{' '}
            <span className="enfase">Grid layout</span>.
          </p>
          <p>
            O <span className="enfase">modelo original</span> de 2019 era feito
            apenas com <span className="enfase">html</span>,{' '}
            <span className="enfase">css</span> e um pouquinho de{' '}
            <span className="enfase">JavaScript</span>, onde eu tive um prazo
            para ser feito utilizando os meus conhecimentos da época.
          </p>
        </div>
        <div className="sobre-pug">
          <img src={sobrePug} alt="" />
        </div>
      </section>
    </>
  );
};

export default Sobre;

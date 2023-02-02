import React from 'react';
import HeaderTitle from './HeaderTitle';
import './Flexibilidade.css';

const Flexibilidade = () => {
  return (
    <div className="container-flexibilidade">
      <HeaderTitle
        hx="h1"
        text="Flexibilidade Total"
        fontSize="60px"
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
    </div>
  );
};

export default Flexibilidade;

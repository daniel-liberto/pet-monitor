import React from 'react';
import Banner from '../global/Banner';
import HeaderTitle from '../global/HeaderTitle';
import bgContato from '../img/banners/bg-contato.jpg';
import './Contato.css';
import './ContatoMobile.css';
import outlook from '../img/svg/outlook.svg';
import linkedin from '../img/svg/linkedin.svg';
import whatsapp from '../img/svg/whatsapp.svg';
import Btn from '../global/Btn';

const Contato = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [telefone, setTelefone] = React.useState('');

  return (
    <>
      <div>
        <Banner
          image={bgContato}
          hx="h1"
          fontSize="60"
          color="#ffffff"
          content=""
          text="Contato"
        />
      </div>
      <section className="contato-container">
        <div>
          <HeaderTitle
            hx="h1"
            text="Entre em contato conosco"
            fontSize="60"
            color="#107910"
            content="'__'"
            margin="60px auto 80px auto"
            textAlign="center"
          />
          <p>
            Para mais informações a respeito de dúvidas ou preços, preencha o
            formulário abaixo:
          </p>
          <div className="contato-grid">
            <form>
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                name="nome"
                id="nome"
                value={nome}
                onChange={({ target }) => setNome(target.value)}
                placeholder="Digite seu nome..."
              />

              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                placeholder="Digite seu email..."
              />

              <label htmlFor="telefone">Telefone</label>
              <input
                type="text"
                name="telefone"
                id="telefone"
                value={telefone}
                onChange={({ target }) => setTelefone(target.value)}
              />

              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                name="mensagem"
                id="mensagem"
                cols="30"
                rows="10"
                placeholder="Escreva para nós a sua proposta ou sugestões!"
              ></textarea>

              <Btn
                text="Enviar Mensagem"
                fontSize="20px"
                margin="40px auto"
                padding="12px 24px"
                url="/login"
              />
            </form>
            <div>
              <div>
                <HeaderTitle
                  hx="h2"
                  text="Contato"
                  fontSize="30"
                  color="#107910"
                  content="'__'"
                  margin="0px auto 30px auto"
                  textAlign="start"
                />
                <ul className="contato-lista">
                  <li>+55 18 3421-2791</li>
                  <li>suporte@petmonitor.com</li>
                  <li>Rua ficticia - São Paulo</li>
                </ul>
              </div>
              <div>
                <HeaderTitle
                  hx="h2"
                  text="Redes Sociais"
                  fontSize="30"
                  color="#107910"
                  content="'__'"
                  margin="60px auto 30px auto"
                  textAlign="start"
                />
                <ul className="contato-redes">
                  <li>
                    <a href="/">
                      <img src={outlook} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={linkedin} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={whatsapp} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;

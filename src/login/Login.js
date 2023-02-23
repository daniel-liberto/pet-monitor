import React from 'react';
import Btn from '../global/Btn';
import HeaderTitle from '../global/HeaderTitle';
import './Login.css';

const Login = () => {
  const [emailLogin, setEmailLogin] = React.useState('');
  const [passwordLogin, setPasswordLogin] = React.useState('');

  return (
    <>
      <div className="login-bg-content">
        <div className="login-grid">
          <HeaderTitle
            hx="h1"
            text="Login"
            fontSize="60"
            color="#107910"
            content="'__'"
            margin="20px auto 60px auto"
            textAlign="center"
          />
          <p>Conecte-se para ter acesso ao aplicativo web</p>
          <form>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              value={emailLogin}
              onChange={({ target }) => setEmailLogin(target.value)}
            />
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              name="senha"
              id="senha"
              value={passwordLogin}
              onChange={({ target }) => setPasswordLogin(target.value)}
            />
            <Btn
              text="Acessar conta"
              fontSize="20px"
              margin="40px auto"
              padding="12px 24px"
            />
          </form>
          <div className="login-registrar-recuperar">
            <a href="/">Recuperar senha</a>
            <a href="/">Registrar-se</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

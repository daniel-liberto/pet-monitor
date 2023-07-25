import React from 'react';
import Btn from '../../global/Btn';
import HeaderTitle from '../../global/HeaderTitle';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../UserContext';
import './Login.css';
import './LoginMobile.css';
import Input from '../../global/Input';

const Login = () => {
  const emailLogin = useForm();
  const passwordLogin = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (emailLogin.validate() && passwordLogin.validate()) {
      userLogin(emailLogin.value, passwordLogin.value);
    }
  }

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
          <form onSubmit={handleSubmit}>
            <Input label="E-mail" type="email" name="email" {...emailLogin} />
            <Input
              label="Senha"
              type="password"
              name="password"
              {...passwordLogin}
            />
            {loading ? (
              <Btn
                disabled
                text="Carregando..."
                styles={{ opacity: 0.3 }}
                fontSize="20px"
                margin="40px auto"
                padding="12px 24px"
              />
            ) : (
              <Btn
                text="Acessar conta"
                fontSize="20px"
                margin="40px auto"
                padding="12px 24px"
              />
            )}
            {/* <Error error={error} /> */}
          </form>
          <div className="login-registrar-recuperar">
            <a href="/contato">Recuperar senha</a>
            <a href="/contato">Registrar-se</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

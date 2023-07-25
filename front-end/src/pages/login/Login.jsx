import React from 'react';
import Btn from '../../global/Btn';
import HeaderTitle from '../../global/HeaderTitle';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../UserContext';
import './Login.css';
import './LoginMobile.css';
import Input from '../../global/Input';
import Error from '../../global/Error';
import { TOKEN_POST } from '../../api/Api';
import BtnForm from '../../global/BtnForm';

const Login = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
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
            margin="20px auto 30px auto"
            textAlign="center"
          />
          <p>Conecte-se para ter acesso ao aplicativo web</p>
          <form onSubmit={handleSubmit}>
            <Input label="Usuário" type="text" name="username" {...username} />
            <Input
              label="Senha"
              type="password"
              name="password"
              {...password}
            />
            {loading ? (
              <BtnForm
                disabled
                padding="10px 16px"
                margin="30px auto"
                fontSize="18px"
              >
                Carregando...
              </BtnForm>
            ) : (
              <BtnForm padding="10px 16px" margin="30px auto" fontSize="18px">
                Acessar Conta
              </BtnForm>
            )}
            <Error error={error} />
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

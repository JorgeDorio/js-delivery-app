import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';

function Login() {
  const context = useContext(Context);
  return (
    <>

      {/* <img /> */}
      { console.log(context) }
      <main>
        <label htmlFor="email-input">
          <h2>Login</h2>
          <input type="email" id="email-input" data-testid="common_login__input-email" />
        </label>

        <label htmlFor="password-input">
          <h2>Senha</h2>
          <input
            type="password"
            id="password-input"
            data-testid="common_login__input-password"
          />
        </label>
        <button type="submit" data-testid="common_login__button-login">
          LOGIN
        </button>

        <Link to="/register">
          <button type="button" data-testid="common_login__button-register">
            Ainda não tem conta
          </button>
        </Link>

        <p
          data-testid="common_login__element-invalid-email"
        >
          Elemento oculto (Mensagem de erro)
        </p>

      </main>
    </>
  );
}

export default Login;

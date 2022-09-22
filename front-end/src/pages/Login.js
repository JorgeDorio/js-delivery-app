import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validate } from 'email-validator';
import Context from '../context/Context';
import '../css/Login.css';

function Login() {
  const prefix = 'common_login__';

  const navigate = useNavigate();

  const {
    setEmail, email, setPassword, password, ableBtn, setAbleBtn } = useContext(Context);

  const SIX = 6;

  const validateEmail = () => {
    if (validate(email) && password.length >= SIX) {
      setAbleBtn(false);
    } else {
      setAbleBtn(true);
    }
  };

  useEffect(() => {
    navigate('/login');
  }, []);

  useEffect(() => {
    validateEmail();
  }, [ableBtn, email, password]);

  return (
    <>
      {/* <img /> */}
      { console.log(email) }
      { console.log(password) }
      { console.log(ableBtn) }
      <main className="block-main">
        <form>
          <label htmlFor="email-input">
            <h2>Login</h2>
            <input
              type="email"
              id="email-input"
              data-testid={ `${prefix}input-email` }
              onChange={ (event) => setEmail(event.target.value) }
            />
          </label>

          <label htmlFor="password-input">
            <h2>Senha</h2>
            <input
              type="password"
              id="password-input"
              data-testid={ `${prefix}input-password` }
              onChange={ (event) => setPassword(event.target.value) }
            />
          </label>
          <button
            className="btn-green"
            disabled={ ableBtn }
            type="submit"
            data-testid={ `${prefix}button-login` }
          >
            LOGIN
          </button>

          <Link to="/register">
            <button
              className="btn-gray"
              type="button"
              data-testid={ `${prefix}button-register` }
            >
              Ainda não tem conta
            </button>
          </Link>
        </form>

        <p
          data-testid={ `${prefix}element-invalid-email` }
        >
          Elemento oculto (Mensagem de erro)
        </p>

      </main>
    </>
  );
}

export default Login;

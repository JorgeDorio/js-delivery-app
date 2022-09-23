import React, { useContext, useEffect } from 'react';
import { validate } from 'email-validator';
import Context from '../context/Context';
import '../css/Register.css';

function Register() {
  const prefix = 'common_register__';

  const {
    setName,
    name,
    setEmail,
    email,
    setPassword,
    password,
    ableBtn,
    setAbleBtn,
  } = useContext(Context);

  const SIX = 6;
  const TWELVE = 12;

  const validateEmail = () => {
    if (validate(email) && password.length >= SIX && name.length >= TWELVE) {
      setAbleBtn(false);
    } else {
      setAbleBtn(true);
    }
  };

  useEffect(() => {
    validateEmail();
  }, [ableBtn, email, password, name]);

  return (
    <>
      { console.log(name) }
      { console.log(email) }
      { console.log(password) }
      <title>Cadastro</title>
      <main className="register-main">
        <h1>Cadastro</h1>
        <form>

          <label htmlFor="name-input">
            <h2>Nome</h2>
            <input
              placeholder="  Seu nome"
              type="name"
              id="name-input"
              data-testid={ `${prefix}input-name` }
              onChange={ (event) => setName(event.target.value) }
            />
          </label>

          <label htmlFor="email-input">
            <h2>Email</h2>
            <input
              placeholder="  seu-email@site.com.br"
              type="email"
              id="email-input"
              data-testid={ `${prefix}input-email` }
              onChange={ (event) => setEmail(event.target.value) }
            />
          </label>

          <label htmlFor="password-input">
            <h2>Senha</h2>
            <input
              placeholder="  **********"
              type="password"
              id="password-input"
              data-testid={ `${prefix}input-password` }
              onChange={ (event) => setPassword(event.target.value) }
            />
          </label>
          <button
            className="btn-green"
            type="submit"
            data-testid={ `${prefix}button-register` }
            disabled={ ableBtn }
          >
            CADASTRAR
          </button>
        </form>
        <p
          data-testid={ `${prefix}element-invalid-register` }
        >
          Elemento oculto (Mensagem de erro)
        </p>
      </main>
    </>
  );
}

export default Register;

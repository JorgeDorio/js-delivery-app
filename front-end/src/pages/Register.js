import React, { useContext, useEffect } from 'react';
import { validate } from 'email-validator';
import Context from '../context/Context';

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
      <main>

        <label htmlFor="name-input">
          <h2>Nome</h2>
          <input
            type="name"
            id="name-input"
            data-testid={ `${prefix}input-name` }
            onChange={ (event) => setName(event.target.value) }
          />
        </label>

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
      </main>

      <button
        type="submit"
        data-testid={ `${prefix}button-register` }
        disabled={ ableBtn }
      >
        CADASTRAR
      </button>

      <p
        data-testid={ `${prefix}element-invalid-register` }
      >
        Elemento oculto (Mensagem de erro)
      </p>
    </>
  );
}

export default Register;

import React, { useContext, useEffect } from 'react';
import { validate } from 'email-validator';
import createUser from '../services/api';
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
    notFound,
    setNotFound,
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

  const request = async () => {
    const result = await createUser(name, email, password);
    console.log(result);
    if (!result) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
    return result;
  };

  useEffect(() => {
    validateEmail();
  }, [ableBtn, email, password, name, notFound]);

  return (
    <>
      { console.log(ableBtn) }
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
        type="button"
        data-testid={ `${prefix}button-register` }
        disabled={ ableBtn }
        onClick={ request }
      >
        CADASTRAR
      </button>
      { !notFound
        ? <p data-testid={ `${prefix}element-invalid-register` } />
        : <p data-testid={ `${prefix}element-invalid-register` }>{message}</p> }
    </>
  );
}

export default Register;
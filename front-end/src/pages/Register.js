import React from 'react';

function Register() {
  const prefix = 'common_register__';
  return (
    <>
      <title>Cadastro</title>
      <main>

        <label htmlFor="name-input">
          <h2>Nome</h2>
          <input type="name" id="name-input" data-testid={ `${prefix}input-name` } />
        </label>

        <label htmlFor="email-input">
          <h2>Login</h2>
          <input type="email" id="email-input" data-testid={ `${prefix}input-email` } />
        </label>

        <label htmlFor="password-input">
          <h2>Senha</h2>
          <input
            type="password"
            id="password-input"
            data-testid={ `${prefix}input-password` }
          />
        </label>
      </main>

      <button
        type="submit"
        data-testid={ `${prefix}button-register` }
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

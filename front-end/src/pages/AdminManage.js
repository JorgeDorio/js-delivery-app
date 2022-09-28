import React, { useContext, useEffect, useState } from 'react';
import { validate } from 'email-validator';
import Header from '../components/Header';
import Context from '../context/Context';
import '../css/AdminManage.css';
import { admCreateUser } from '../services/api';

function AdminManage() {
  const {
    setName,
    name,
    role,
    setRole,
    ableBtn,
    setAbleBtn,
    notFound,
    setNotFound,
  } = useContext(Context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const message = 'Usuário já cadastrado';

  const validateForm = () => {
    const SIX = 6;
    const TWELVE = 12;
    if (validate(email)
    && password.length >= SIX && name.length >= TWELVE && role.length > 0) {
      setAbleBtn(false);
    } else {
      setAbleBtn(true);
    }
  };

  useEffect(() => {
    validateForm();
  }, [ableBtn, email, password, name, role, notFound]);

  const request = async () => {
    const result = await admCreateUser(name, email, password, role);
    console.log(result);
    if (!result) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
    return result;
  };

  return (
    <>
      {console.log(name)}
      {console.log(email)}
      {console.log(password)}
      {console.log(role)}
      <Header />
      <h1 className="adm-title">Cadastrar novo usuário</h1>
      {!notFound ? (
        <p
          className="error-msg"
          data-testid="admin_manage__element-invalid-register"
        />
      ) : (
        <p
          className="error-msg"
          data-testid="admin_manage__element-invalid-register"
        >
          {message}
        </p>
      )}
      <form className="form-adm">
        <label htmlFor="name-input">
          <p>Nome</p>
          <input
            type="text"
            data-testid="admin_manage__input-name"
            placeholder="Nome e sobrenome"
            id="name-input"
            onChange={ (event) => setName(event.target.value) }
          />
        </label>
        <label htmlFor="email-input">
          <p>Email</p>
          <input
            type="email"
            data-testid="admin_manage__input-email"
            placeholder="seu-email@site.com.br"
            id="email-input"
            onChange={ (event) => setEmail(event.target.value) }
          />
        </label>
        <label htmlFor="password-input">
          <p>Senha</p>
          <input
            type="password"
            data-testid="admin_manage__input-password"
            placeholder="**********"
            id="password-input"
            onChange={ (event) => setPassword(event.target.value) }
          />
        </label>
        <label htmlFor="role-input">
          <p>Tipo</p>
          <select
            data-testid="admin_manage__select-role"
            id="role-input"
            onChange={ (event) => setRole(event.target.value) }
          >
            <option value="seller">Vendedor</option>
            <option value="administrator">Administrador</option>
            <option value="customer">Cliente</option>
          </select>
        </label>
        <button
          className="btn-green"
          disabled={ ableBtn }
          type="button"
          data-testid="admin_manage__button-register"
          onClick={ request }
        >
          CADASTRAR
        </button>
      </form>
    </>
  );
}

export default AdminManage;
